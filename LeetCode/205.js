/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;

  let mapS = new Map();
  let mapT = new Map();

  const STRING_LENGTH = s.length;
  for (let i = 0; i < STRING_LENGTH; i += 1) {
    let curS = s[i];
    let curT = t[i];

    if (mapS.has(curS)) {
      if (mapS.get(curS) !== curT) {
        return false;
      }
    } else {
      mapS.set(curS, curT);
    }

    if (mapT.has(curT)) {
      if (mapT.get(curT) !== curS) {
        return false;
      }
    } else {
      mapT.set(curT, curS);
    }
  }

  return true;
};
