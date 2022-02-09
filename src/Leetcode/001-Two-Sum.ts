/**
 * Given an array of numbers, find the indices of the two numbers such that they add up to a specific target.
 *
 * @param {number[]} nums An array of numbers.
 * @param {number} target The target sum.
 * @returns {[number, number]} The indices of the two numbers that sum to the target.
 */
export const twoSum = (nums: number[], target: number): number[] => {
  for (let i = 0; i < nums.length; i++) {
    const second = nums.indexOf(target - nums[i]);
    if (second === -1) {
      continue;
    }
    if (second !== i) {
      return [i, second].sort((a, b) => a - b);
    }
  }
  return [-1, -1];
};
