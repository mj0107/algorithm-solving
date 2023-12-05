const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const [R, C, K] = input.shift().split(' ').map(Number);
const MAP = input.map((row) => row.trim().split(''));
const isVisited = Array.from({ length: R }, () =>
  Array.from({ length: C }, () => false)
);

/** 상, 하, 좌, 우 사방탐색 위치 */
const dr = [-1, 1, 0, 0];
const dc = [0, 0, -1, 1];

let result = 0;

const solution = () => {
  // 좌하단에서 시작하기 때문에 방문처리를 해주고 탐색을 시작한다.
  isVisited[R - 1][0] = true;
  dfs(R - 1, 0, 1);

  console.log(result);
};

const dfs = (row, col, distance) => {
  // 만약 우상단에 도달했다면,
  if (row === 0 && col === C - 1) {
    // 거리가 K일경우에만 하나를 더해준다.
    if (distance === K) {
      result += 1;
    }
  }

  for (let i = 0; i < 4; i++) {
    const nr = row + dr[i];
    const nc = col + dc[i];

    // 만약 맵의 범위를 벗어났다면,
    if (isValidIndex(nr, nc) === false) {
      continue;
    }
    // 갈 수 없는 곳이라면,
    if (MAP[nr][nc] === 'T') {
      continue;
    }
    // 이미 방문한 곳이라면,
    if (isVisited[nr][nc] === true) {
      continue;
    }

    // 방문처리를 해주고,
    isVisited[nr][nc] = true;
    // 다음곳을 탐색한다.
    dfs(nr, nc, distance + 1);
    // 탐색을 완료했으면 돌아와서 방문처리를 해제한다.
    isVisited[nr][nc] = false;
  }
};

/**
 * 해당 행과 열이 맵의 범위를 벗어나지 않는지 확인하는 함수
 * 
 * @param {number} row 행
 * @param {number} col 열
 * @returns 벗어나지 않는다면 true, 벗어난다면 false를 반환한다.
 */
const isValidIndex = (row, col) => {
  if (row < 0 || row >= R) {
    return false;
  }
  if (col < 0 || col >= C) {
    return false;
  }

  return true;
};

solution();
