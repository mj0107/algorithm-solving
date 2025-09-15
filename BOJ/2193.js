/* 이친수 */
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input.shift();

function solution(N) {
  let dp = [];
  dp[1] = dp[2] = 1;

  for(let i=3; i<=N; i++) {
    dp[i] = BigInt(dp[i-2]) + BigInt(dp[i-1]);
  }

  console.log(String(dp[N]));
}

solution(N);