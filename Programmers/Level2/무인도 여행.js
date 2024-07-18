function solution(maps) {
  const totalRow = maps.length;
  const totalCol = maps[0].length;

  const dr = [-1, 1, 0, 0];
  const dc = [0, 0, -1, 1];

  const SEA = 'X';

  const visited = Array.from({ length: totalRow }, () =>
    Array.from({ length: totalCol }, () => false)
  );

  /**
   * 인자로 받은 행과 열이 유효한 인덱스인지 boolean으로 반환하는 함수
   * @param {number} row 행
   * @param {number} col 열
   * @returns 유효하다면 true, 아니라면 false를 반환한다.
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
   * 인자로 받은 행과 열의 칸이 속해있는 섬에서 며칠 머물 수 있는지 반환하는 함수
   *
   * @param {number} row 행
   * @param {number} col 열
   * @returns 현재 섬에서 며칠 머물 수 있는지 반환한다.
   */
  const getDayOfStay = (row, col) => {
    const queue = [[row, col]];
    let dayOfStay = Number(maps[row][col]);

    visited[row][col] = true;

    while (queue.length > 0) {
      const [curRow, curCol] = queue.shift();

      for (let d = 0; d < 4; d++) {
        const nr = curRow + dr[d];
        const nc = curCol + dc[d];

        // 유효한 인덱스가 아니라면 넘어간다.
        if (isValid(nr, nc) === false) {
          continue;
        }
        // 이미 방문한 곳이라면 넘어간다.
        if (visited[nr][nc] === true) {
          continue;
        }
        // 바다라면 넘어간다.
        if (maps[nr][nc] === SEA) {
          continue;
        }

        visited[nr][nc] = true;
        queue.push([nr, nc]);
        dayOfStay += Number(maps[nr][nc]);
      }
    }

    return dayOfStay;
  };

  const result = [];
  for (let i = 0; i < totalRow; i++) {
    for (let j = 0; j < totalCol; j++) {
      if (visited[i][j] === true) {
        continue;
      }
      if (maps[i][j] === SEA) {
        continue;
      }

      const dayOfStay = getDayOfStay(i, j);
      result.push(dayOfStay);
    }
  }

  result.sort((a, b) => a - b);
  return result.length > 0 ? result : [-1];
}
