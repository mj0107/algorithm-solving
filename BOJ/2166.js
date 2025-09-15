const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.trim());

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

const N = +input.shift();
const pointList = input.map((row) => {
  const [x, y] = row.split(' ').map(Number);

  return new Point(x, y);
});

function solution() {
  let sum1 = 0;
  let sum2 = 0;

  for (let i = 0; i < N; i++) {
    const j = (i + 1) % N;

    sum1 += pointList[i].x * pointList[j].y;
    sum2 += pointList[j].x * pointList[i].y;
  }

  const result = (Math.abs(sum1 - sum2) / 2).toFixed(1);
  console.log(result);
}

solution();
