function solution(array) {
  let answer = 0;
  let numberCountObj = {};
  
  array.forEach((el) => {
     numberCountObj[el] = numberCountObj[el] + 1 || 1;
  });
  
  let max = Math.max(...Object.values(numberCountObj));
  let cnt = 0;
  
  Object.entries(numberCountObj).forEach(el => {
     if(el[1] === max) {
         cnt += 1;
         answer = parseInt(el[0]);
     }
  });
  
  if(cnt > 1) answer = -1;
  
  return answer;
}