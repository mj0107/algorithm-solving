const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.trim());

const n = BigInt(input.shift());

const DIVISOR = BigInt(1e9 + 7);
const memo = [];

function solution() {
  memo[0] = 0n;
  memo[1] = 1n;
  memo[2] = 1n;

  const result = fibonacci(n);
  console.log(result.toString());
}

function fibonacci(n) {
  if (memo[n]) {
    return memo[n];
  }

  const half = n / 2n;
  if (n % 2n === 0n) {
    memo[n] =
      (fibonacci(half) * (2n * fibonacci(half - 1n) + fibonacci(half))) %
      DIVISOR;
  } else {
    memo[n] =
      (fibonacci(half) * fibonacci(half) +
        fibonacci(half + 1n) * fibonacci(half + 1n)) %
      DIVISOR;
  }

  return memo[n];
}

solution();
