const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const N = +input.shift();

let arr = [];
input.map(item => {
  let tmp = item.split(' ').map(item => +item);
  arr.push(tmp);
});

function solution(N, matrix) {
  for(let k=0; k<N; k++) {
    for(let i=0; i<N; i++) {
      for(let j=0; j<N; j++) {
        if(matrix[i][k] && matrix[k][j]) {
          matrix[i][j] = 1;
        }
      }
    }
  }

  for(let i=0; i<N; i++) {
    console.log(matrix[i].join(' '));
  }
}

solution(N, arr);