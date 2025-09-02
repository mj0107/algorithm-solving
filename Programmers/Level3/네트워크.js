function solution(n, computers) {
  const visited = Array.from({ length: n }, () => false);
  let network = 0;

  for (let i = 0; i < n; i++) {
    // 아직 방문하지 않았다면 dfs로 네트워크를 탐색한다.
    if (!visited[i]) {
      dfs(i);
      network++;
    }
  }

  function dfs(cur) {
    for (let i = 0; i < n; i++) {
      if (visited[i]) {
        continue;
      }
      // 이어져 있지 않다면 건너뛴다.
      if (computers[cur][i] === 0) {
        continue;
      }

      visited[i] = true;
      dfs(i);
    }
  }

  return network;
}
