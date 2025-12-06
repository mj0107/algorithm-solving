const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

// N: 격자의 크기, M: 이동 횟수
let N, M;
// 격자
let board;
// 이동의 정보(방향, 거리)
let moveInfoList;

// 구름 위치
let cloudPosList;

// ←, ↖, ↑, ↗, →, ↘, ↓, ↙
const dr = [0, -1, -1, -1, 0, 1, 1, 1];
const dc = [-1, -1, 0, 1, 1, 1, 0, -1];

function solution() {
  init();

  Object.entries(moveInfoList).forEach(([_, { direction, distance }]) => {
    move(direction - 1, distance);
    const visited = rain();
    waterCopyBug();
    createNewCloud(visited);
  });

  const result = getAllWater();

  console.log(result);
}

function init() {
  const parsed = input.map((row) => row.split(' ').map(Number));
  const [first, ...rest] = parsed;

  [N, M] = first;
  board = rest.slice(0, N);
  moveInfoList = rest
    .slice(N, N + M)
    .map(([direction, distance]) => ({ direction, distance }));

  // 문제는 (1, 1)이 시작점이지만, 배열은 (0, 0)부터 시작하므로 1씩 빼준다.
  cloudPosList = [
    [N - 1, 0],
    [N - 1, 1],
    [N - 2, 0],
    [N - 2, 1],
  ];
}

/** 구름을 움직이는 함수 */
function move(direction, distance) {
  distance %= N;

  cloudPosList = cloudPosList.map(([row, col]) => {
    let nr = row + distance * dr[direction];
    let nc = col + distance * dc[direction];

    if (nr >= N) {
      nr = nr % N;
    }
    if (nr < 0) {
      nr = N + nr;
    }

    if (nc >= N) {
      nc = nc % N;
    }
    if (nc < 0) {
      nc = N + nc;
    }

    return [nr, nc];
  });
}

/** 비 내리는 함수 */
function rain() {
  const visited = Array.from({ length: N }, () =>
    Array.from({ length: N }, () => false)
  );

  cloudPosList.forEach(([row, col]) => {
    board[row][col]++;
    visited[row][col] = true;
  });

  return visited;
}

/** 유효한 범위인지 판단하는 함수 */
function isValid(row, col) {
  return 0 <= row && row < N && 0 <= col && col < N;
}

/** 물복사버그 함수 */
function waterCopyBug() {
  const diagonalPosList = [
    [-1, -1],
    [-1, 1],
    [1, -1],
    [1, 1],
  ];

  cloudPosList.forEach(([row, col]) => {
    let count = 0;

    diagonalPosList.forEach(([dr, dc]) => {
      const nr = row + dr;
      const nc = col + dc;

      if (isValid(nr, nc) && board[nr][nc] > 0) {
        count++;
      }
    });

    board[row][col] += count;
  });
}

/** 새로운 구름을 만드는 함수 */
function createNewCloud(visited) {
  const newCloudPosList = [];

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (board[i][j] >= 2 && !visited[i][j]) {
        newCloudPosList.push([i, j]);
        board[i][j] -= 2;
      }
    }
  }

  cloudPosList = newCloudPosList;
}

/** 모든 물의 양을 구하는 함수 */
function getAllWater() {
  let water = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      water += board[i][j];
    }
  }

  return water;
}

solution();
