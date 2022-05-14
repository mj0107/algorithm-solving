const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const [N, L] = input.shift().split(' ').map(Number);
const positions = input[0].split(' ').map(Number).sort((a, b) => a - b);

function solution(N, L, positions) {
  let result = 1;

  let start = positions.shift();

  for(const position of positions) {
    if((0.5 + position + 0.5) > (L + start)) {
      result++;
      start = position;
    }
  }

  console.log(result);
}

solution(N, L, positions);