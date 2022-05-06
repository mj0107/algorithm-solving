/*
  이 알고리즘이 사용된 백준 문제
  -> BOJ/Graph/1922.js
  -> 네트워크 연결
*/

const graph = [
  [1,2,5],
  [1,3,4],
  [2,3,2],
  [2,4,7],
  [3,4,6],
  [3,5,11],
  [4,5,3],
  [4,6,8],
  [5,6,8]
];

// 부모 노드의 값을 찾아서 return
function findParent(parent, n) {
  if(n === parent[n]) return n;
  else {
    parent[n] = findParent(parent, parent[n]);
    return parent[n];
  }
}

function unionParent(parent, x, y) {
  const a = findParent(parent, x);
  const b = findParent(parent, y);

  if(a < b) parent[b] = a;
  else parent[a] = b;

  return parent;
}

function compareParent(parent, x, y) {
  const a = findParent(parent, x);
  const b = findParent(parent, y);

  if(a === b) return true;
  else return false;
}

function kruscal() {
  let result = 0;
  let parent = [];
  // 가중치 순으로 오름차순
  graph.sort((a, b) => a[2] - b[2]);

  // 처음엔 부모 노드를 자기 자신으로 초기화
  for(let i=1; i<=graph.length; i++) { parent[i] = i; }

  for(item of graph) {
    const [a, b, weight] = item;
    
    // a와 b의 부모노드가 다르면,
    // 즉 연결되어 있지 않다면,
    // 연결해주고 부모를 union
    if(!compareParent(parent, a, b)) {
      result += weight;
      unionParent(parent, a, b);
    }
  }

  console.log(result);
}

kruscal();