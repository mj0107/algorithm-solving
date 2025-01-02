const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.trim());

const [N, M] = input.shift().split(' ').map(Number);
const sortedNumberList = input
  .shift()
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

const result = [];
const temp = [];
const used = Array.from({ length: M }, () => false);

function solution() {
  getPermutation(0);

  console.log(result.join('\n'));
}

function getPermutation(count) {
  if (count === M) {
    result.push(temp.join(' '));
    return;
  }

  let prev;
  for (let i = 0; i < N; i++) {
    if (!used[i] && sortedNumberList[i] !== prev) {
      used[i] = true;
      temp.push(sortedNumberList[i]);
      getPermutation(count + 1);
      temp.pop();
      used[i] = false;
      prev = sortedNumberList[i];
    }
  }
}

solution();
