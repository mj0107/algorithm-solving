/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
 var topKFrequent = function(words, k) {
  const customSort = (a, b) => {
      let [stringA, countA] = a;
      let [stringB, countB] = b;

      if(countA === countB) {
          return stringA.localeCompare(stringB);
      }
      else {
          return countB - countA;
      }
  };

  let wordCountMap = new Map();

  words.forEach((word) => {
      wordCountMap.set(word, wordCountMap.get(word) + 1 || 1);
  });

  let arr = Array.from(wordCountMap).sort((a, b) => customSort(a, b));
  arr = arr.map((el) => el[0]).splice(0, k);
  
  return arr;
};