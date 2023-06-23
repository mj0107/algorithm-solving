/**
 * @param {number[]} nums
 * @return {number}
 */
var longestArithSeqLength = function (nums) {
  // Map = {공차: 수열의 길이}
  // dp[index] = nums[index]로 끝나는 수열
  // 즉, dp[index] 에는 nums[index]로 끝나는 여러 공차들에 대한 수열의 길이가 Map으로 들어있음
  let dp = Array.from({ length: nums.length }, () => new Map());
  let max = 0;

  for (let i = 0; i < nums.length; i += 1) {
    for (let j = i + 1; j < nums.length; j += 1) {
      let tolerance = nums[j] - nums[i];

      // 만약 dp[i]가 이미 현재 구한 공차로 이루어진 수열을 가지고 있다면,
      if (dp[i].has(tolerance)) {
        // dp[i]에 있는 수열에 하나 더해주므로 dp[i]의 수열의 길이에 1을 더해줌
        dp[j].set(tolerance, dp[i].get(tolerance) + 1);
      }
      // 설정된 수열이 없다면, nums[i]와 nums[j]로 이루어지는 수열의 길이가 2인 수열 설정
      else {
        dp[j].set(tolerance, 2);
      }

      max = Math.max(max, dp[j].get(tolerance));
    }
  }

  return max;
};
