/**
 * @param {string[]} words
 * @return {number}
 */
 var longestPalindrome = function(words) {
  let symmetryMap = new Map(); // 대칭 단어
  let asymmetryMap = new Map(); // 비대칭 단어

  words.forEach((word) => {
      // 대칭 단어
      if(word[0] === word[1]) {
          symmetryMap.set(word, symmetryMap.get(word) + 1 || 1);
      }
      // 비대칭 단어
      else {
          asymmetryMap.set(word, asymmetryMap.get(word) + 1 || 1);
      }
  });

  let result = 0;
  // 비대칭 단어
  for(const [word, count] of asymmetryMap) {
      // 좌우 반전
      let reflectWord = word[1] + word[0];

      // 맵에 좌우 반전된 단어가 있을 경우
      if(asymmetryMap.has(reflectWord)) {
          let reflectWordCount = asymmetryMap.get(reflectWord);
          // 원래단어와 좌우반전된 단어중 작은 카운트만 더함
          // 남는 단어로는 팰린드롬(대칭)을 만들 수 없기 때문
          result += Math.min(count, reflectWordCount);
      }
  }
  
  // 좌우 대칭을 이루는 단어중에 홀수 카운트가 있는지
  let hasOddCountSymmetryWord = false;
  for(const [_, count] of symmetryMap) {
      if(count % 2 === 1) {
          hasOddCountSymmetryWord = true;
      }
      // 홀수개는 단 한번만 사용가능하고, 나머지는 모두 짝수번 사용해야 대칭을 이룰 수 있음
      result += (count % 2 === 0 ? count : count - 1);
  }
  // 홀수번은 단 한번만 사용가능하므로,
  // 홀수 카운트가 존재한다면 결과값 하나 더해줌
  if(hasOddCountSymmetryWord) {
      result += 1;
  }

  return result * 2;
};