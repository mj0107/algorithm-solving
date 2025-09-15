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
const T = +input[index++];

let N, M, W;
let edegList = [];
let distance = [];
const result = [];

function solution() {
  for (let testCase = 1; testCase <= T; testCase++) {
    // [지점의 수, 도로의 개수, 웜홀의 개수]
    [N, M, W] = input[index++].split(' ').map(Number);

    init();
    result.push(bellmanFord());
  }

  console.log(result.join('\n'));
}

function init() {
  distance = Array.from({ length: N + 1 }, () => 0);
  edegList = [];

  for (let i = 0; i < M; i++) {
    const [S, E, T] = input[index++].split(' ').map(Number);

    edegList.push([S, E, T]);
    edegList.push([E, S, T]);
  }

  for (let i = 0; i < W; i++) {
    const [S, E, T] = input[index++].split(' ').map(Number);

    edegList.push([S, E, -T]);
  }
}

function bellmanFord() {
  for (let start = 1; start <= N; start++) {
    let isUpdated = false;

    for (const [S, E, T] of edegList) {
      if (distance[E] > distance[S] + T) {
        distance[E] = distance[S] + T;
        isUpdated = true;

        // N-1개의 노드를 지나쳤음에도 갱신해야 한다면,
        // 음의 사이클이 있어서 계속해서 갱신되고 있다는 뜻이다.
        // 한 노드에서 다른 노드로 가는 간선이 N개 이상일 경우,
        // 한 노드를 두번 이상 방문한다는 뜻이다.
        if (start === N) {
          return 'YES';
        }
      }
    }

    if (!isUpdated) {
      break;
    }
  }

  return 'NO';
}

solution();
