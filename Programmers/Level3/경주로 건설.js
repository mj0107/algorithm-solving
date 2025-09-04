const EMPTY = 0;
const WALL = 1;

const STRAIGHT_COST = 100;
// 코너를 건설하는 값 + 앞으로 한 칸 나아가는 값
const CORNER_COST = 500 + STRAIGHT_COST;

// 상, 우, 하, 좌
const dr = [-1, 0, 1, 0];
const dc = [0, 1, 0, -1];

let N;

function isValid(row, col) {
  return 0 <= row && row < N && 0 <= col && col < N;
}

function bfs(board) {
  // [행, 열, 방향, 금액]
  const queue = [];
  const visited = Array.from({ length: N }, () =>
    Array.from({ length: N }, () => Array(4).fill(Infinity))
  );

  if (board[1][0] === EMPTY) {
    queue.push([1, 0, 2, STRAIGHT_COST]);
    visited[1][0][2] = STRAIGHT_COST;
  }
  if (board[0][1] === EMPTY) {
    queue.push([0, 1, 1, STRAIGHT_COST]);
    visited[0][1][1] = STRAIGHT_COST;
  }

  while (queue.length > 0) {
    const [curRow, curCol, curDir, curCost] = queue.shift();

    for (let d = 0; d < 4; d++) {
      const nr = curRow + dr[d];
      const nc = curCol + dc[d];

      // 배열 범위를 벗어날 경우 스킵한다.
      if (!isValid(nr, nc)) {
        continue;
      }
      // 벽일 경우 스킵한다.
      if (board[nr][nc] === WALL) {
        continue;
      }

      // 이전과 다른 방향일 경우, 코너이기 때문에 비용이 증가한다.
      const newCost =
        curDir === d ? curCost + STRAIGHT_COST : curCost + CORNER_COST;

      // 이미 더 적은 비용으로 방문한적이 있다면 스킵한다.
      if (visited[nr][nc][d] <= newCost) {
        continue;
      }

      visited[nr][nc][d] = newCost;
      queue.push([nr, nc, d, newCost]);
    }
  }

  let minCost = Math.min(...visited[N - 1][N - 1]);
  return minCost;
}

function solution(board) {
  N = board.length;

  let minCost = bfs(board);
  return minCost;
}
