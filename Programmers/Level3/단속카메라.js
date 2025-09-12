function solution(routes) {
  routes.sort((a, b) => a[1] - b[1]);
  let cameraCount = 0;
  let cameraPosition = -30001;

  for (const [from, to] of routes) {
    if (from > cameraPosition) {
      cameraPosition = to;
      cameraCount++;
    }
  }

  return cameraCount;
}
