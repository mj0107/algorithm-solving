/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  let result = [];

  let i = 0;
  while (i < nums.length) {
    let start = nums[i];

    // 연속수가 아닐때까지 인덱스 증가
    while (nums[i + 1] === nums[i] + 1) {
      i += 1;
    }

    let end = nums[i];

    // 시작수와 끝수가 같다면 하나만 결과에 추가
    result.push(start === end ? `${start}` : `${start}->${end}`);
    i += 1;
  }

  return result;
};
