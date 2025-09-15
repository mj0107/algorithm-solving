const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const N = +input.shift();

function solution(N, input) {
  let cnt = 0;
  for(let i=0; i<N; i++) {
    let check = true;
    let s = input[i];

    for(let j=0; j<s.length; j++) {
      for(let k=0; k<j; k++) {
        if(s[j]===s[k] && s[j]!==s[j-1]) {
          check = false;
          break;
        }
      }
      if(!check) break;
    }
    if(check) cnt++;
  }
  console.log(cnt);
}

solution(N, input);