function solution(triangle) {
  const height = triangle.length;
  const dp = Array.from({ length: height }, (_, i) => Array(i + 1));
  dp[0][0] = triangle[0][0];

  for (let i = 1; i < height; i++) {
    for (let j = 0; j < triangle[i].length; j++) {
      dp[i][j] =
        Math.max(dp[i - 1][j - 1] ?? 0, dp[i - 1][j] ?? 0) + triangle[i][j];
    }
  }

  return Math.max(...dp[height - 1]);
}
