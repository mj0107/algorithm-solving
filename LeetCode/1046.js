/**
 * @param {number[]} stones
 * @return {number}
 */
 var lastStoneWeight = function(stones) {
  let [first, second] = [0, 0];
  while(stones.length > 1) {
      stones.sort((a, b) => a - b);
      first = stones.pop();
      second = stones.pop();

      if(first === second) {
          continue;
      }
      stones.push(Math.abs(first - second));
  }

  return stones;
}