/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  if (n === 0) {
    return tasks.length;
  }

  let countMap = tasks.reduce((acc, cur) => {
    acc.set(cur, acc.get(cur) + 1 || 1);
    return acc;
  }, new Map());

  let countArr = Array.from(countMap).sort((a, b) => b[1] - a[1]);
  let [maxTask, maxCount] = countArr.at(0);

  // maxCount에 1을 빼는 이유는 마지막에 idle이 존재하지 않음
  // 만약 ['A', 'A', 'A', 'B', 'B', 'B'] 이고 n = 2 라면,
  // maxCount = 3 이므로, (3 - 1) * 2 = 4
  // A, _, _, A, _, _, A => idleCount = 4
  let idleCount = (maxCount - 1) * n;

  for (const [task, count] of countMap) {
    // idleCount를 구할 때 이미 maxTask의 count로 초기화를 해놓음
    if (task === maxTask) {
      continue;
    }

    // maxCount와 같을 경우 또한 마지막에 idle이 없으므로 count - 1
    // 따라서 아래와 같이 됨. (위에서 구한 idle을 채워넣는 느낌)
    // A, B, _, A, B, _, A, B
    if (count === maxCount) {
      idleCount -= count - 1;
    }
    // 중간에 빈 idle에 채워넣음
    else {
      idleCount -= count;
    }
  }

  // idleCount가 0 미만으로 내려가면 양 끝에 임의로 배치하면 되므로 0으로 초기화
  idleCount = idleCount < 0 ? 0 : idleCount;
  let result = tasks.length + idleCount;
  return result;
};
