function solution(N, stages) {
  let answer = [];
  
  for(let i=1; i<=N; i++) {
      const reach = stages.filter(el => el >= i).length;
      const fail = stages.filter(el => el === i).length;
      
      const failure_cnt = fail / reach;
      answer.push([failure_cnt, i]);
  }
  
  answer.sort((a, b) => b[0] - a[0]);
  
  return answer.map(el => el[1]);
}