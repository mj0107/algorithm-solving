/**
 * @param {number[]} nums
 * @return {number[]}
 */
const singleNumber = (nums) => {
  const count = {};

  nums.forEach((num) => {
    count[num] = count[num] + 1 || 1;
  });

  const result = [];
  for (const num in count) {
    const countOfNum = count[num];

    if (countOfNum === 1) {
      result.push(num);
    }
  }

  return result;
};
