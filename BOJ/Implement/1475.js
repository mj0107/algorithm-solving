const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = input.shift();
const numberCountList = Array.from({ length: 10 }, () => 0);

const solution = () => {
  [...N].forEach((el) => numberCountList[parseInt(el)]++);

  const sixAndNineCount = Math.ceil(
    (numberCountList[6] + numberCountList[9]) / 2
  );
  numberCountList[6] = numberCountList[9] = sixAndNineCount;

  const result = Math.max(...numberCountList);
  console.log(result);
};

solution();
