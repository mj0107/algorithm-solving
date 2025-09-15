const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution() {
  const [strA, strB, strC] = [...input].map((el) => el.trim());
  const [numA, numB, numC] = input.map(Number);

  console.log(numA + numB - numC);
  console.log(Number(strA + strB) - Number(strC));
}

solution();
