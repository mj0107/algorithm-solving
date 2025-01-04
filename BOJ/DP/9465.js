const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.trim());

let index = 0;
const T = +input[index++];

function solution() {
  for (let testCase = 1; testCase <= T; testCase++) {
    const n = +input[index++];
    const scoreList = input
      .slice(index, index + 2)
      .map((row) => row.split(' ').map(Number));
    index += 2;

    const maxScore = getMaxScore(n, scoreList);
    console.log(maxScore);
  }
}

function getMaxScore(n, scoreList) {
  const dp = Array.from({ length: 2 }, () => Array(n).fill(0));

  dp[0][0] = scoreList[0][0];
  dp[1][0] = scoreList[1][0];

  if (n >= 2) {
    dp[0][1] = scoreList[0][1] + dp[1][0];
    dp[1][1] = scoreList[1][1] + dp[0][0];
  }

  for (let j = 2; j < n; j++) {
    for (let i = 0; i < 2; i++) {
      // 직전 열의 반대편, 두 칸 전의 위쪽, 두 칸 전의 아래쪽 중 최댓값에 현재 칸의 값을 더한다.
      dp[i][j] =
        Math.max(dp[1 - i][j - 1], dp[0][j - 2], dp[1][j - 2]) +
        scoreList[i][j];
    }
  }

  // 마지막 열 중 최댓값을 반환한다.
  const maxScore = Math.max(dp[0][n - 1], dp[1][n - 1]);
  return maxScore;
}

solution();
