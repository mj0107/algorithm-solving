function solution(k, tangerine) {
  let tangerineKindCountObj = {};

  tangerine.forEach((el) => {
    tangerineKindCountObj[el] = tangerineKindCountObj[el] + 1 || 1;
  });

  let tangerineCountList = Object.values(tangerineKindCountObj);
  tangerineCountList.sort((a, b) => b - a);

  let cnt = 0;
  for (tangerineCount of tangerineCountList) {
    if (k <= 0) break;
    k -= tangerineCount;
    cnt += 1;
  }

  return cnt;
}
