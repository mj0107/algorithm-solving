/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  // 연속해서 두 집을 훔칠 수 없기 때문에 가장 큰 값 반환
  if (nums.length <= 2) {
    return Math.max(...nums);
  }

  // dp[index] = index 번 째 집을 도둑질 했을 때 얻을 수 있는 최댓값
  let dp = Array.from({ length: nums.length }, () => 0);

  dp[0] = nums[0]; // 0번째 집을 털었을 때 얻을 수 있는 최댓값은 0번째만 털 수 있음
  dp[1] = nums[1]; // 1번째 집은 0번째 집을 털 수 없으므로 1번째 집만 털었을 때 최댓값
  dp[2] = dp[0] + nums[2]; // 2번째 집은 1번째 집을 털 수 없으므로 0번째 값과 더해줌

  // i번째는 i-1번째와 연속으로 털 수 없기 때문에,
  // i-2와 i-3번째 중 최댓값과 i번째 값을 더해줌
  for (let i = 3; i < nums.length; i += 1) {
    dp[i] = Math.max(dp[i - 3], dp[i - 2]) + nums[i];
  }

  return Math.max(...dp);
};
