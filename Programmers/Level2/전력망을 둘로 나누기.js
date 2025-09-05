/**
 * 인접리스트를 초기화하는 함수이다.
 *
 * @param {number[][]} wires 전선 정보
 * @returns {Map<number, Set<number>>} 인접리스트
 */
function initAdjList(wires) {
  const adjList = new Map();

  wires.forEach(([tower1, tower2]) => {
    if (adjList.has(tower1)) {
      adjList.get(tower1).add(tower2);
    } else {
      adjList.set(tower1, new Set([tower2]));
    }

    if (adjList.has(tower2)) {
      adjList.get(tower2).add(tower1);
    } else {
      adjList.set(tower2, new Set([tower1]));
    }
  });

  return adjList;
}

/**
 * bfs를 이용해 한 쪽 송전탑의 개수를 구하는 함수이다.
 *
 * @param {number} n 송전탑의 개수
 * @param {Map<number, Set<number>>} adjList 인접리스트
 * @returns 두 전력망으로 나누었을 때, 한 쪽의 송전탑의 개수
 */
function bfs(n, adjList) {
  // 임의로 1번 송전탑에서 시작한다.
  const queue = [1];
  const visited = Array.from({ length: n + 1 }, () => false);
  let count = 1;

  visited[1] = true;

  while (queue.length > 0) {
    const curTower = queue.shift();

    for (const nextTower of adjList.get(curTower)) {
      if (visited[nextTower]) {
        continue;
      }

      visited[nextTower] = true;
      queue.push(nextTower);
      count++;
    }
  }

  return count;
}

function solution(n, wires) {
  const adjList = initAdjList(wires);
  let result = Infinity;

  for (const [tower1, tower2] of wires) {
    // tower1과 tower2에 연결된 전선을 끊어준다.
    adjList.get(tower1).delete(tower2);
    adjList.get(tower2).delete(tower1);
    const count1 = bfs(n, adjList);
    const count2 = n - count1;
    // 위에서 끊어준 전선을 다시 이어준다.
    adjList.get(tower1).add(tower2);
    adjList.get(tower2).add(tower1);

    const diff = Math.abs(count1 - count2);
    result = Math.min(result, diff);
  }

  return result;
}
