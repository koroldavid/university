import { permute, shiftLeft, xor } from "./utils";

describe('permutation', () => {
  it('throws error if table has number bigger for its size', () => {
    expect(() => permute([1, 2, 3, 4], [1, 2, 3, 8]))
        .toThrow(new Error("input size is 4. It is maximum allowed tables number"));
  });

  it('throws error if table has 0 or negative number', () => {
    expect(() => permute([1, 2, 3, 4], [0, 1, 2, 3]))
    .toThrow(new Error("table should not contain 0 or negative numbers!"));
    expect(() => permute([1, 2, 3, 4], [-1, 1, 2, 3]))
    .toThrow(new Error("table should not contain 0 or negative numbers!"));
  });

  it('permutes input based on array definitions and could change its size', () => {
      expect(permute([1, 2, 3, 4], [4, 1, 3, 2])).toEqual([4, 1, 3, 2]);
      expect(permute([1, 2, 3, 4], [1, 2, 3, 4, 4, 1])).toEqual([1, 2, 3, 4, 4, 1]);
      expect(permute([1, 2, 3, 4], [3, 3])).toEqual([3, 3]);
  });
});

describe("shift left", () => {
  it('shift elements n times left', () => {
    expect(shiftLeft([1, 2, 3, 4], 0)).toEqual([1, 2, 3, 4]);
    expect(shiftLeft([1, 2, 3, 4], 1)).toEqual([2, 3, 4, 1]);
    expect(shiftLeft([1, 2, 3, 4], 2)).toEqual([3, 4, 1, 2]);
    expect(shiftLeft([1, 2, 3, 4], 3)).toEqual([4, 1, 2, 3]);
    expect(shiftLeft([1, 2, 3, 4], 4)).toEqual([1, 2, 3, 4]);
  });

  it('cannot shift negative times', () => {
    expect(() => shiftLeft([1, 2, 3, 4], -1)).toThrow(new Error("number of shifts should be positive"));
  });
});

describe('xor', () => {
  it('performs xor based on 2 inputs', () => {
    expect(xor(
        [1, 0, 0, 1],
        [1, 1, 0, 0]
    )).toEqual(
        [0, 1, 0, 1]
    );
  })
});