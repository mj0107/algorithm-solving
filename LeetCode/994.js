/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  const [GRID_ROW, GRID_COL] = [grid.length, grid[0].length];
  const DIR_OBJ = {
    UP: [-1, 0],
    DOWN: [1, 0],
    LEFT: [0, -1],
    RIGHT: [0, 1],
  };

  let queue = [];

  let freshOrangeCount = 0;
  let cur = -1;
  for (let i = 0; i < GRID_ROW; i += 1) {
    for (let j = 0; j < GRID_COL; j += 1) {
      cur = grid[i][j];

      // 신선한 오렌지일 경우
      if (cur === 1) {
        freshOrangeCount += 1;
      }
      // 썩은 오렌지일 경우
      else if (cur === 2) {
        queue.push([i, j]);
      }
    }
  }

  const isValidIndex = (row, col) => {
    // grid의 최대 행을 넘어갈 때
    if (row < 0 || row >= GRID_ROW) {
      return false;
    }
    // grid의 최대 열을 넘어갈 때
    if (col < 0 || col >= GRID_COL) {
      return false;
    }

    return true;
  };

  // 처음부터 신선한 오렌지가 없을 경우
  if (freshOrangeCount === 0) {
    return 0;
  }

  let minutes = 0;
  while (queue.length) {
    let len = queue.length;
    for (let i = 0; i < len; i += 1) {
      const [ROTTING_ROW, ROTTING_COL] = queue.shift();

      for (const [MOVE_ROW, MOVE_COL] of Object.values(DIR_OBJ)) {
        const NEXT_ROW = ROTTING_ROW + MOVE_ROW;
        const NEXT_COL = ROTTING_COL + MOVE_COL;

        // grid의 최대 인덱스 초과
        if (isValidIndex(NEXT_ROW, NEXT_COL) === false) {
          continue;
        }
        // 빈 공간
        if (grid[NEXT_ROW][NEXT_COL] !== 1) {
          continue;
        }

        queue.push([NEXT_ROW, NEXT_COL]);
        // 썩은 상태로 바꿔줌
        grid[NEXT_ROW][NEXT_COL] = 2;
        // 신선한 오렌지 개수 - 1
        freshOrangeCount -= 1;
      }
    }

    // 만약 큐에 담긴 다음칸들을 모두 갈 수 있다면
    if (queue.length > 0) {
      minutes += 1;
    }

    // 남은 신선한 오렌지가 없을 경우
    if (freshOrangeCount === 0) {
      return minutes;
    }
  }

  return -1;
};
