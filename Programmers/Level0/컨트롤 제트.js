function solution(s) {
  let answer = 0;
  
  s = s.split(' ');
  
  s.forEach((el, idx) => {
      if(el === 'Z') answer -= parseInt(s[idx - 1]);
      else answer += parseInt(el);
  });
  
  return answer;
}