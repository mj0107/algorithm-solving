const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const edgeList = input.map(row => row.split(' ').map(Number));

/** 인접 행렬 */
const adjList = Array.from({ length: N + 1 }, () => []);
/** 방문 처리 배열 */
const visited = Array.from({ length: N + 1 }, () => false);
/** 연결된 개수 */
let connectedCount = 0;

const solution = () => {
  init();
  solve();

  console.log(connectedCount);
};

/**
 * 인접행렬을 초기화하는 함수
 */
const init = () => {
  for(const [start, end] of edgeList) {
    adjList[start].push(end);
    adjList[end].push(start);
  }
}

const solve = () => {
  for(let i=1; i<=N; i++) {
    // 만약 미방문한 노드라면,
    if(visited[i] === false) {
      // dfs를 수행하고,
      dfs(i);
      // dfs를 마치면 연결된 개수를 하나 더해준다.
      connectedCount++;
    }
  }
}

/**
 * dfs를 이용해서 연결된 모든 노드를 방문처리하는 함수
 * 
 * @param {number} start 현재 노드
 */
const dfs = (start) => {
  visited[start] = true;

  for(const next of adjList[start]) {
    if(visited[next] === true) {
      continue;
    }

    dfs(next);
  }
}

solution();