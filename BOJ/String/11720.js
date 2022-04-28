const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const [N, inputTestCase] = input;

function solution(N, inputTestCase) {
  let sum = 0;
  inputTestCase.split('').map(item => {
    sum += Number(item);
  });

  console.log(sum);
}

solution(N, inputTestCase);