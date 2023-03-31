/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  if (s.length === 1) return 1;

  const TOTAL_ALPHABET_COUNT = 'z'.charCodeAt(0) - 'A'.charCodeAt(0) + 1;
  let alphabetCountList = Array.from({ length: TOTAL_ALPHABET_COUNT }, () => 0);

  let alphabetIndex = 0;
  s.split('').forEach((alphabet) => {
    alphabetIndex = alphabet.charCodeAt(0) - 'A'.charCodeAt(0);
    alphabetCountList[alphabetIndex] += 1;
  });

  let oddCount = alphabetCountList.filter((count) => count % 2 === 1);
  let evenCount = alphabetCountList.filter((count) => count % 2 === 0);

  let result = 0;
  result += oddCount.length
    ? oddCount.reduce((acc, cur) => acc + (cur - 1), 1)
    : 0;
  result += evenCount.reduce((acc, cur) => acc + cur);

  return result;
};
