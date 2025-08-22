function getCombinations(order, index, current, combinationMap) {
  if (index === order.length) {
    if (current.length !== 0) {
      const sortedCombination = current.split('').sort().join('');
      combinationMap.set(
        sortedCombination,
        (combinationMap.get(sortedCombination) || 0) + 1
      );
    }
    return;
  }

  // 현재 문자를 포함하는 경우
  getCombinations(order, index + 1, current + order[index], combinationMap);
  // 현재 문자를 포함하지 않는 경우
  getCombinations(order, index + 1, current, combinationMap);
}

function solution(orders, course) {
  const combinationMap = new Map();
  const lengthMap = new Map();

  orders.forEach((order) => {
    getCombinations(order, 0, '', combinationMap);
  });

  Array.from(combinationMap.entries())
    .filter(([, count]) => count >= 2)
    .forEach(([combination, count]) => {
      const combinationLength = combination.length;
      if (lengthMap.has(combinationLength)) {
        lengthMap.get(combinationLength).push([combination, count]);
      } else {
        lengthMap.set(combinationLength, [[combination, count]]);
      }
    });

  const result = course.flatMap((targetLength) => {
    if (!lengthMap.has(targetLength)) {
      return [];
    }

    const combinations = lengthMap.get(targetLength);
    const maxCount = Math.max(...combinations.map(([, count]) => count));

    return combinations
      .filter(([, count]) => count === maxCount)
      .map(([combination]) => combination);
  });

  return result.sort();
}
