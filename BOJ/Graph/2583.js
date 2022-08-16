/* 영역 구하기 */
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

// M=행, N=열, K=직사각형 갯수
const [M, N, K] = input.shift().split(' ').map(Number);
const matrix = input.map(el => {
  return el.split(' ').map(Number);
});

let is_fill = Array.from({ length: M }, () => Array(N).fill(false));
let is_visit = Array.from({ length: M }, () => Array(N).fill(false));
let area = 0;

// 채워진 칸은 true로, 빈칸은 false
function fillArea(x1, y1, x2, y2) {
  // 주어진 좌표는 왼쪽 아래가 원점,
  // 행렬은 2차원 행렬일시 왼쪽 위가 원점이므로,
  // 0과 주어진 M의 중간을 기준으로 대칭하여 행렬계산이 쉽도록 바꿔줌
  const start_row = M - y2;
  const start_col = x1;

  const width = x2 - x1;
  const height = y2 - y1;

  for(let i=0; i<height; i++) {
    for(let j=0; j<width; j++) {
      is_fill[i+start_row][j+start_col] = true;
    }
  }
}

// 입력값 확인 디버그용
/*
function printFillArea() {
  for(let i=0; i<M; i++) {
    let row = [];
    for(let j=0; j<N; j++) {
      if(is_fill[i][j]) row.push('■');
      else row.push('□');
    }
    console.log(...row);
  }
}
*/

function dfs(i, j) {
  const direction = [[-1,0], [1,0], [0,-1], [0,1]]; // 상, 하, 좌, 우

  area++;
  is_visit[i][j] = true;
  is_fill[i][j] = true;

  for(const [dx, dy] of direction) {
    // 범위 체크
    if(i+dx<0 || i+dx>=M || j+dy<0 || j+dy>=N) continue;
    
    if(!is_fill[i+dx][j+dy] && !is_visit[i+dx][j+dy]) {
      dfs(i+dx, j+dy);
    }
  }

  return area;
}

function solution() {
  let result = [];

  for(const [x1, y1, x2, y2] of matrix) {
    fillArea(x1, y1, x2, y2);
  }

  for(let i=0; i<M; i++) {
    for(let j=0; j<N; j++) {
      if(!is_visit[i][j] && !is_fill[i][j]) {
        area = 0;
        result.push(dfs(i, j));
      }
    }
  }
  
  console.log(result.length);
  console.log(...result.sort((a, b) => a - b));
}

solution();