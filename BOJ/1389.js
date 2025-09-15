const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.trim());

const [N, M] = input.shift().split(' ').map(Number);
const relationList = input.map((row) => row.split(' ').map(Number));

// 인접 행렬
const adjList = {};
// 케빈 베이컨 카운트 인접 행렬
const kevinBaconCountAdjList = Array.from({ length: N + 1 }, () =>
  new Array(N + 1).fill(0)
);

function solution() {
  initAdjList();

  const kevinBaconCountList = getKevinBaconCountList();
  const result = getResult(kevinBaconCountList);

  console.log(result);
}

/**
 * 인접행렬을 초기화 해주는 함수이다.
 */
function initAdjList() {
  for (let i = 1; i <= N; i++) {
    adjList[i] = new Set();
  }

  for (const [user1, user2] of relationList) {
    adjList[user1].add(user2);
    adjList[user2].add(user1);
  }
}

/**
 * bfs를 이용해 각 노드까지의 단계를 구하는 함수이다.
 *
 * @param {number} start 시작 노드
 */
function bfs(start) {
  const queue = [[start, 1]];
  const visited = Array.from({ length: N + 1 }, () => false);

  visited[start] = true;

  while (queue.length > 0) {
    const [curUser, curCount] = queue.shift();

    for (const adjUser of adjList[curUser]) {
      if (visited[adjUser]) {
        continue;
      }

      kevinBaconCountAdjList[curUser][adjUser] = 1;
      kevinBaconCountAdjList[start][adjUser] = curCount;

      visited[adjUser] = true;
      queue.push([adjUser, curCount + 1]);
    }
  }
}

/**
 * 각 유저별 케빈 베이컨수를 구하는 함수이다.
 *
 * @returns 각 유저별 케빈 베이컨수가 담긴 배열
 */
function getKevinBaconCountList() {
  for (let i = 1; i <= N; i++) {
    bfs(i);
  }

  const kevinBaconCountList = kevinBaconCountAdjList.map((row) =>
    row.reduce((acc, cur) => acc + cur)
  );

  return kevinBaconCountList;
}

/**
 * 케빈 베이컨의 수가 가장 작은 사람을 구하는 함수이다.
 *
 * @param {number[]} kevinBaconCountList
 * @returns 케빈 베이커의 수가 가장 작은 사람
 */
function getResult(kevinBaconCountList) {
  const min = Math.min(...kevinBaconCountList.slice(1));
  const minIndex = kevinBaconCountList.indexOf(min);

  return minIndex;
}

solution();
