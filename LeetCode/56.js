/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  for (let i = 1; i < intervals.length; i += 1) {
    let [start, end] = intervals[i];
    let [prevStart, prevEnd] = intervals[i - 1];

    // 만약 현재 시작이 전의 구간의 끝과 같거나 먼저라면
    // 즉, 이어진다면
    if (start <= prevEnd) {
      // end를 i-1에 더 나중에 끝나는 구간으로 갱신
      // i-1에 하는 이유는, 더 나중에 시작하는 순으로 정렬을 해주었기 때문
      // 즉, i번째는 무조건 i-1번째보다 늦게 시작함
      intervals[i - 1][1] = Math.max(end, prevEnd);
      intervals.splice(i, 1);
      // splice로 length가 1 감소했으므로 i를 1 감소시켜줌
      i -= 1;
    }
  }

  return intervals;
};
