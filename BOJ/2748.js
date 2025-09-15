/* 피보나치 수 2 */
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input;
let dp = [0, 1];

function fibonacci(n) {
  if (n <= 1) return n;

  if (dp[n]) return BigInt(dp[n]);

  return (dp[n] = BigInt(fibonacci(n - 2)) + BigInt(fibonacci(n - 1)));
}

function solution() {
  const result = fibonacci(n);

  console.log(result.toString());
}

solution();
