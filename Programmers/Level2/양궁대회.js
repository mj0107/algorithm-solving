function solution(n, info) {
  const apeachInfo = [...info];
  const lionInfo = Array.from({ length: 11 }, () => 0);
  let result = [-1];
  let maxDiff = -Infinity;

  function getTotalScore() {
    let apeachTotalScore = 0;
    let lionTotalScore = 0;

    for (let i = 0; i < 11; i++) {
      const curScore = 10 - i;

      if (lionInfo[i] > apeachInfo[i]) {
        lionTotalScore += curScore;
      } else if (apeachInfo[i] > 0) {
        apeachTotalScore += curScore;
      }
    }

    return { apeachTotalScore, lionTotalScore };
  }

  function isMoreLowerScore(arr1, arr2) {
    for (let i = 10; i >= 0; i--) {
      if (arr1[i] !== arr2[i]) {
        return arr1[i] > arr2[i];
      }
    }

    return false;
  }

  function dfs(scoreIndex, remainArrows, lionInfo) {
    if (scoreIndex === 11) {
      lionInfo[10] = remainArrows;

      const { apeachTotalScore, lionTotalScore } = getTotalScore();
      const diff = lionTotalScore - apeachTotalScore;

      if (
        diff > 0 &&
        (diff > maxDiff ||
          (diff === maxDiff && isMoreLowerScore(lionInfo, result)))
      ) {
        maxDiff = diff;
        result = [...lionInfo];
      }

      return;
    }

    // 현재 점수를 포기하는 경우
    dfs(scoreIndex + 1, remainArrows, lionInfo);

    // 현재 점수를 가져가는 경우
    const needArrows = apeachInfo[scoreIndex] + 1;

    // 남은 화살이 필요한 화살만큼 있을경우
    if (remainArrows >= needArrows) {
      lionInfo[scoreIndex] = needArrows;
      dfs(scoreIndex + 1, remainArrows - needArrows, lionInfo);
      lionInfo[scoreIndex] = 0;
    }
  }

  dfs(0, n, lionInfo);

  return result;
}
