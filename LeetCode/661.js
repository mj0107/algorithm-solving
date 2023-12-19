/**
 * @param {number[][]} img
 * @return {number[][]}
 */
const imageSmoother = (img) => {
  let width = img[0].length;
  let height = img.length;

  /**
   * 인자로 받은 행과 열에 해당하는 값을 부드럽게 변환한 값으로 반환하는 함수
   * 
   * @param {number} row 행
   * @param {number} col 열 
   * @returns 부드럽게 변환한 셀의 값을 반환한다.
   */
  const getSmoothCell = (row, col) => {
    let sum = 0;
    let divisor = 0;

    for (let i = row - 1; i <= row + 1; i++) {
      // 주위의 셀 중 행이 벗어난 셀은 처리하지 않는다.
      if (i < 0 || i >= height) {
        continue;
      }
      for (let j = col - 1; j <= col + 1; j++) {
        // 주위의 셀 중 열이 벗어난 셀은 처리하지 않는다.
        if (j < 0 || j >= width) {
          continue;
        }
        sum += img[i][j];
        // 범위내의 셀의 개수로만 나눈다.
        divisor++;
      }
    }
    const smoothCell = Math.floor(sum / divisor);

    return smoothCell;
  };

  /**
   * 부드럽게 변환한 이미지를 반환하는 함수
   * 
   * @returns {number[][]} 부드럽게 변환한 이미지를 반환한다.
   */
  const getSmoothImg = () => {
    const smoothImg = Array.from({ length: height }, () =>
      Array.from({ length: width })
    );

    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        smoothImg[i][j] = getSmoothCell(i, j);
      }
    }

    return smoothImg;
  };

  const smoothImg = getSmoothImg();

  return smoothImg;
};
