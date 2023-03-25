/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var runningSum = function(nums) {
  let result = [];

  nums.reduce((acc, cur) => {
      acc += cur;
      result.push(acc);    
      return acc;
  }, 0);

  return result;
};