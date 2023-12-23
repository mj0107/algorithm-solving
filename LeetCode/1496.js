/**
 * @param {string} path
 * @return {boolean}
 */
const isPathCrossing = (path) => {
  const dir = {
    N: [-1, 0],
    S: [1, 0],
    E: [0, 1],
    W: [0, -1],
  };
  let [curX, curY] = [0, 0];
  
  const pathSet = new Set();
  pathSet.add('0,0');

  for(let i=0; i<path.length; i++) {
    let cur = path[i];

    curX += dir[cur][0];
    curY += dir[cur][1];

    const coord = `${curX},${curY}`;

    if(pathSet.has(coord) === true) {
      return true;
    }

    pathSet.add(coord);
  }

  return false;
};