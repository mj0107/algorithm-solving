const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input.shift();

function solution(N) {
  let result = 0;
  let board = Array.from({ length: N + 1 }, () => 0);

  const DFS = (board, row) => {
    if (row === N) result += 1;

    for (let i = 1; i <= N; i++) {
      board[row + 1] = i;
      if (isValid(board, row + 1)) DFS(board, row + 1);
    }
  };

  const isValid = (board, row) => {
    for (let i = 1; i < row; i++) {
      if (board[row] === board[i]) return false;
      if (Math.abs(row - i) === Math.abs(board[row] - board[i])) return false;
    }

    return true;
  };

  for (let i = 1; i <= N; i++) {
    board[1] = i;
    DFS(board, 1);
  }

  return result;
}

const result = solution(N);
console.log(result);
