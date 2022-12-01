function solution(food) {
  let answer = '';
  let tmp = '';
  for(let i=1; i<food.length; i++) {
      for(let j=0; j<Math.floor(food[i] / 2); j++) {
          tmp += i.toString();
      }
  }
  
  answer = tmp + '0' + tmp.split('').reverse().join('');
  
  return answer;
}