const fs = require('fs');
//const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const N = +input.shift();
const M = +input.shift();
const graph = [];
input.map(item => {
  let tmp = item.split(' ').map(Number);
  graph.push(tmp);
});

// 부모를 찾는 재귀 함수
function getParent(parent, x) {
  // 자기 자신이면 return
  if(parent[x] === x) return x;
  else {
    parent[x] = getParent(parent, parent[x]);
    return parent[x];
  }
}

// union-find
function unionParent(parent, x, y) {
  const n1 = getParent(parent, x);
  const n2 = getParent(parent, y);

  if(n1 < n2) parent[n2] = n1;
  else parent[n1] = n2;

  return parent;
}

// 두 요소의 부모가 같은지 확인
function compareParent(parent, x, y) {
  const n1 = getParent(parent, x);
  const n2 = getParent(parent, y);

  if(n1 === n2) return true;
  else return false;
}

function solution(N, M, graph) {
  let parent = [];
  let answer = 0;
  // 처음엔 자기 자신을 부모로 초기화
  for(let i=1; i<=N; i++) parent[i] = i;

  // 가중치의 오름차순으로 정렬
  graph.sort((a,b) => a[2]-b[2]);

  for(item of graph) {
    const [a, b, weight] = item;

    // 두 노드의 부모가 같지 않다면
    // 즉, 두 노드가 연결되어 있지 않다면,
    // 연결해준뒤 가중치를 더해준후, 부모를 union
    if(!compareParent(parent, a, b)) {
      answer += weight;
      parent = unionParent(parent, a, b);
    }
  }

  console.log(answer);
}

solution(N, M, graph);