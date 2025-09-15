/* 카드 구매하기2 */
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().split(/\s+/);

const N = +input.shift();
const P = input.map(Number);

function solution(N, P) {
  let dp = [0, ...P];

  for(let i=2; i<dp.length; i++) {
    for(let j=1; j<i; j++) {
      dp[i] = Math.min(dp[i], dp[i-j] + dp[j]);
    }
  }

  console.log(dp[N]);
}

solution(N, P);