function solution(n) {
  const MODULAR = 1234567;
  let dp = Array.from({ length: 2000 }, () => 0);

  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i += 1) {
    dp[i] = (dp[i - 2] + dp[i - 1]) % MODULAR;
  }

  return dp[n];
}
