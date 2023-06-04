/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  let stack = [asteroids[0]];

  for (let i = 1; i < asteroids.length; i += 1) {
    // 행성이 오른쪽으로 갈 때
    if (asteroids[i] > 0) {
      stack.push(asteroids[i]);
    }
    // 행성이 왼쪽으로 갈 때
    else {
      // 스택이 비어있지 않고,
      // 스택의 top에 있는 행성이 오른쪽으로 가고,
      // 왼쪽으로 오는 행성보다 크기가 작을 때 (부딪혀서 사라짐)
      while (stack.at(-1) > 0 && stack.at(-1) < -asteroids[i]) {
        if (stack.length <= 0) {
          break;
        }
        stack.pop();
      }
    }

    // 스택이 비어있지 않고,
    // 스택의 top이 왼쪽으로 오는 행성의 크기와 같을 때
    if (stack.length && stack.at(-1) === -asteroids[i]) {
      stack.pop();
    } else {
      // 스택이 비었거나 스택의 top이 왼쪽으로 오는 행성일때
      if (stack.length === 0 || stack.at(-1) < 0) {
        stack.push(asteroids[i]);
      }
    }
  }

  return stack;
};
