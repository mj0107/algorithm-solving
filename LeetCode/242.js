/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
  let alphabetCountList = Array.from({ length: 26 }, () => 0);

  s.split('').forEach((alphabet) => {
    let index = alphabet.charCodeAt(0) - 'a'.charCodeAt(0);
    alphabetCountList[index]++;
  });
  t.split('').forEach((alphabet) => {
    let index = alphabet.charCodeAt(0) - 'a'.charCodeAt(0);
    alphabetCountList[index]--;
  });

  return alphabetCountList.every(count => count === 0);
};