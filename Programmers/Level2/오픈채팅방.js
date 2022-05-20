function solution(record) {
  let answer = [];
  let logs = [];
  let userInfo = {};
  let ops = {
      "Enter": "들어왔습니다.",
      "Leave": "나갔습니다.",
  }
  
  record.forEach((item) => {
      const [op, id, nick] = item.split(' ');
      
      // Leave 일때는 op와 id만 입력으로 받고, nick은 입력이 없다.
      if(nick) {
          userInfo[id] = nick;    
      }
      
      if(op !== "Change") {
          logs.push([op, id]);
      }
  });
  
  logs.map(([op, id]) => {
      const s = `${userInfo[id]}님이 ${ops[op]}`;
      answer.push(s);
  });
  
  return answer;
}