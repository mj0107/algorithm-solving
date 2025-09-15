/* 약수 */
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const cnt = +input.shift();
const real_divisors = input.shift().split(' ').map(Number);

function solution(cnt, real_divisors) {
  real_divisors.sort();

  const min = Math.min(...real_divisors);
  const max = Math.max(...real_divisors);

  const result = min * max;

  console.log(result);
}

solution(cnt, real_divisors);