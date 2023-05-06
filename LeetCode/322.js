/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  let dp = Array.from({ length: amount + 1 }, () => Infinity);
  dp[0] = 0; // 0원은 0개의 동전이 필요

  for (const COIN of coins) {
    for (let i = COIN; i <= amount; i += 1) {
      // i원은 (i - COIN)원 보다 COIN원의 동전 1개를 더 사용
      // 혹은 이미 더 적은 동전을 사용해서 만들 수 있다면 그대로
      dp[i] = Math.min(dp[i], dp[i - COIN] + 1);
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
};
