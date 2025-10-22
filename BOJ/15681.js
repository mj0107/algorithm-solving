const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, R, Q] = input.shift().split(' ').map(Number);
const edgeList = input.slice(0, N - 1).map((row) => row.split(' ').map(Number));
const queryList = input.slice(-Q).map(Number);

const graph = new Map();
const subTreeSize = Array.from({ length: N + 1 }, () => 0);

function initMap() {
  for (let i = 1; i <= N; i++) {
    graph.set(i, []);
  }

  for (let i = 0; i < edgeList.length; i++) {
    const [u, v] = edgeList[i];

    graph.get(u).push(v);
    graph.get(v).push(u);
  }
}

function dfs(cur, parent) {
  subTreeSize[cur] = 1;

  for (const next of graph.get(cur)) {
    if (next !== parent) {
      subTreeSize[cur] += dfs(next, cur);
    }
  }

  return subTreeSize[cur];
}

function solution() {
  const result = [];

  initMap();
  dfs(R, -1);

  queryList.forEach((query) => {
    result.push(subTreeSize[query])
  });

  console.log(result.join('\n'));
}

solution();