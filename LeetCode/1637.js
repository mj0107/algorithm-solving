/**
 * @param {number[][]} points
 * @return {number}
 */
const maxWidthOfVerticalArea = (points) => {
  let maxWidth = 0;
  const xSet = new Set(points.map(el => el[0]));
  const xList = [...xSet].sort((a, b) => a - b);

  for(let i=1; i<xList.length; i++) {
    let width = xList[i] - xList[i - 1];

    if(maxWidth < width) {
      maxWidth = width;
    }
  }

  return maxWidth;
};