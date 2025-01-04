const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.trim());

const [A, B, C] = input.shift().split(' ').map(BigInt);

function solution() {
  const result = power(A, B, C);

  console.log(result);
}

function power(base, exp, mod) {
  if(exp === 0n) {
    return 1n;
  }

  let half = power(base, exp / 2n, mod);
  let result = (half * half) % mod;

  // 지수가 홀수이면, base가 한개 남으므로 곱해준다.
  if(exp % 2n === 1n) {
    result = (result * base) % mod;
  }

  return result;
}

solution();
