const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +input.shift();
const m = +input.shift();
const busList = input.map((row) => row.split(' ').map(Number));

const solution = () => {
  const adjMatrix = Array.from({ length: n + 1 }, () =>
    Array.from({ length: n + 1 }, () => Infinity)
  );

  /**
   * 인접행렬을 만드는 함수이다.
   */
  const initAdjMatrix = () => {
    for (const [start, end, cost] of busList) {
      adjMatrix[start][end] = Math.min(adjMatrix[start][end], cost);
    }

    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        // 자기자신으로 가는 비용은 0으로 초기화해준다.
        if (i === j) {
          adjMatrix[i][j] = 0;
        }
      }
    }
  };

  /**
   * Floyd-Warshall 알고리즘으로 최단거리를 구하는 함수이다.
   */
  const floydWarshall = () => {
    for (let k = 1; k <= n; k++) {
      for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
          if (adjMatrix[i][j] > adjMatrix[i][k] + adjMatrix[k][j]) {
            adjMatrix[i][j] = adjMatrix[i][k] + adjMatrix[k][j];
          }
        }
      }
    }
  };

  /**
   * 정답을 주어진 형식에 맞게 출력하는 함수이다.
   */
  const printResult = () => {
    for (let i = 1; i <= n; i++) {
      const row = [];
      for (let j = 1; j <= n; j++) {
        if (adjMatrix[i][j] === Infinity) {
          row.push(0);
        } else {
          row.push(adjMatrix[i][j]);
        }
      }

      console.log(row.join(' '));
    }
  };

  initAdjMatrix();
  floydWarshall();
  printResult();
};

solution();
