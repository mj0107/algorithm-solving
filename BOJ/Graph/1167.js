const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.trim());

let index = 0;
const V = +input[index++];

const adjList = {};
let visited = Array.from({ length: V + 1 }, () => false);
let maxDistance = -Infinity;
let point;

function solution() {
  initAdjList();

  getMaxDistance(1, 0);
  visited.fill(false);
  getMaxDistance(point, 0);

  console.log(maxDistance);
}

function initAdjList() {
  for (let i = 1; i <= V; i++) {
    adjList[i] = [];
  }

  for (let i = 1; i <= V; i++) {
    const row = input[index++].split(' ').map(Number);
    const startNode = row[0];

    for (let j = 1; j < row.length; j += 2) {
      if (row[j] === -1) {
        break;
      }

      const [node, distance] = [row[j], row[j + 1]];

      adjList[startNode].push([node, distance]);
      adjList[node].push([startNode, distance]);
    }
  }
}

function getMaxDistance(start, totalDistance) {
  visited[start] = true;

  if (totalDistance > maxDistance) {
    point = start;
    maxDistance = totalDistance;
  }

  for (const [nextNode, distance] of adjList[start]) {
    if (visited[nextNode]) {
      continue;
    }

    getMaxDistance(nextNode, totalDistance + distance);
  }
}

solution();
