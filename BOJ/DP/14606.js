const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input.shift();

const solution = (N) => {
  const dp = Array.from({ length: N + 1 }, () => 0);
  dp[2] = 1;

  if(N < 3) {
    console.log(dp[N]);
    return;
  }

  for(let i=3; i<=N; i++) {
    dp[i] = dp[i - 1] + i - 1;
  }

  console.log(dp[N]);
}; 

solution(N);