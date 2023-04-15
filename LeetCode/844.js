/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var backspaceCompare = function(s, t) {
  let stackS = [];
  let stackT = [];

  const stacking = (string, stack) => {
      string.split('').forEach((el) => {
          if(el === '#') {
              stack.pop();
          }
          else {
              stack.push(el);
          }
      });

      return stack.join('');
  }

  return stacking(s, stackS) === stacking(t, stackT);
};