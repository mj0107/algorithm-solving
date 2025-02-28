/**
 * 주어진 정보와 엣지를 기반으로 최대 양의 수를 계산합니다.
 * @param {number[]} info - 각 노드가 양인지 늑대인지 나타내는 배열 (0: 양, 1: 늑대)
 * @param {number[][]} edges - 그래프의 엣지를 나타내는 배열 (각 엣지는 [from, to] 형태)
 * @returns {number} - 가능한 최대 양의 수
 */
function solution(info, edges) {
  const SHEEP = 0;
  const WOLF = 1;

  const graph = Array.from({ length: info.length }, () => []);

  let maxSheepCount = 0;

  /**
   * 엣지를 기반으로 그래프를 초기화합니다.
   * @description 이 함수는 전역 변수 `graph`를 엣지 정보로 채워 트리 구조를 생성합니다.
   */
  const initGraph = () => {
    for (const [from, to] of edges) {
      graph[from].push(to);
    }
  };

  /**
   * 깊이 우선 탐색을 통해 가능한 모든 경로를 탐색하며 양의 수를 최대화합니다.
   * @param {number} curNode - 현재 탐색 중인 노드의 인덱스
   * @param {number} sheepCount - 현재까지 만난 양의 수
   * @param {number} wolfCount - 현재까지 만난 늑대의 수
   * @param {Set<number>} possibleVisitSet - 방문 가능한 노드의 집합
   * @description 이 함수는 재귀적으로 호출되며, 늑대 수가 양의 수 이상이 되지 않는 경로에서 최대 양의 수를 계산합니다.
   */
  const dfs = (curNode, sheepCount, wolfCount, possibleVisitSet) => {
    let nextSheepCount = sheepCount;
    let nextWolfCount = wolfCount;

    if (info[curNode] === SHEEP) {
      nextSheepCount++;
    } else {
      nextWolfCount++;
    }

    if (nextWolfCount >= nextSheepCount) {
      return;
    }

    maxSheepCount = Math.max(maxSheepCount, nextSheepCount);

    // 원본이 수정되는것을 막기 위해 복사를해서 사용합니다.
    const nextPossibleVisitSet = new Set(possibleVisitSet);
    // 현재 노드는 방문중이므로 방문 가능한 노드 Set에서 삭제합니다.
    nextPossibleVisitSet.delete(curNode);

    for (const adjNode of graph[curNode]) {
      nextPossibleVisitSet.add(adjNode);
    }

    for (const nextPossibleNode of nextPossibleVisitSet) {
      dfs(
        nextPossibleNode,
        nextSheepCount,
        nextWolfCount,
        nextPossibleVisitSet
      );
    }
  };

  initGraph();
  dfs(0, 0, 0, new Set());

  return maxSheepCount;
}
