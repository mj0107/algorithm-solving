function isValidPosition(x, y) {
  if(x < -5 || x > 5) return false;
  if(y < -5 || y > 5) return false;

  return true;
}

function solution(dirs) {
  let result = '';
  let routeSet = new Set();
  let [curX, curY] = [0, 0];
  const moveObj = {
    U: [0, 1],
    D: [0, -1],
    L: [-1, 0],
    R: [1, 0],
  };

  let curState = '';
  let [moveX, moveY] = [0, 0];
  let [nextX, nextY] = [0, 0];
  for(let i=0; i<dirs.length; i+=1) {
    curState = `${curX}${curY}`;

    [moveX, moveY] = moveObj[dirs[i]];
    [nextX, nextY] = [curX + moveX, curY + moveY];

    if(isValidPosition(nextX, nextY)) {
      curState += `${nextX}${nextY}`;
      routeSet.add(curState);

      curState = `${nextX}${nextY}${curX}${curY}`;
      routeSet.add(curState);

      [curX, curY] = [nextX, nextY];
    }
    else {
      nextX = curX;
      nextY = curY;
      continue;
    }
  }

  result = routeSet.size / 2;
  return result;
}

const dirs = 'ULURRDLLU';
const result = solution(dirs)
console.log(result);