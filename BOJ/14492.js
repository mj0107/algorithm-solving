const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input.shift();
const A = input.slice(0, N).map((row) => row.split(' ').map(Number));
const B = input.slice(-N).map((row) => row.split(' ').map(Number));
const C = Array.from({ length: N }, () => Array.from({ length: N }, () => 0));

function booleanMultiply() {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      for (let k = 0; k < N; k++) {
        C[i][j] ||= (A[i][k] && B[k][j]);
      }
    }
  }
}

function solution() {
  booleanMultiply();

  let oneCount = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (C[i][j] === 1) {
        oneCount++;
      }
    }
  }

  console.log(oneCount);
}

solution();