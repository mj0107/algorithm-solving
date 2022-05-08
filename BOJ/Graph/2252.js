const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const testInputCase = [];
input.map(item => {
  const tmp = item.split(' ').map(Number);
  testInputCase.push(tmp);
});

function solution(N, M, testInputCase) {
  let graph = Array.from({length: N + 1}, () => [0, 0]);
  let inDegrees = Array(N + 1).fill(0);
  let result = [];

  let queue = [];

  for(const [from, to] of testInputCase) {
    graph[from].push(to); // from과 연결된 to 노드 push
    inDegrees[to]++; // to 노드와 연결된 from의 갯수만큼 + 1
  }

  // 노드와 연결된 from 노드의 개수가 0이라면,
  // 시작노드로 설정해서 queue에 삽입
  for(let i=1; i<=N; i++) {
    if(inDegrees[i] === 0) queue.push(i);
  }

  while(queue.length) {
    let from = queue.shift();
    result.push(from);

    // from 노드로 부터 연결된 모든 노드를 순회
    for(const next of graph[from]) {
      // from 노드를 queue에서 뺐기 때문에, from 노드와 연결된 노드들의 inDegress - 1
      inDegrees[next]--;
      // 하나 빼준 값이 0이라면, 이전에 연결된 노드가 없다는 것이므로,
      // 시작 노드로 설정
      if(inDegrees[next] === 0) queue.push(next);
    }
  }

  console.log(result.join(' '));
}

solution(N, M, testInputCase);