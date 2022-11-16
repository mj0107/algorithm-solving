/* 침투 */
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [M, N] = input.shift().split(' ').map(Number);
const GRID = input.map((row) => {
  return row.split('').map(Number);
});

function solution(M, N, GRID) {
  let result = 'NO';
  const DIR = [
    [-1, 0], // 상
    [1, 0], // 하
    [0, -1], // 좌
    [0, 1], // 우
  ];

  const isValidIndex = (row, col) => {
    // overflow or underflow
    if (row < 0 || col < 0 || row >= M || col >= N) return false;
    // 전류가 안통하는 곳이면 false
    if (GRID[row][col] === 1) return false;
    
    return true;
  };

  const DFS = (row, col) => {
    for(const [DIR_X, DIR_Y] of DIR) {
      const [NEW_ROW, NEW_COL] = [row + DIR_X, col + DIR_Y];

      if(isValidIndex(NEW_ROW, NEW_COL)) {
        // 방문처리
        GRID[NEW_ROW][NEW_COL] = 1;
        // 새로운 좌표가 마지막 행에 도달했다면 true
        if(NEW_ROW === M - 1) return true;
        // DFS를 계속 진행했을 경우 마지막에 true를 return하면 
        // Back Tracking으로 결국 결과값은 true
        if(DFS(NEW_ROW, NEW_COL)) return true;
      }
    }
  };

  for(let j=0; j<N; j++) {
    if(GRID[0][j] === 0) {
      GRID[0][j] = 1; // 방문처리
      if(DFS(0, j)) { // 가능한 방법 하나를 찾으면 break
        result = 'YES';
        break;
      }
    }
  }

  console.log(result);
}

solution(M, N, GRID);
