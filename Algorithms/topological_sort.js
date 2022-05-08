/*
  이 알고리즘(위상정렬)이 사용된 백준 문제
  -> BOJ/Graph/2252.js
  -> 줄 세우기
*/

const testInput = [
  [4, 2],
  [3, 1]
];

const N = 4; // 노드의 개수

function topological_sort() {
  let graph = Array.from({length: N + 1}, () => []);
  let indegrees = Array(N + 1).fill(0);
  let queue = [];
  let result = [];

  for(const [from, to] of testInput) {
    // from 노드와 이어져 있는 to 노드 추가
    graph[from].push(to);
    // to 노드와 이어져 있는 from 노드의 개수만큼 +1
    indegrees[to]++;
  }

  // inDegress가 0이라면 이전에 노드가 없는것이므로,
  // 시작 노드로 설정
  for(let i=1; i<indegrees.length; i++) {
    if(indegrees[i] === 0) queue.push(i);
  }

  while(queue.length) {
    const from = queue.shift();
    result.push(from);

    // from 노드로 부터 시작되는 다음 노드 순회
    for(const next of graph[from]) {
      indegrees[next]--;

      if(indegrees[next] === 0) queue.push(next);
    }
  }
  
  console.log(result.join(' '));
}

topological_sort();