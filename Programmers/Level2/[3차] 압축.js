let dictionary = new Map();

function initDictionary() {
  let alphabetList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  
  alphabetList.forEach((el, idx) => {
    dictionary.set(el, idx + 1);
  });
}

function addDictionary(msg) {
  let start = 0;
  let end = 0;
  const MSG_LENGTH = msg.length;

  let cur;
  while(true) {
    cur = msg.slice(start, end + 1);
    if(start >= MSG_LENGTH || end >= MSG_LENGTH) break;

    // 사전에 현재 단어가 있다면
    if(dictionary.has(cur)) {
      end += 1;
    }
    // 사전에 현재 단어가 없다면
    else {
      // 사전의 맨 뒤에 등록
      dictionary.set(cur, dictionary.size + 1);
      // start를 현재 단어의 다음으로 옮김
      start += cur.length;
      end += 1;
    }
  }
}

function findIndex(msg) {
  let result = [];
  let start = 0;
  let end = 0;
  const MSG_LENGTH = msg.length;

  let cur;
  while(true) {
    cur = msg.slice(start, end + 1);
    if(start >= MSG_LENGTH || end >= MSG_LENGTH) break;

    if(result.includes(dictionary.get(cur))) {
      end += 1;
      continue;
    }
    else {
      result.push(dictionary.get(cur));
      start += cur.length;
      end += 1;
    }
  }

  return result;
}

function solution(msg) {
  initDictionary();
  addDictionary(msg);
  let result = findIndex(msg);

  return result;
}

const msg = 'KAKAO';
const result = solution(msg);
console.log(result);