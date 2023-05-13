/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  nums.sort((a, b) => a - b);
  let totalSum = nums.reduce((acc, cur) => acc + cur);
  let target = totalSum / 2;

  // 총합이 홀수라면 반으로 나눌 수 없으므로 false 반환
  if (totalSum % 2 === 1) {
    return false;
  }

  const backTracking = (current, index) => {
    // target 값이 가능하면 true 반환
    if (current === target) {
      return true;
    }

    // 작은수부터 더해갔는데 target값을 넘거나,
    // index가 범위를 넘었다면, 즉 다 돌아도 할 수 없다면 false 반환
    if (current > target || index >= nums.length) {
      return false;
    }

    // 현재값에 다음값을 더하고, 다음에 더할 수의 인덱스를 하나 더하던가,
    // 다음값을 더했을 때 false 일 수 있으므로 현재값을 유지한채 다음에 더할 인덱스만 하나 더해줌
    return (
      backTracking(current + nums[index], index + 1) ||
      backTracking(current, index + 1)
    );
  };
  return backTracking(0, 0);
};
