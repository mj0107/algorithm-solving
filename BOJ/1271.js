const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.trim());

const [n, m] = input.shift().split(' ').map(BigInt);

function solution() {
  console.log((n / m).toString());
  console.log((n % m).toString());
}

solution();
