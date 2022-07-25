function solution(s) {
  // 반복되는 문자열이 없을 경우 최소 길이는 문자열의 길이와 같다
  let answer = s.length;
  const len = s.length / 2;
  
  // slice(0, i)가 i의 전까지 slice하므로, len+1 까지 반복
  for(let i=1; i<len+1; i++) {
      let tmp = "";
      let repeat_str = s.slice(0, i); // 반복할 문자열
      let cnt = 1;
      
      for(let j=i; j<s.length; j+=i) {
          // 반복할 문자열과 비교할 문자열
          const compare_str = s.slice(j, j+i);
          
          if(repeat_str === compare_str) {
              cnt++;
          }
          else {
              if(cnt > 1) {
                  tmp += `${cnt}`;
              }
              tmp += repeat_str;
              // 다음 반복할 문자열 지정
              repeat_str = s.slice(j, j+i);
              cnt = 1;
          }
      }
      if(cnt > 1) {
          tmp += `${cnt}`;
      }
      tmp += repeat_str;
      
      answer = Math.min(answer, tmp.length);
  }
      
  return answer;
}