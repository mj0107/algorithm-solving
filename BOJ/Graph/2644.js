/* 촌수계산 */
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input.shift(); // 전체 사람 수
const [n1, n2] = input.shift().split(' ').map(Number); // 촌수 계산 번호
const M = +input.shift(); // 부모 자식들 간의 관계의 개수
const matrix = []; // 관계
input.map((el) => {
  matrix.push(el.split(' ').map(Number));
});

// 연결되어 있는 노드 쌍 저장
const relation = Array.from({ length: N + 1 }, () => []);
const visited = []; // 방문한 노드 저장

function bfs() {
  // 각 노드와 시작 노드로부터 촌수 저장
  let queue = [[n1, 0]];

  while(queue.length !== 0) {
    const [node, cnt] = queue.shift();

    // 노드와 도착 노드가 같으면 cnt(촌수) return
    if(node === n2) return cnt;

    // 만약 visited에 node가 포함되어 있지 않으면,
    // 즉 node가 방문 처리가 안되어있다면,
    if(!visited.includes(node)) {
      visited.push(node); // 방문 처리
      // [node로 부터 이어지는 관계 노드, 촌수+1]
      const nodes = relation[node].map((el) => [el, cnt+1]);

      // 모든 관계 추가
      queue = [...queue, ...nodes];
    }
  }

  return -1;
}

function solution() {
  // 인접 리스트
  for(const [parent, child] of matrix) {
    relation[parent].push(child);
    relation[child].push(parent);
  }

  console.log(bfs());
}

solution();