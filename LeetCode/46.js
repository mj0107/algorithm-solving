/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const getPermutationList = (nums, cnt) => {
    let result = [];

    if (cnt === 1) {
      return nums.map((el) => [el]);
    }

    // 순회하면서 하나씩 고정
    nums.forEach((fixed, idx) => {
      // 고정된 것 나머지
      let rest = [...nums.slice(0, idx), ...nums.slice(idx + 1)];
      let permutationList = getPermutationList(rest, cnt - 1);
      // 고정된 것과 고정된 것 나머지로 만든 순열을 붙임
      let attached = permutationList.map((el) => [fixed, ...el]);

      result.push(...attached);
    });

    return result;
  };

  return getPermutationList(nums, nums.length);
};
