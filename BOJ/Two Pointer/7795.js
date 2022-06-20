/* 먹을 것인가 먹힐 것인가 */
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const T = +input.shift();
function solution() {
  for(let i=0; i<T; i++) {
    let cnt = 0;

    const[N, M] = input.shift().split(' ').map(Number);
    const A = input.shift().split(' ').map(Number);
    const B = input.shift().split(' ').map(Number);

    A.sort((a, b) => a - b);
    B.sort((a, b) => a - b);

    for(let j=0; j<A.length; j++) {
      for(let k=0; k<B.length; k++) {
        if(A[j] > B[k]) cnt++;
      }
    }

    console.log(cnt);
  }
}

solution();