/* 오르막 수 */
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input.shift();

function solution(N) {
  let dp = [[], new Array(10).fill(1)];
  const DIVISOR = 1e4 + 7;

  for (let i = 2; i <= N; i++) {
    dp[i] = [];
    dp[i][0] = dp[i - 1][0] % DIVISOR;

    for (let j = 1; j < 10; j++) {
      dp[i][j] = (dp[i][j - 1] + dp[i - 1][j]) % DIVISOR;
    }
  }

  console.log(dp[N].reduce((acc, cur) => acc + cur, 0) % DIVISOR);
}

solution(N);
