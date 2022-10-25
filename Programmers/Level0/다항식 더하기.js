function solution(polynomial) {
  polynomial = polynomial.split('+').map(el => el.trim());
  
  let coefficientX = 0; // x의 계수
  let constantTerm = 0; // 상수
  
  for(let term of polynomial) {
      if(term.includes('x')) {
          if(term === 'x') coefficientX += 1;
          else {
              const [COEFFICIENT, _] = term.split('x');
              coefficientX += Number(COEFFICIENT);
          }
      }
      else constantTerm += Number(term);
  }
  
  // 계수가 1일경우, 앞에 1을 붙여주지 않는다
  if(coefficientX === 1) coefficientX = '';
  // 계수가 0일경우, 상수만 return
  if(coefficientX === 0) return `${constantTerm}`;
  // 상수가 0일경우, 일차항만 return
  else if(constantTerm === 0) return `${coefficientX}x`;
  // 모두 값이 있을경우 더해서 return
  else return `${coefficientX}x + ${constantTerm}`;
}