/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
const appendCharacters = (s, t) => {
  let [sIndex, tIndex] = [0, 0];
  const [sLen, tLen] = [s.length, t.length];

  // 범위가 벗어나지 않을때까지만 반복
  while (sIndex < sLen && tIndex < tLen) {
    // s의 현재 인덱스의 값과 t의 현재 인덱스의 값이 같다면,
    if (s[sIndex] === t[tIndex]) {
      tIndex++;
    }
    sIndex++;
  }

  // tIndex의 위치는 s와 t가 같은 prefix를 가지는 인덱스의 위치와 같으므로,
  // t의 전체길이에서 prefix만큼 빼주면, 더 붙여야하는 길이가 나온다.
  return tLen - tIndex;
};
