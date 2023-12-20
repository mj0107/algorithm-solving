/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
const buyChoco = (prices, money) => {
  prices.sort((a, b) => a - b);

  if (prices[0] + prices[1] > money) {
    return money;
  }

  return money - prices[0] - prices[1];
};
