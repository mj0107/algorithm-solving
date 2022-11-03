/* 외판원 순회 2 */
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input.shift();
const cityCostList = input.map(el => {
  return el.split(' ').map(Number);
});

function solution(N, cityCostList) {
  let min = Infinity;
  let visitCnt = 0;
  let isVisited = Array.from({ length: N }, () => false);

  const backTracking = (cost, start, current) => {
    // 만약 N개 방문했고, 마지막 노드에서 돌아오는 길이 있을 경우
    if(visitCnt === N && cityCostList[current][start] !== 0) {
      // 현재 최솟값과 돌아오는 비용까지 합한 최솟값 비교
      min = Math.min(min, cost + cityCostList[current][start]);
    }

    for(let i=0; i<N; i+=1) {
      // 이미 방문했거나 갈 수 없는 길일경우
      if(isVisited[i] || cityCostList[current][i] === 0) continue;
      // 만약 순회를 마치지 않았는데 최솟값을 넘을경우
      if(cost + cityCostList[current][i] >= min) continue;

      isVisited[i] = true;
      visitCnt += 1;
      backTracking(cost + cityCostList[current][i], start, i);
      visitCnt -= 1;
      isVisited[i] = false;
    }
  }

  isVisited[0] = 1;
  visitCnt += 1;
  backTracking(0, 0, 0);

  console.log(min);
}

solution(N, cityCostList);