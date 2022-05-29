function solution(s) {
  let answer = [0, 0];
  
  while(true) {
      // 0을 제거한 s의 길이
      const str = s.split('').filter(num => num > 0).length;
      // 제거된 0의 개수
      answer[1] += s.split('').filter(num => num == 0).length;
      // 이진 변환의 횟수
      answer[0]++;
      
      // s의 길이를 2진법으로 표현한 문자열
      s = str.toString(2);
      if(s === "1") break;
  }
  
  return answer;
}