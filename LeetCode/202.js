/**
 * @param {number} n
 * @return {boolean}
 */
 var isHappy = function(n) {
  let numSet = new Set();

  let num = n;
  let sum = 0;
  while(true) {
      sum = 0;
      if(num === 1) return true;

      num.toString().split('').map(Number).forEach((el) => {
          sum += el ** 2;
      });
      num = sum;

      if(numSet.has(sum)) {
          return false;
      }
      numSet.add(sum);
  }
};