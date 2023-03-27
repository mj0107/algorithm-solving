/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  if (s.length === 0) return true;
  if (s.length > t.length) return false;

  let [pointerS, pointerT] = [0, 0];
  while (true) {
    if (pointerS === s.length || pointerT === t.length) {
      break;
    }

    if (s.at(pointerS) === t.at(pointerT)) {
      pointerS += 1;
      pointerT += 1;
    } else {
      pointerT += 1;
    }
  }

  return pointerS === s.length;
};
