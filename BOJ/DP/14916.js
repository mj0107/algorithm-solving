const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +input.shift();

const solution = (n) => {
  const dp = Array.from({ length: n + 1 }, () => -1);

  dp[2] = dp[5] = 1;
  dp[4] = 2;

  for (let i = 6; i <= n; i++) {
    if (dp[i - 2] !== -1 && dp[i - 5] === -1) {
      dp[i] = dp[i - 2] + 1;
      continue;
    }
    if (dp[i - 5] !== -1 && dp[i - 2] === -1) {
      dp[i] = dp[i - 5] + 1;
      continue;
    }
    dp[i] = Math.min(dp[i - 2], dp[i - 5]) + 1;
  }

  console.log(dp[n]);
};

// const solution = (n) => {
//   if(n % 5 === 0) {
//     console.log(n / 5);
//     return;
//   }

//   let result = 0;

//   while(n > 0) {
//     n -= 2;
//     result += 1;

//     if(n % 5 === 0) {
//       result += n / 5;
//       n = 0;
//       break;
//     }
//   }

//   console.log(n === 0 ? result : -1);
// };

solution(n);
