/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let result = [];
  const getCombination = (arr = [], sum = 0, idx = 0) => {
    if (sum === target) {
      result.push(arr);
      return;
    }

    for (let i = idx; i < candidates.length; i += 1) {
      // 만약 누적된 합과 현재 값의 합이 target 이하라면,
      if (sum + candidates[i] <= target) {
        // 누적된 합을 이루는 배열에 현재 값을 더해서 인자로 넘겨주고,
        // 누적합에 현재 값을 더해서 넘겨주고,
        // 현재 인덱스를 넘겨줌
        getCombination([...arr, candidates[i]], sum + candidates[i], i);
      }
    }
  };

  getCombination();

  return result;
};
