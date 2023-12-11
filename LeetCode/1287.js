/**
 * @param {number[]} arr
 * @return {number}
 */
const findSpecialInteger = (arr) => {
  let countMap = new Map();
  let quater = arr.length / 4;

  arr.forEach((el) => {
    countMap.set(el, countMap.get(el) + 1 || 1);
  });

  let countArr = [...countMap].sort((a, b) => b[1] - a[1]);
  for(const [key, value] of countArr) {
    if(value >= quater) {
      return key;
    }
  }
};