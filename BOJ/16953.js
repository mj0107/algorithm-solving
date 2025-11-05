const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let [A, B] = input[0].split(' ').map(Number);

function solution() {
  let count = 1;

  while (B > A) {
    if (B % 10 === 1) {
      B = Math.floor(B / 10);
      count++;
    } else if (B % 2 === 0) {
      B /= 2;
      count++;
    } else {
      console.log(-1)
      return;
    }
  }

  console.log(B === A ? count : -1);
}

solution();