/**
 * @param {number[]} nums
 * @return {number}
 */
const maxProductDifference = (nums) => {
  nums.sort((a, b) => a - b);

  const a = nums[nums.length - 2];
  const b = nums.at(-1);
  const c = nums[0];
  const d = nums[1];

  return a * b - c * d;
};
