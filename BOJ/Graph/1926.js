const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [ROW, COLUMN] = input.shift().split(' ').map(Number);
const PAPER = input.map((el) => {
  return el.split(' ').map(Number);
});

function solution(ROW, COLUMN, PAPER) {
  let visited = Array.from({ length: ROW }, () =>
    new Array(COLUMN).fill(false)
  );

  /**
   * 행과 열을 받아 유효한 인덱스인지 bool값으로 return 해주는 함수
   * 
   * @param {number} row 행
   * @param {number} col 열
   * @returns {boolean} 인덱스가 유효하면 true, 아니면 false return
   */
  const isValidIndex = (row, col) => {
    return 0 <= row && row < ROW && 0 <= col && col <= COLUMN;
  };

  const directionObj = {
    up: [-1, 0],
    down: [1, 0],
    left: [0, -1],
    right: [0, 1],
  };
  const BFS = (row, col) => {
    // 처음 들어온 값을 queue에 넣어줌
    let queue = [[row, col]];
    // 이미 조건을 만족하여 BFS가 실행되는 것이므로 1부터 시작
    let area = 1;

    while (queue.length !== 0) {
      let [x, y] = queue.shift();

      // 들어온 행, 열 값의 상, 하, 좌, 우 검사
      Object.values(directionObj).map((dir) => {
        let [nx, ny] = [x + dir[0], y + dir[1]];
        // 새로운 행, 열 값이 유효한 인덱스인 경우
        if (isValidIndex(nx, ny)) {
          // 1이고 아직 방문하지 않은 값일 경우
          if (PAPER[nx][ny] === 1 && visited[nx][ny] === false) {
            // 방문 처리 해주고,
            visited[nx][ny] = true;
            // 구하려는 넓이에 1을 더해줌
            area += 1;
            // 다시 queue에 넣어줌, BFS
            queue.push([nx, ny]);
          }
        }
      });
    }

    return area;
  };

  let drawingCount = 0;
  let area = 0;
  let maxArea = 0;
  for (let i = 0; i < ROW; i += 1) {
    for (let j = 0; j < COLUMN; j += 1) {
      // 현재 인덱스가 1이고 방문하지 않은 인덱스일 경우
      if (PAPER[i][j] === 1 && visited[i][j] === false) {
        // 방문 처리 해주고,
        visited[i][j] = true;
        // BFS를 통해 구한 넓이값
        area = BFS(i, j);
        // 구한 넓이값들 중 최댓값을 구해준다.
        if (area > maxArea) maxArea = area;
        // 그림의 개수 + 1
        drawingCount += 1;
      }
    }
  }

  console.log(drawingCount);
  console.log(maxArea);
}

solution(ROW, COLUMN, PAPER);
