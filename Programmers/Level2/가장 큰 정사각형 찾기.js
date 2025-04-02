const EMPTY = 0;
const FILL = 1;

/**
 * 가장 큰 정사각형 찾기
 * @param {number[][]} board 1과 0으로 이루어진 2차원 배열
 * @returns {number} 가장 큰 정사각형의 넓이
 */
function solution(board) {
  const row = board.length;
  const col = board[0].length;
  const dp = Array.from({ length: row + 1 }, () => Array(col + 1).fill(0));
  let result = 0;

  /**
   * dp 배열 초기화
   */
  const initDp = () => {
    // 0행과 0열은 0으로 초기화 (zero padding)
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        dp[i + 1][j + 1] = board[i][j];
      }
    }
  };

  /**
   * dp 배열 채우기
   */
  const getResult = () => {
    for (let i = 1; i <= row; i++) {
      for (let j = 1; j <= col; j++) {
        if (dp[i][j] === EMPTY) {
          continue;
        }

        // 현재 위치에서 가능한 정사각형의 최대 크기를 계산
        dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j - 1], dp[i - 1][j]) + 1;

        // 최대 크기 갱신
        result = Math.max(result, Math.pow(dp[i][j], 2));
      }
    }
  };

  initDp();
  getResult();

  return result;
}
