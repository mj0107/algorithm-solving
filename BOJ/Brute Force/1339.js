const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().split(/\s+/);

const N = input.shift();

console.log(input);

function solution(N, input) {
  const alphaArr = {};

  for(str of input) {
    for(let i=0; i<str.length; i++) {
      const alphabet = str[i];
      if(!alphaArr[alphabet]) alphaArr[alphabet] = 0;
      alphaArr[alphabet] += 10 ** (str.length - (i + 1));
    }
  }

  const result = Object.values(alphaArr)
                    .sort((a, b) => (b - a))
                    .reduce((acc, cur, i) => (acc + (cur * (9 - i))), 0);

  console.log(result);
}

solution(N, input);