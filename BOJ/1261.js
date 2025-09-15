const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [M, N] = input.shift().split(' ').map(Number);
const maze = input.map(row => row.split('').map(Number));

const dr = [-1, 1, 0, 0];
const dc = [0, 0, -1, 1];

let visited = Array.from({ length: N }, () => Array.from({ length: M }), () => false);
let result = Infinity;

const state = {
  EMPTY: 0,
  WALL: 1,
};

const solution = () => {
  bfs();
  console.log(result);
};

const bfs = () => {
  let queue = [[0, 0, 0]];

  while(queue.length > 0) {
    let [curRow, curCol, curCount] = queue.shift();

    if(curRow === N - 1 && curCol === M - 1) {
      result = curCount;
      return;
    }

    for(let i=0; i<4; i++) {
      let nr = curRow + dr[i];
      let nc = curCol + dc[i];

      if(isValidIndex(nr, nc) === false) {
        continue;
      }
      if(visited[nr][nc] === true) {
        continue;
      }

      visited[nr][nc] = true;
      
      if(maze[nr][nc] === state.WALL) {
        queue.push([nr, nc, curCount + 1]);
      }
      else if(maze[nr][nc] === state.EMPTY) {
        queue.unshift([nr, nc, curCount]);
      }
    }
  }
};

const isValidIndex = (row, col) => {
  if(row < 0 || row >= N) {
    return false;
  }
  if(col < 0 || col >= M) {
    return false;
  }

  return true;
}

solution();