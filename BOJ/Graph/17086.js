const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const space = input.map(row => row.split(' ').map(Number));

const state = {
  EMPTY: 0,
  SHARK: 1,
};

// 좌상, 상, 우상, 우, 우하, 하, 좌하, 좌
const dr = [-1, -1, -1, 0, 1, 1, 1, 0];
const dc = [-1, 0, 1, 1, 1, 0, -1, -1];

let queue = [];
let visited = Array.from({ length: N }, () => Array.from({ length: M }, () => false));
let maxDistance = Number.MIN_SAFE_INTEGER;

const solution = () => {
  for(let i=0; i<N; i++) {
    for(let j=0; j<M; j++) {
      // 상어가 있는 칸이라면,
      if(space[i][j] === state.SHARK) {
        // 방문처리를 해주고,
        visited[i][j] = true;
        // [행, 열, 거리] 를 큐에 넣어준다.
        queue.push([i, j, 0]);
      }
    }
  }

  bfs();

  console.log(maxDistance);
};

const bfs = () => {
  while(queue.length > 0) {
    const [curRow, curCol, distance] = queue.shift();

    for(let i=0; i<8; i++) {
      let nr = curRow + dr[i];
      let nc = curCol + dc[i];

      // 유효하지 않은 인덱스일 경우,
      if(isValidIndex(nr, nc) === false) {
        continue;
      }
      // 상어가 있는 칸일 경우,
      if(space[nr][nc] === state.SHARK) {
        continue;
      }
      // 이미 방문한 곳일 경우,
      if(visited[nr][nc] === true) {
        continue;
      }

      maxDistance = Math.max(maxDistance, distance + 1);
      visited[nr][nc] = true;
      queue.push([nr, nc, distance + 1]);
    }
  }
}

/**
 * 인자로 받은 행과 열이 범위 내의 칸이라면 true, 아니라면 false를 반환하는 함수
 * 
 * @param {number} row 행
 * @param {number} col 열
 * @returns 범위 내의 위치라면 true, 아니라면 false를 반환한다.
 */
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