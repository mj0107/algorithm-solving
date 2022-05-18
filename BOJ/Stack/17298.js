/* 오큰수 */
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const N = +input.shift();
const list = input[0].split(' ').map(Number);

function solution(N, list) {
  let stack = [];
  let result = new Array(list.length).fill(-1);

  for (let i = 0; i < list.length; i++) {
    while (stack.length && list[stack[stack.length - 1]] < list[i]) {
      result[stack.pop()] = list[i];
    }
    stack.push(i);
  }
console.log(result.join(" "));
}

solution(N, list);