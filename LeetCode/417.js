/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
  const [LIST_ROW, LIST_COL] = [heights.length, heights[0].length];
  const DIR_OBJ = {
    UP: [-1, 0],
    DOWN: [1, 0],
    LEFT: [0, -1],
    RIGHT: [0, 1],
  };

  // pacific ocean 으로 흐를 수 있는 칸을 저장하는 배열
  let pacificOcean = Array.from({ length: LIST_ROW }, () =>
    Array.from({ length: LIST_COL }, () => false)
  );
  // atlantic ocean 으로 흐를 수 있는 칸을 저장하는 배열
  let atlanticOcean = Array.from({ length: LIST_ROW }, () =>
    Array.from({ length: LIST_COL }, () => false)
  );

  const isValidIndex = (row, col) => {
    if (row < 0 || row >= LIST_ROW) {
      return false;
    }
    if (col < 0 || col >= LIST_COL) {
      return false;
    }

    return true;
  };

  /**
   *
   * @param {number} prev 전의 높이
   * @param {[number, number]} cur 현재 높이의 좌표
   * @param {boolean[]} visited 방문 체크할 배열
   * @returns
   */
  const DFS = (prev, cur, visited) => {
    const [CUR_ROW, CUR_COL] = cur;

    const HEIGHT_PREV = prev;

    // 현재 행과 열이 범위를 벗어난다면
    if (isValidIndex(CUR_ROW, CUR_COL) === false) {
      return;
    }

    // 현재 위치가 이미 방문한적이 있다면
    if (visited[CUR_ROW][CUR_COL] === true) {
      return;
    }

    const HEIGHT_CUR = heights[CUR_ROW][CUR_COL];
    // 대양과 접하는 모서리에서 시작했기 때문에,
    // 현재의 높이가 전의 높이 이상이어야 대양으로 흐를 수 있음
    if (HEIGHT_CUR < HEIGHT_PREV) {
      return;
    }

    // 방문처리
    visited[CUR_ROW][CUR_COL] = true;

    for (const [MOVE_ROW, MOVE_COL] of Object.values(DIR_OBJ)) {
      const NEXT_ROW = CUR_ROW + MOVE_ROW;
      const NEXT_COL = CUR_COL + MOVE_COL;

      DFS(HEIGHT_CUR, [NEXT_ROW, NEXT_COL], visited);
    }
  };

  for (let row = 0; row < LIST_ROW; row += 1) {
    // pacific ocean과 맞닿아있는 가장 첫 열
    DFS(-Infinity, [row, 0], pacificOcean);
    // atlantic ocean과 맞닿아있는 가장 마지막 열
    DFS(-Infinity, [row, LIST_COL - 1], atlanticOcean);
  }
  for (let col = 0; col < LIST_COL; col += 1) {
    // pacific ocean과 맞닿아있는 가장 첫 행
    DFS(-Infinity, [0, col], pacificOcean);
    // atlantic ocean과 맞닿아있는 가장 마지막 행
    DFS(-Infinity, [LIST_ROW - 1, col], atlanticOcean);
  }

  let result = [];
  for (let i = 0; i < LIST_ROW; i += 1) {
    for (let j = 0; j < LIST_COL; j += 1) {
      // atlantic과 pacific 둘다로 흐를 수 있는 위치라면
      if (atlanticOcean[i][j] && pacificOcean[i][j]) {
        result.push([i, j]);
      }
    }
  }

  return result;
};
