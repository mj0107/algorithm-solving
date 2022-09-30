function solution(n) {
  let result = 0;

  const DFS = (board, row) => {
    // row가 n과 같다는 것은 마지막 행까지 체크했을때 안되는 경우가 없었다는 뜻
    if (row === n) result += 1;
    else {
      for (let i = 1; i <= n; i++) {
        // 다음행에 모든 열이 다 되는지 넣어봄
        board[row + 1] = i;
        if (isValid(board, row + 1)) DFS(board, row + 1);
      }
    }
  };

  const isValid = (board, row) => {
    for (let i = 1; i < row; i++) {
      // 같은 열일 경우
      if (board[row] === board[i]) return false;
      // 대각선 상에 있을 경우,
      // 행의 차이와 열의 차이가 같으면 같은 대각선 상에 있음
      if (Math.abs(row - i) === Math.abs(board[row] - board[i])) return false;
    }

    return true;
  };

  for (let i = 1; i <= n; i++) {
    // index = row, value = column
    // 예를 들어 index 1에 2가 있다면 1행 2열에 Queen이 있다는 뜻
    let board = Array.from({ length: n + 1 }, () => 0);
    // 첫 행의 i번째 열에 Queen이 있을 경우를 가정하고 DFS 시작
    board[1] = i;
    DFS(board, 1);
  }

  return result;
}
