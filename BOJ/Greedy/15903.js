const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, m] = input.shift().split(' ').map(Number);

function solution(n, m) {
  const cards = input.shift().split(' ').map(Number);
  cards.sort((a, b) => a - b);

  for(let i=0; i<m; i++) {
    const tmp = cards[0] + cards[1];
    cards[0] = tmp;
    cards[1] = tmp;
    cards.sort((a, b) => a - b);
  }

  let sum = 0;
  for(let i=0; i<n; i++) {
    sum += cards[i];
  }

  console.log(sum);
}

solution(n, m);