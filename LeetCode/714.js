/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
  // 해당 인덱스에 해당하는 순서에 주식을 가지고 있을때의 이윤 dp배열
  let hold = Array.from({ length: prices.length }, () => 0);
  // 해당 인덱스에 해당하는 순서에 주식을 가지고 있지 않을때의 이윤 dp배열
  let free = Array.from({ length: prices.length }, () => 0);

  // 0번째 주식을 샀을 때
  hold[0] = -prices[0];

  for (let i = 1; i < prices.length; i += 1) {
    // i번째에 주식을 가지고 있을때의 최댓값은 i-1번째에 이미 주식을 들고있거나,
    // i-1번째에 주식을 들고있지 않고 i번째 주식을 샀을 경우
    hold[i] = Math.max(hold[i - 1], free[i - 1] - prices[i]);

    // i번째에 주식을 가지고 있지 않을때의 최댓값은 i-1번째에도 주식을 가지고 있지 않았거나,
    // i-1번째에 주식이 있었지만 i번째에 주식을 판 경우
    free[i] = Math.max(free[i - 1], hold[i - 1] + prices[i] - fee);
  }

  return free.at(-1);
};
