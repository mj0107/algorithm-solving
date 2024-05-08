/**
 * @param {number[]} score
 * @return {string[]}
 */
const findRelativeRanks = (score) => {
  const sortedScoreList = [...score].sort((a, b) => b - a);
  const medalMap = new Map();

  sortedScoreList.forEach((score, index) => {
    if (index === 0) {
      medalMap.set(score, 'Gold Medal');
    } else if (index === 1) {
      medalMap.set(score, 'Silver Medal');
    } else if (index === 2) {
      medalMap.set(score, 'Bronze Medal');
    } else {
      medalMap.set(score, index + 1);
    }
  });

  const result = score.map((el) => medalMap.get(el).toString());
  return result;
};
