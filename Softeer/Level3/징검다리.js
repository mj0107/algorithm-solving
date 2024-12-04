const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin', 'utf-8')
  .toString()
  .trim()
  .split('\n');

const N = +input.shift();
const heightList = input.shift().split(' ').map(Number);

function solution() {
  const dp = Array.from({ length: N }, () => 1);

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < i; j++) {
      if (heightList[i] > heightList[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  console.log(Math.max(...dp));
}

solution();
