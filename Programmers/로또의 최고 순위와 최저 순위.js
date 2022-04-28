function solution(lottos, win_nums) {
  let answer = [];
  let best = 0, worst = 0;
  let best_grade, worst_grade;
  
  for(let i=0; i<lottos.length; i++) {
      for(let j=0; j<win_nums.length; j++) {
          if(lottos[i] === win_nums[j]) {
              best++;
              worst++;
          }
      }
      if(lottos[i] === 0) best++;
  }
  
  best_grade = win_nums.length - best + 1;
  worst_grade = win_nums.length - worst + 1;
  
  if(best_grade === 7) best_grade--;
  if(worst_grade === 7) worst_grade--;
  
  answer.push(best_grade, worst_grade);
  
  return answer;
}