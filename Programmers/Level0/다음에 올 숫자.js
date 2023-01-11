function isArithmeticSequence(common) {
  if(common[1] - common[0] === common[2] - common[1]) {
      return true;
  }
  else {
      return false;
  }
}

function isGeometricSequence(common) {
  if(common[1] / common[0] === common[2] / common[1]) {
      return true;
  }
  else {
      return false;
  }
}

function solution(common) {
  if(isArithmeticSequence(common)) {
      return common.at(-1) + common[1] - common[0];
  }
  else if(isGeometricSequence(common)) {
      return common.at(-1) * (common[1] / common[0]);
  }
}