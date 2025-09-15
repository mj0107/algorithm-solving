const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const testInputCase = input.shift();

function solution(s) {
  let arr = Array.from({length: 26}, () => -1);
  const len = s.length;
  
  for(let i=0; i<len; i++) {
    let idx = s.charCodeAt(i) - 'a'.charCodeAt();

    if(arr[idx] === -1) {
      arr[idx] = i;
    }
  }

  console.log(arr.join(' '));
}

solution(testInputCase);