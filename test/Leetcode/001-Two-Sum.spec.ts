import { assert } from "chai";

import { twoSum } from "../../src/Leetcode/001-Two-Sum";

const testCases: { input: [number[], number]; expected: number[] }[] = [
  {
    input: [[2, 7, 11, 15], 9],
    expected: [0, 1],
  },
  {
    input: [[3, 2, 4], 6],
    expected: [1, 2],
  },
  {
    input: [[3, 3], 6],
    expected: [0, 1],
  },
];

suite("Example Algorithm", () => {
  for (const testCase of testCases) {
    test(`${testCase.input} => ${testCase.expected}`, () => {
      assert.deepEqual(twoSum(...testCase.input), testCase.expected);
    });
  }
});
