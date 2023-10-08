import { chunk, range, map, flatten } from "lodash";
import { TextEncoder } from "util";

export function permute(binary: number[], permuteTable: number[]): number[] {
  if (permuteTable.some(order => order > binary.length)) {
    throw new Error(`binary size is ${binary.length}. It is maximum allowed tables number`);
  }

  if (permuteTable.some(order => order <= 0)) {
    throw new Error("table should not contain 0 or negative numbers!");
  }

  return permuteTable.map((order) => binary[order - 1]);
}

export function shiftLeft(binary: number[], times: number) {
  if (times < 0) {
    throw new Error("number of shifts should be positive");
  }

  return range(binary.length)
    .map(position => position + times)
    .map(position => position >= binary.length ? position - binary.length : position)
    .map(position => binary[position])
}

export function xor(binaryA: number[], binaryB: number[]): number[] {
  return binaryA.map((bit, position) => bit === binaryB[position] ? 0 : 1);
}

export function toBits(byte: number): number[] {
  return byte.toString(2)
    .padStart(8, '0')
    .split('')
    .map(Number)
}

export function to64BitArray(plainText: string): number[][] {
  const byteArray = new TextEncoder().encode(plainText);
  const bitArray = flatten(map(byteArray, toBits));
  const chunks = Math.ceil(bitArray.length / 64);
  const padding = new Array(chunks * 64 - bitArray.length).fill(0);

  return chunk([...bitArray, ...padding], 64);
}
