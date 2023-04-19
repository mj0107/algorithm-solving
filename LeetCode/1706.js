/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findBall = function (grid) {
  let [totalRow, totalCol] = [grid.length - 1, grid[0].length - 1];
  let result = Array.from({ length: totalCol + 1 }, () => -1);

  const DFS = (row, col) => {
    let [prevRow, nextRow] = [row - 1, row + 1];
    let [prevCol, nextCol] = [col - 1, col + 1];
    let prev = grid[row][col - 1];
    let cur = grid[row][col];
    let next = grid[row][col + 1];

    // 오른쪽 아래로 길이 나있는데, 오른쪽 열이 왼쪽 아래로 길이 나있어서 갇힌 경우
    if (cur === 1 && next === -1) {
      return -1;
    }
    // 왼쪽 아래로 길이 나있는데, 왼쪽 열이 오른쪽 아래로 길이 나있어서 갇힌 경우
    if (cur === -1 && prev === 1) {
      return -1;
    }

    // 오른쪽 아래로 길이 나있는데, 오른쪽이 벽일 경우
    if (cur === 1 && nextCol > totalCol) {
      return -1;
    }
    // 왼쪽 아래로 길이 나있는데, 왼쪽이 벽일 경우
    if (cur === -1 && prevCol < 0) {
      return -1;
    }

    // 마지막 열까지 도달했을 경우
    if (row === totalRow) {
      // 길이 오른쪽 아래로 나있을 경우
      if (cur === 1) {
        // 오른쪽으로 이동
        return col + 1;
      }
      // 길이 왼쪽 아래로 나있을 경우
      if (cur === -1) {
        // 왼쪽으로 이동
        return col - 1;
      }
    }

    // 오른쪽 아래로 이동
    if (cur === 1) {
      return DFS(nextRow, nextCol);
    }
    // 왼쪽 아래로 이동
    if (cur === -1) {
      return DFS(nextRow, prevCol);
    }
  };

  result = result.map((_, col) => {
    return DFS(0, col);
  });

  return result;
};
