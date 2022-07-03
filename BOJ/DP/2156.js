/* 포도주 시식 */
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +input.shift();
const wines = input.map(Number);
wines.unshift(0);

function solution(n, wines) {
  const dp = Array.from({ length: n + 1}, () => 0);
  dp[1] = wines[1];
  dp[2] = wines[1] + wines[2];

  for(let i=3; i<=n; i++) {
    dp[i] = Math.max(dp[i-2], (dp[i-3] + wines[i-1])) + wines[i];
    dp[i] = Math.max(dp[i-1], dp[i]);
  }

  console.log(dp[n]);
}

solution(n, wines);