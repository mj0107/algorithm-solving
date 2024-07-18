function solution(board) {
  const dr = [-1, 1, 0, 0];
  const dc = [0, 0, -1, 1];

  const EMPTY = '.';
  const START = 'R';
  const OBSTACLE = 'D';
  const GOAL = 'G';

  const totalRow = board.length;
  const totalCol = board[0].length;

  /**
   * 행과 열이 유효한 인덱스인지 판단해서 boolean 값으로 반환하는 함수
   * @param {number} row 행
   * @param {number} col 열
   * @returns 유효한 인덱스라면 true, 아니라면 false를 반환한다.
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
   * 시작점이 되는 행,열과 방향을 인자로 받아서 해당 방향으로 끝까지 간 위치를 반환하는 함수
   *
   * @param {number} row 행
   * @param {number} col 열
   * @param {number} dir 방향
   * @returns 끝까지 간 위치를 반환한다.
   */
  const move = (row, col, dir) => {
    let nr = row;
    let nc = col;

    while (true) {
      // 범위를 벗어난다면 멈춘다.
      if (isValid(nr, nc) === false) {
        break;
      }
      // 장애물이 있다면 멈춘다.
      if (board[nr][nc] === OBSTACLE) {
        break;
      }

      nr += dr[dir];
      nc += dc[dir];
    }

    // 마지막 반복에서 갈 수 없는 칸까지 갔기 때문에 한 칸 빼준다.
    return [nr - dr[dir], nc - dc[dir]];
  };

  /**
   * BFS를 이용해 몇 번 이동했는지 반환하는 함수
   *
   * @param {number} row 행
   * @param {number} col 열
   * @returns 몇 번 이동했는지 반환한다.
   */
  const bfs = (row, col) => {
    const queue = [[row, col, 0]];
    const visited = Array.from({ length: totalRow }, () =>
      Array.from({ length: totalCol }, () => false)
    );

    while (queue.length > 0) {
      const [curRow, curCol, count] = queue.shift();

      // 목표지점이라면 이동한 횟수를 반환한다.
      if (board[curRow][curCol] === GOAL) {
        return count;
      }

      for (let d = 0; d < 4; d++) {
        const [nr, nc] = move(curRow, curCol, d);

        if (visited[nr][nc] === true) {
          continue;
        }

        visited[nr][nc] = true;
        queue.push([nr, nc, count + 1]);
      }
    }

    return -1;
  };

  for (let i = 0; i < totalRow; i++) {
    for (let j = 0; j < totalCol; j++) {
      if (board[i][j] === START) {
        return bfs(i, j);
      }
    }
  }
}
