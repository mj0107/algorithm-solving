const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const N = +input.shift();
const testInputCase = [];
input.map((item) => {
  const tmp = item.replace(' -1', '').split(' ').map(Number);
  testInputCase.push(tmp);
});

function solution(N, testInputCase) {
  let graph = Array.from({length: N + 1}, () => []);
  let indegrees = Array(N + 1).fill(0);
  let times = Array(N + 1).fill(0); // 각 노드의 건설 시간
  let result = Array(N + 1).fill(0) // 총 건설 시간
  let queue = [];

  for(let i=0; i<testInputCase.length; i++) {
    // 각 노드마다 건설 시간 저장
    times[i + 1] = (testInputCase[i].shift());
    const to = i + 1;
    
    for(const from of testInputCase[i]) {
      // from 노드에서 이어지는 to 노드 push
      graph[from].push(to);
      // to 노드로 오는 간선의 개수 저장
      indegrees[to]++;
    }
  }

  for(let i=1; i<=N; i++) {
    // i 노드로 오는 간선의 개수가 0이라면,
    // 시작노드로 설정 후, queue에 push
    if(indegrees[i] === 0) {
      queue.push(i);
      result[i] = times[i];
    }
  }

  while(queue.length) {
    const from = queue.shift();

    for(const next of graph[from]) {
      // from을 뽑아 냈기 때문에,
      // from으로 부터 이어지는 노드의 간선의 갯수 -1
      indegrees[next]--;

      // 0이 되면 queue에 넣어줌
      if(indegrees[next] === 0) queue.push(next);

      result[next] = Math.max(result[next], result[from] + times[next]);
    }
  }

  result.shift();
  console.log(result.join(' '));
}

solution(N, testInputCase);