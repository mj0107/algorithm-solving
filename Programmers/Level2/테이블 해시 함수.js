function solution(data, col, row_begin, row_end) {
  // 1. 테이블의 튜플을 col 번째 컬럼의 값을 기준으로 오름차순 정렬을 하되,
  //    만약 그 값이 동일하면 기본키인 첫 번째 컬럼의 값을 기준으로 내림차순 정렬합니다.
  data.sort((a, b) => {
    if (a[col - 1] === b[col - 1]) {
      return b[0] - a[0];
    }
    return a[col - 1] - b[col - 1];
  });

  // 2. 정렬된 데이터에서 S_i를 i번째 행의 튜플에 대해
  //    각 컬럼의 값을 i로 나눈 나머지들의 합으로 정의합니다.
  const S = [];
  for (let i = 0; i < data.length; i++) {
    let S_i = 0;
    for (let j = 0; j < data[i].length; j++) {
      S_i += data[i][j] % (i + 1);
    }

    S.push(S_i);
  }

  // 3. row_begin <= i <= row_end 인 모든 S_i를 누적하여
  //    bitwise XOR 한 값을 해시 값으로서 반환합니다.
  let result = S[row_begin - 1];
  for (let i = row_begin; i < row_end; i++) {
    result ^= S[i];
  }

  return result;
}
