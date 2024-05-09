/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
const maximumHappinessSum = (happiness, k) => {
  const sortedHappiness = [...happiness].sort((a, b) => b - a);

  let result = 0;
  for (let i = 0; i < k; i += 1) {
    result += Math.max(sortedHappiness[i] - i, 0);
  }

  return result;
};
