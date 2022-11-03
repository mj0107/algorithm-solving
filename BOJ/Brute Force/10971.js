/* 외판원 순회 2 */
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input.shift();
const MATRIX = input.map(el => {
  return el.split(' ').map(Number);
});

function solution(N, MATRIX) {
  let min = Infinity;
  let isVisited = Array.from({ length: N }, () => false);
  let visitCnt = 0;

  const backTracking = (cost, start, current) => {
    // 만약 N개를 방문했고, 돌아오는 길이 있을경우
    if(visitCnt === N && MATRIX[current][start] !== 0) {
      // 현재의 최솟값과 돌아가는 경우 최솟값 비교
      min = Math.min(min, cost + MATRIX[current][start]);
    }
    for(let i=0; i<N; i+=1) {
      // 이미 방문한 곳이거나 갈 수 없는 곳일경우
      if(isVisited[i] || MATRIX[current][i] === 0) continue;

      // 만약 순회를 마치지 않았음에도 이미 최솟값을 넘어갔을 경우
      if(cost + MATRIX[current][i] > min) continue;

      isVisited[i] = true;
      visitCnt += 1;

      backTracking(cost + MATRIX[current][i], start, i);

      visitCnt -= 1;
      isVisited[i] = false;
    }
  }

  isVisited[0] = true;
  visitCnt = 1;
  backTracking(0, 0, 0);

  const RESULT = min === Infinity ? 0 : min;
  console.log(RESULT);
}

solution(N, MATRIX);