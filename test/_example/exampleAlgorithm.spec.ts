import { assert } from "chai";

import { exampleAlgorithm } from "../../src/_example/exampleAlgorithm";

const testCases = [
  {
    input: true,
    expected: false,
  },
  {
    input: false,
    expected: true,
  },
];

suite("Example Algorithm", () => {
  for (const testCase of testCases) {
    test(`${testCase.input} => ${testCase.expected}`, () => {
      assert.equal(exampleAlgorithm(testCase.input), testCase.expected);
    });
  }
});
