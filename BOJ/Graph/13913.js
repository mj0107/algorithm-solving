const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, K] = input.shift().split(' ').map(Number);
const MAX = 1e6 + 1;

/** 이미 방문했는지 저장하는 리스트 */
const visited = Array.from({ length: MAX }, () => false);
/** 해당 인덱스에 도달했을 때의 직전 좌표를 저장하는 리스트 */
const prevList = Array.from({ length: MAX }, () => 0);
/** 걸린 시간 */
let time = 0;
/** 경로를 저장한 리스트 */
let path = [];

const solution = () => {
  bfs();
  getPath();

  console.log(time);
  console.log(path);
};

/**
 * bfs로 걸린 시간과 prevList를 구하는 함수이다.
 * 
 * @returns
 */
const bfs = () => {
  const queue = [N];
  visited[N] = true;

  while (queue.length > 0) {
    // queue.shift()를 하면 queue의 길이가 변하기 때문에 미리 변수에 저장해놓는다.
    let len = queue.length;

    for (let i = 0; i < len; i++) {
      let cur = queue.shift();

      // 동생의 위치에 도달했다면 멈춘다.
      if (cur === K) {
        return;
      }

      for (const next of [cur - 1, cur + 1, cur * 2]) {
        // 범위를 벗어난다면 다음 반복을 한다.
        if (next < 0 || next >= MAX) {
          continue;
        }
        // 이미 방문했다면, 더 빠르게 도착했었던 것이므로 다음 반복을 한다.
        if (visited[next] === true) {
          continue;
        }

        // 방문처리를 한다.
        visited[next] = true;
        // 큐에 넣어준다.
        queue.push(next);
        // 다음에 방문할 곳(인덱스)에 현재 위치를 저장해준다.
        prevList[next] = cur;
      }
    }

    // 시간을 더해준다.
    time++;
  }
};

/**
 * 경로를 구하는 함수이다.
 */
const getPath = () => {
  // 역추적을 하여 경로를 찾아야 하기 때문에,
  // 맨 처음 찾을 전의 좌표를 도착지점으로 설정해준다.
  let prev = K;
  for (let i = 0; i <= time; i++) {
    path.push(prev);
    // 전의 좌표를 다시 그 전의 좌표로 저장해준다.
    prev = prevList[prev];
  }

  // 역추적하므로 배열에 역순으로 들어가기 때문에 reverse() 해준다.
  path = path.reverse().join(' ');
};

solution();
