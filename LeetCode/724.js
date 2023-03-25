/**
 * @param {number[]} nums
 * @return {number}
 */
 var pivotIndex = function(nums) {
  let leftSum = 0;
  let rightSum = nums.reduce((acc, cur) => acc + cur);

  console.log('total sum: ', rightSum);

  let result = -1;
  
  for(let i=0; i<nums.length; i+=1) {
      let cur = nums[i];
      
      rightSum -= cur;

      if(leftSum === rightSum) {
          result = i;
          break;
      }

      leftSum += cur;
  }

  return result;
};