const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const T = +input.shift();
const numberList = input.map(Number);

function solution() {
  const max = Math.max(...numberList);
  const dp = Array.from({ length: max + 1 }, () => 0);

  dp[0] = 1;

  for (let i = 1; i <= 3; i++) {
    for (let j = i; j <= max; j++) {
      dp[j] += dp[j - i];
    }
  }

  const result = [];
  for (const num of numberList) {
    result.push(dp[num]);
  }

  console.log(result.join('\n'));
}

solution();
