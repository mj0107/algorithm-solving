/* 오르막 수 */
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input.shift();

function solution(N) {
  let dp = Array.from({ length: N + 1 }, () => new Array(10).fill(0));
  const DIVISOR = 1e4 + 7;

  dp[1].fill(1);
  for (let i = 1; i <= N; i++) {
    dp[i][0] = 1;
  }

  for (let i = 1; i <= N; i++) {
    for (let j = 1; j < 10; j++) {
      dp[i][j] = (dp[i - 1][j] + dp[i][j - 1]) % DIVISOR;
    }
  }

  const result = dp[N].reduce((acc, cur) => acc + cur) % DIVISOR;

  console.log(result);
}

solution(N);
