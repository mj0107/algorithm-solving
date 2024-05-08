/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = (s) => {
  const upperString = s.toUpperCase().replace(/[^A-Z0-9]/g, '');

  if (upperString.length === 0) {
    return true;
  }

  let p1 = 0;
  let p2 = upperString.length - 1;

  while (p1 < p2) {
    if (upperString[p1] !== upperString[p2]) {
      return false;
    }

    p1 += 1;
    p2 -= 1;
  }

  return true;
};
