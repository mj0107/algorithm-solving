function solution(maps) {
  const dr = [-1, 1, 0, 0];
  const dc = [0, 0, -1, 1];

  const START = 'S';
  const END = 'E';
  const LEVER = 'L';
  const PATH = 'O';
  const WALL = 'X';

  const totalRow = maps.length;
  const totalCol = maps[0].length;

  /**
   * 인자로 받은 행과 열이 유효한 위치인지 boolean 값으로 반환하는 함수이다.
   *
   * @param {number} row 행
   * @param {number} col 열
   * @returns 유효한 위치라면 true, 아니라면 false를 반환한다.
   */
  const isValid = (row, col) => {
    if (row < 0 || row >= totalRow) {
      return false;
    }
    if (col < 0 || col >= totalCol) {
      return false;
    }

    return true;
  };

  /**
   * BFS를 이용해 시작할 곳과 도착할 곳의 문자를 받아서 최소거리를 구하는 함수이다.
   *
   * @param {string} start 시작 문자
   * @param {string} end 도착 문자
   * @returns 다다를 수 없다면 -1, 다다를 수 있다면 최소거리를 반환한다.
   */
  const getDistance = (start, end) => {
    const queue = [];
    const visited = Array.from({ length: totalRow }, () =>
      Array.from({ length: totalCol }, () => false)
    );

    for (let i = 0; i < totalRow; i++) {
      for (let j = 0; j < totalCol; j++) {
        // 시작 위치를 queue에 넣어주고, 방문처리를 해준다.
        if (maps[i][j] === start) {
          queue.push([i, j, 0]);
          visited[i][j] = true;
        }
      }
    }

    while (queue.length > 0) {
      const [curRow, curCol, time] = queue.shift();

      if (maps[curRow][curCol] === end) {
        return time;
      }

      for (let d = 0; d < 4; d++) {
        const nr = curRow + dr[d];
        const nc = curCol + dc[d];

        // 유효하지 않다면 넘어간다.
        if (isValid(nr, nc) === false) {
          continue;
        }
        // 이미 방문했다면 넘어간다.
        if (visited[nr][nc] === true) {
          continue;
        }
        // 벽으로 막혀있다면 넘어간다.
        if (maps[nr][nc] === WALL) {
          continue;
        }

        visited[nr][nc] = true;
        queue.push([nr, nc, time + 1]);
      }
    }

    return -1;
  };

  const distanceFromStartToLever = getDistance(START, LEVER);
  const distanceFromLeverToEnd = getDistance(LEVER, END);

  // 시작지점에서 레버, 혹은 레버에서 도착지점까지 둘 중 하나라도 다다를 수 없다면 -1을 반환한다.
  if (distanceFromStartToLever === -1 || distanceFromLeverToEnd === -1) {
    return -1;
  }

  return distanceFromStartToLever + distanceFromLeverToEnd;
}
