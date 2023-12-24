/**
 * @param {string} s
 * @return {number}
 */
const minOperations = (s) => {
  let count = 0;

  for(let i=0; i<s.length; i++) {
    const cur = s.charAt(i);

    if(i % 2 === 0 && cur === '0') {
      count++;
    }
    else if(i % 2 === 1 && cur === '1') {
      count++;
    }
  }

  return Math.min(count, s.length - count);
};