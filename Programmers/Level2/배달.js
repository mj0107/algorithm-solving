function solution(N, road, K) {
  const adjMatrix = Array.from({ length: N + 1 }, () =>
    Array.from({ length: N + 1 }, () => Infinity)
  );

  /**
   * 인접행렬을 만드는 함수이다.
   */
  const makeAdjMatrix = () => {
    // 자기 자신으로 가는 시간은 0이기 때문에 0으로 초기화 해준다.
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        if (i === j) {
          adjMatrix[i][j] = 0;
        }
      }
    }

    for (let i = 0; i < road.length; i++) {
      for (let j = 0; j < N; j++) {
        const [start, end, time] = road[i];

        // 양방향으로 연결되어 있기 때문에 양방향으로 초기화 해준다.
        adjMatrix[start][end] = Math.min(adjMatrix[start][end], time);
        adjMatrix[end][start] = Math.min(adjMatrix[end][start], time);
      }
    }
  };

  /**
   * Floyd-Warshall 알고리즘으로 최단거리를 구하는 함수이다.
   */
  const floydWarshall = () => {
    for (let k = 1; k <= N; k++) {
      for (let i = 1; i <= N; i++) {
        for (let j = 1; j <= N; j++) {
          if (adjMatrix[i][k] + adjMatrix[k][j] < adjMatrix[i][j]) {
            adjMatrix[i][j] = adjMatrix[i][k] + adjMatrix[k][j];
          }
        }
      }
    }
  };

  let result = 0;
  const getResult = () => {
    for (let i = 1; i <= N; i++) {
      if (adjMatrix[1][i] <= K) {
        result++;
      }
    }
  };

  makeAdjMatrix();
  floydWarshall();
  getResult();

  return result;
}
