import { chunk, range, toString } from "lodash";
import { permute, shiftLeft, toBits, xor } from "./utils";
import {
  EXPANSION_D_48,
  FINAL_PERMUTATION,
  INITIAL_PERMUTATION_64,
  KEY_COMPARISON_48,
  KEY_WITHOUT_PARITY_56,
  NUMBER_OF_KEY_SHIFTS_BY_ROUND,
  PERMUTATION_ROUNDS,
  STRAIGHT_D_BOX_32,
  S_BOXES,
} from "./constants";

function sBoxSubstitution(input: number[]): number[] {
  return chunk(input, 6).reduce((output, aChunk, chunkNumber) => {
    const [first, second, third, fourth, fifth, sixth] = aChunk.map(toString);

    const row = parseInt(first + sixth, 2);
    const col = parseInt(second + third + fourth + fifth, 2);
    const convertedChunk = toBits(S_BOXES[chunkNumber][row][col]);

    return [...output, ...convertedChunk];
  }, []);
}

function des(message: number[], binaryKeysPerRound: number[][]): number[] {
  if (message.length != 64) throw new Error("message should be 64 bits long!")

  let [left, right] = chunk(
      permute(message, INITIAL_PERMUTATION_64),
      32,
  );

  range(PERMUTATION_ROUNDS).forEach(round => {
      const expanded = permute(right, EXPANSION_D_48);
      const xored = xor(expanded, binaryKeysPerRound[round]);
      const substituted = sBoxSubstitution(xored);
      const permuted = permute(substituted, STRAIGHT_D_BOX_32);

      left = xor(left, permuted);
      if (round !== 15) {
        [right, left] = [left, right];
      }
  });

  return permute([...left, ...right], FINAL_PERMUTATION);
}

function prepareKeyForPermutationRounds(key: number[]): number[][] {
  if (key.length != 64) throw new Error("key should be 64 bits long!")

  let [left, right] = chunk(
      permute(key, KEY_WITHOUT_PARITY_56),
      28,
  );

  return range(PERMUTATION_ROUNDS).map(round => {
      left = shiftLeft(left, NUMBER_OF_KEY_SHIFTS_BY_ROUND[round]);
      right = shiftLeft(right, NUMBER_OF_KEY_SHIFTS_BY_ROUND[round]);
      return permute([...left, ...right], KEY_COMPARISON_48);
  });
}

export function encryptWithDES(message: number[], key: number[]): number[] {
  return des(message, prepareKeyForPermutationRounds(key));
}

export function decryptWithDES(message: number[], key: number[]): number[] {
  return des(message, prepareKeyForPermutationRounds(key).reverse());
}
