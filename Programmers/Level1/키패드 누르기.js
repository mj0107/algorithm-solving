function solution(numbers, hand) {
  let answer = '';
  
  let prev_left_num = 10; // *
  let prev_right_num = 12; // #
  
  for(let n of numbers) {
      if(n === 0) n = 11;
      
      if(n === 1 || n === 4 || n === 7) {
          answer += 'L';
          prev_left_num = n;
      }
      else if(n === 3 || n === 6 || n === 9) {
          answer += 'R';
          prev_right_num = n;
      }
      else {
          // 거리계산 = 행거리 + 열거리
          let from_left_hand = 
                Math.abs(n - prev_left_num) % 3 + Math.abs(n - prev_left_num) / 3;
          let from_right_hand = 
                Math.abs(n - prev_right_num) % 3 + Math.abs(n - prev_right_num) / 3;
          
          from_left_hand = parseInt(from_left_hand);
          from_right_hand = parseInt(from_right_hand);
          
          console.log(from_left_hand, from_right_hand);
          
          // 왼손에서의 거리가 오른손에서의 거리보다 크다면,
          if(from_left_hand > from_right_hand) {
              answer += 'R';
              prev_right_num = n;
          }
          // 거리가 같으면 주사용 손으로,
          if(from_left_hand === from_right_hand) {
              const my_hand = hand[0].toUpperCase();
              
              if(my_hand === 'L') prev_left_num = n;
              if(my_hand === 'R') prev_right_num = n;
              
              answer += my_hand;
          }
          // 오른손의 거리가 왼손에서의 거리보다 크다면,
          if(from_left_hand < from_right_hand) {
              answer += 'L';
              prev_left_num = n;
          }
      }
  }
  
  return answer;
}