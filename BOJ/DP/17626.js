const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.trim());

const n = +input.shift();

function solution() {
  // dp[i] = i를 제곱수들의 합으로 나타낼 수 있는 최소한의 개수
  const dp = Array.from({ length: n + 1 }, () => Infinity);
  dp[0] = 0;

  for (let i = 1; i * i <= n; i++) {
    const square = i * i;

    for (let j = square; j <= n; j++) {
      // 현재 제곱수만큼 뺀 수를 나타낼 수 있는 최소한의 제곱수의 개수 + 1
      dp[j] = Math.min(dp[j], dp[j - square] + 1);
    }
  }

  console.log(dp[n]);
}

solution();
