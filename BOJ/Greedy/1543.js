/* 문서 검색 */
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let doc = input.shift();
const search = input.shift();

function solution(doc, search) {
  let cnt = 0;
  let idx = 0;

  while(idx >= 0) {
    // doc에서 search가 처음 등장하는 인덱스 추출
    idx = doc.indexOf(search);  
    // doc에 search가 있다면,
    if(idx >= 0) {
      // search의 뒤부터 끝까지 잘라줌
      // 다시말하면, doc에서 찾은 search는 뺀 문자열로 다시 치환
      doc = doc.slice(idx + search.length, doc.length);
      cnt++;
    }
  }
  
  console.log(cnt);
}

solution(doc, search);