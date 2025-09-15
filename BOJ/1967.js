const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +input.shift();
const edgeInfoList = input.map((row) => row.split(' ').map(Number));

const adjList = {};
const visited = Array.from({ length: n + 1 }, () => false);
let maxLength = -Infinity;
let point = 1;

function solution() {
  initAdjList();

  // 가장 먼 점을 구한다. 그것이 지름의 한 쪽 끝 점이 된다.
  getMaxLength(1, 0);

  visited.fill(false);
  // 위에서 구한 가장 먼 점에서 또 다시 가장 먼 점을 구한다.
  // 그것이 지름을 이루는 반대편 점이 된다.
  getMaxLength(point, 0);

  console.log(maxLength);
}

function initAdjList() {
  visited[0] = true;

  for (let i = 1; i <= n; i++) {
    adjList[i] = [];
  }

  for (const [node1, node2, weight] of edgeInfoList) {
    adjList[node1].push([node2, weight]);
    adjList[node2].push([node1, weight]);
  }
}

function getMaxLength(start, curLength) {
  visited[start] = true;

  if (maxLength < curLength) {
    maxLength = curLength;
    point = start;
  }

  for (const [nextNode, weight] of adjList[start]) {
    if (visited[nextNode]) {
      continue;
    }

    getMaxLength(nextNode, curLength + weight);
  }
}

solution();
