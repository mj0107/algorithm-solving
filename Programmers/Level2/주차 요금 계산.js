function solution(fees, records) {
  let answer = [];
  let info = {};
  const [default_time, default_fee, unit_time, unit_fee] = fees;
  
  for(record of records) {
      let [time, car_num, op] = record.split(' ');
      const [hours, minutes] = time.split(':').map(Number);
      // 시간 계산하기 편하도록 분으로 바꾸기
      let time_to_minutes = hours * 60 + minutes;
      
      // 입차
      if(op === 'IN') {
          const last_enter_time = time_to_minutes;
          
          // 처음 들어왔을 경우
          if(!info[car_num]) {
              info[car_num] = {
                  op,
                  last_enter_time,
                  stay_time: 0,
                  fee: 0,
              }
          }
          else {
              info[car_num].op = op;
              info[car_num].last_enter_time = last_enter_time;
          }
      }
      // 출차
      else {
          info[car_num].op = 'OUT';
          const stay_time = time_to_minutes - info[car_num].last_enter_time;
          info[car_num].stay_time += stay_time;
      }
  }
  
  Object.values(info).map(el => {
      if(el.op === 'IN') {
          const last_time = 23 * 60 + 59;
          const stay_time = last_time - el.last_enter_time;
          
          el.stay_time += stay_time;
      }
      
      let fee = 0;
      
      if(el.stay_time <= default_time) fee = default_fee;
      else fee = default_fee + (Math.ceil((el.stay_time - default_time) / unit_time) * unit_fee);
      
      el.fee += fee;
  });
  
  answer = Object.entries(info).sort().map((el) => { return el[1].fee; });
  
  return answer;
}