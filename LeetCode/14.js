/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
  if(strs.length === 1) {
      return strs.at(0);
  }

  strs.sort();
  
  let strFirst = strs.at(0);
  let strLast = strs.at(-1);

  for(let i=0; i<=strFirst.length; i+=1) {
      if(strFirst[i] !== strLast[i]) {
          return strFirst.slice(0, i);
      }
  }

  return strFirst;
};