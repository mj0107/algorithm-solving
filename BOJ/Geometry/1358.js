/* 하키 */
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

// W: width, H: height, (X, Y), P: 선수의 수
const [W, H, X, Y, P] = input.shift().split(' ').map(Number);
const coordinate = [];

input.map(el => {
  coordinate.push(el.split(' ').map(Number));
});

function isIn(X, Y, x, y, r) {
  return (x-X)**2 + (y-Y)**2 <= r**2;
}

function solution(W, H, X, Y, P, coordinate) {
  let cnt = 0;

  for(const [x, y] of coordinate) {
    // 가운데 사각형 안에 있을 때,
    if((X <= x && x <= X+W) && (Y <= y && y <= Y+H)) cnt++;
    // 왼쪽 반원 안에 있을 때,
    else if(isIn(X, Y + H/2, x, y, H/2)) cnt++;
    // 오른쪽 반원 안에 있을 때,
    else if(isIn(X+W, Y + H/2, x, y, H/2)) cnt++;
  }

  console.log(cnt);
}

solution(W, H, X, Y, P, coordinate); 