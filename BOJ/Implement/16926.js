/* 배열 돌리기 1 */
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

// N = 행, M = 열, R = 회전 수
const [N, M, R] = input.shift().split(' ').map(Number);
let matrix = [];
input.map(item => {
  matrix.push(item.split(' ').map(Number));
});

function rotate(N, M, matrix) {
  const rect_cnt = Math.min(N, M) / 2;

  for(let cnt=0; cnt<rect_cnt; cnt++) {
    const row = N - cnt - 1;
    const col = M - cnt - 1;

    // 회전해야 하는 사각형의 기준점
    const tmp = matrix[cnt][cnt];

    // 위: 오른쪽에서 왼쪽으로
    for(let j=cnt; j<col; j++) {
      matrix[cnt][j] = matrix[cnt][j+1];
    }
    
    // 오른쪽: 아래에서 위로
    for(let i=cnt; i<row; i++) {
      matrix[i][col] = matrix[i+1][col];
    }

    // 아래: 왼쪽에서 오른쪽으로
    for(let j=col; j>cnt; j--) {
      matrix[row][j] = matrix[row][j-1];
    }

    // 왼쪽: 위에서 아래로
    for(let i=row; i>cnt; i--) {
      matrix[i][cnt] = matrix[i-1][cnt];
    }

    matrix[cnt+1][cnt] = tmp;
  }
}
function solution(N, M, R, matrix) {
  for(let i=0; i<R; i++) {
    rotate(N, M, matrix);
  }
  
  matrix.map(row => {
    console.log(row.join(' '));
  });
}

solution(N, M, R, matrix);