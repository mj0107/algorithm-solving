const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const OPINION_COUNT = +input.shift();
const OPINION_LIST = input.map(Number);

const solution = () => {
  if (OPINION_COUNT === 0) {
    console.log(0);
    return;
  }

  const exceptCount = Math.round(OPINION_COUNT * 0.15);
  const start = exceptCount;
  const end = OPINION_COUNT - exceptCount - 1;

  let sum = 0;

  OPINION_LIST.sort((a, b) => a - b);
  for (let i = start; i <= end; i++) {
    const opinion = OPINION_LIST[i];

    sum += opinion;
  }

  const result = Math.round(sum / (OPINION_COUNT - exceptCount * 2));
  console.log(result);
};

solution();
