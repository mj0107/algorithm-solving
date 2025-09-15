const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const N = +input.shift();
const weights = input.map(Number);

function solution(N, weights) {
  let result = 0;
  weights.sort((a, b) => b - a);

  for(let i=0; i<N; i++) {
    result = Math.max(result, weights[i] * (i + 1));
  }
  console.log(result);
}

solution(N, weights);