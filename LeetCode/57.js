/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  let result = [];

  for (const [start, end] of intervals) {
    let [newStart, newEnd] = newInterval;
    let min = Math.min(newStart, start);
    let max = Math.max(newEnd, end);

    // 만약 새로운 interval의 끝 지점이 현재 interval의 시작지점보다 가깝다면
    // 새로운 interval을 result에 넣고, 현재 interval로 대체
    if (newEnd < start) {
      result.push(newInterval);
      newInterval = [start, end];
    }
    // 만약 현재 interval 끝 지점이 새로운 interval 시작지점보다 가깝다면
    // 현재 interval을 result에 넣음
    else if (end < newStart) {
      result.push([start, end]);
    }
    // 중첩되었을경우 merge
    else {
      newInterval = [min, max];
    }
  }

  result.push(newInterval);

  return result;
};
