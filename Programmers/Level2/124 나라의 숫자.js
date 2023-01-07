function solution(n) {
  let result = '';
  const nums = ['4', '1', '2'];
  
  while(n > 0) {
      result += nums[n % 3];
      
      if(n % 3 === 0) n = parseInt((n / 3)) - 1;
      else n = parseInt(n / 3);
  }
  
  return result.split('').reverse().join('');
}