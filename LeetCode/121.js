/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
  let profit = 0;
  let minPrice = Math.max(...prices);
  let maxProfit = 0;

  for(const CURRENT_PRICE of prices) {
      minPrice = Math.min(minPrice, CURRENT_PRICE);
      profit = CURRENT_PRICE - minPrice;
      maxProfit = Math.max(maxProfit, profit);
  }

  return maxProfit;
};