const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +input.shift();
const x = +input.pop();
const a = input[0].split(' ').map(Number);

function solution(n, a, x) {
  let cnt = 0;
  let [start, end] = [0, n-1];

  a.sort((a, b) => (a - b));

  while(start != end) {
    if(a[start] + a[end] === x) {
      cnt++;
      start++;
    }
    else if(a[start] + a[end] > x) end--;
    else start++;
  }

  console.log(cnt);
}

solution(n, a, x);