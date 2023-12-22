/**
 * @param {string} s
 * @return {number}
 */
const maxScore = (s) => {
  let max = -Infinity;
  let leftZeroCount = 0;
  let rightOneCount = s.split('').filter(el => el === '1').length;

  for(let i=0; i<s.length-1; i++) {
    let cur = s.charAt(i);

    if(cur === '0') {
      leftZeroCount++;
    }
    else if(cur === '1') {
      rightOneCount--;
    }

    max = Math.max(max, leftZeroCount + rightOneCount);
  }

  return max;
};