/**
 * @param {string[][]} paths
 * @return {string}
 */
const destCity = (paths) => {
  const pathMap = new Map();

  for (const [start, end] of paths) {
    pathMap.set(start, end);
  }

  for (const end of pathMap.values()) {
    // 도착지점이 Map에 key로 존재하지 않을 경우,
    // 즉 도착지점이 다른 경로로 가는 시작지점이 되지 않을 경우엔 마지막 도착지점이 된다.
    if (pathMap.has(end) === false) {
      return end;
    }
  }
};
