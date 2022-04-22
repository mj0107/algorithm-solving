function solution(answers) {
  const fir = [1,2,3,4,5];
  const sec = [2,1,2,3,2,4,2,5];
  const thr = [3,3,1,1,2,2,4,4,5,5];
  
  const count = [0,0,0];
  
  for(let i=0; i<answers.length; i++) {
      if(fir[i%5] === answers[i]) {
          count[0]++;
      }
      if(sec[i%8] === answers[i]) {
          count[1]++;
      }
      if(thr[i%10] === answers[i]) {
          count[2]++;
      }
  }
  
  const max = Math.max(count[0],count[1],count[2]);
  const correct = [];
  for(let i=0; i<count.length; i++) {
      if(max === count[i]) {
          correct.push(i+1);
      }
  }
  return correct;
}