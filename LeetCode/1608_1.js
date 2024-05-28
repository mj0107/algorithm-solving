/**
 * @param {number[]} nums
 * @return {number}
 */
const specialArray = (nums) => {
  const sortedNumberList = [...nums].sort((a, b) => a - b);
  const min = 0;
  const max = sortedNumberList.at(-1);

  for (let x = max; x > min; x--) {
    let count = 0;
    for (let i = 0; i < sortedNumberList.length; i++) {
      const cur = sortedNumberList[i];

      if (x <= cur) {
        count++;
      }
    }

    if (count === x) {
      return x;
    }
  }

  return -1;
};
