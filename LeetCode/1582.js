/**
 * @param {number[][]} mat
 * @return {number}
 */
const numSpecial = (mat) => {
  let result = 0;

  const row = mat.length;
  const col = mat[0].length;

  /**
   * 해당 행에 1이 한개만 있는지 확인하는 함수
   *
   * @param {number} r 행
   * @returns 해당 행에 1이 한개만 있다면 true, 아니라면 false를 반환한다.
   */
  const checkRow = (r) => {
    let oneCount = 0;

    for (let j = 0; j < col; j++) {
      if (mat[r][j] === 1) {
        oneCount++;
      }
    }

    return oneCount === 1;
  };

  /**
   * 해당 열에 1이 한개만 있는지 확인하는 함수
   *
   * @param {number} c 열
   * @returns 해당 열에 1이 한개만 있다면 true, 아니라면 false를 반환한다.
   */
  const checkCol = (c) => {
    let oneCount = 0;

    for (let i = 0; i < row; i++) {
      if (mat[i][c] === 1) {
        oneCount++;
      }
    }

    return oneCount === 1;
  };

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      // 현재 칸이 1이고, 행과 열 모두 검사했을 때 1이 한개만 있다면 result 값을 더해준다.
      if (mat[i][j] === 1 && checkRow(i) && checkCol(j)) {
        result++;
      }
    }
  }

  return result;
};
