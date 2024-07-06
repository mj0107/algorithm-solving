function solution(arr) {
  let zeroCount = 0;
  let oneCount = 0;

  /**
   * 영역내에 인자로 받은 number와 모두 같은 값인지 판단하는 함수이다.
   *
   * @param {number} startRow 시작 행
   * @param {number} startCol 시작 열
   * @param {number} count 행 혹은 열의 개수
   * @param {number} number 기준 값
   * @returns 모두 같은 값인지 boolean 값으로 반환한다.
   */
  const isAllSame = (startRow, startCol, count, number) => {
    for (let i = startRow; i < startRow + count; i++) {
      for (let j = startCol; j < startCol + count; j++) {
        if (arr[i][j] !== number) {
          return false;
        }
      }
    }

    return true;
  };

  /**
   * 쿼드 압축을 수행하는 함수
   *
   * @param {number} startRow 시작 행
   * @param {number} startCol 시작 열
   * @param {number} count 행 혹은 열의 개수
   */
  const quadZip = (startRow, startCol, count) => {
    // 현재 영역내에 모든 값이 0이라면 1개의 0으로 압축한다.
    if (isAllSame(startRow, startCol, count, 0)) {
      zeroCount++;
      return;
    }
    // 현재 영역내에 모든 값이 1이라면 1개의 1로 압축한다.
    if (isAllSame(startRow, startCol, count, 1)) {
      oneCount++;
      return;
    }

    // 현재 2 * 2의 배열이라면, 더 이상 압축할 수 없으므로 개수를 모두 세준다.
    if (count === 2) {
      for (let i = startRow; i < startRow + count; i++) {
        for (let j = startCol; j < startCol + count; j++) {
          if (arr[i][j] === 0) {
            zeroCount++;
          } else {
            oneCount++;
          }
        }
      }

      return;
    }

    // 위에서 압축할 수 없는 값이거나, 2 * 2 보다 큰 배열일 경우 4등분하여 쿼드 압축을 진행한다.
    quadZip(startRow, startCol, count / 2);
    quadZip(startRow, startCol + count / 2, count / 2);
    quadZip(startRow + count / 2, startCol, count / 2);
    quadZip(startRow + count / 2, startCol + count / 2, count / 2);
  };

  quadZip(0, 0, arr.length);

  return [zeroCount, oneCount];
}
