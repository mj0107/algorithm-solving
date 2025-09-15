const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.trim());

const N = +input.shift();
const timeTable = input
  .map((row) => row.split(' ').map(Number))
  .sort((a, b) => {
    const [startA, endA] = a;
    const [startB, endB] = b;

    if (endA === endB) {
      return startA - startB;
    }

    return endA - endB;
  });

function solution() {
  let endTime = 0;
  let result = 0;

  for (let i = 0; i < N; i++) {
    const [curStart, curEnd] = timeTable[i];

    if (curStart >= endTime) {
      endTime = curEnd;
      result++;
    }
  }

  console.log(result);
}

solution();
