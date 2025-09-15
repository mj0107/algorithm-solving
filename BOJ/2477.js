/* 참외밭 */
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const K = +input.shift();
const matrix = [];

input.map((row) => {
  matrix.push(row.split(' ').map(Number));
});

// K는 1제곱미터 당 참외의 갯수
// 동쪽 : 1, 서쪽 : 2, 남쪽 : 3, 북쪽 : 4
function solution(K, matrix) {
  let big_rect = 0;
  let small_rect = 0;

  let idx = -1;

  for(let i=0; i<6; i++) {
    let cur_len = matrix[i][1];
    let next_len = matrix[(i+1) % 6][1];

    let cur_rect = cur_len * next_len;

    if(cur_rect > big_rect) {
      big_rect = cur_rect;
      idx = i;
    }
  }

  small_rect = matrix[(idx+3) % 6][1] * matrix[(idx+4) % 6][1];

  const result = (big_rect - small_rect) * K;
  console.log(result);
}

solution(K, matrix);