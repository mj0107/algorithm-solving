const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, E] = input.shift().split(' ').map(Number);
const infoList = input.slice(0, -1).map((info) => info.split(' ').map(Number));
const [v1, v2] = input.pop().split(' ').map(Number);

const graph = Array.from({ length: N + 1 }, () => Array.from({ length: N + 1 }, () => Infinity));
let minDistance = Infinity;

function initGraph() {
  infoList.forEach(([from, to, distance]) => {
    graph[from][to] = distance;
    graph[to][from] = distance;
  });

  for (let i = 1; i <= N; i++) {
    graph[i][i] = 0;
  }
}

function floydWarshall() {
  for (let k = 1; k <= N; k++) {
    for (let i = 1; i <= N; i++) {
      for (let j = 1; j <= N; j++) {
        graph[i][j] = Math.min(graph[i][j], graph[i][k] + graph[k][j]);
      }
    }
  }
}

function getMinDistance() {
  minDistance = Math.min(graph[1][v1] + graph[v1][v2] + graph[v2][N], graph[1][v2] + graph[v2][v1] + graph[v1][N]);

  if (minDistance === Infinity) {
    minDistance = -1;
  }
}

function solution() {
  initGraph();
  floydWarshall();
  getMinDistance();

  console.log(minDistance);
}

solution();