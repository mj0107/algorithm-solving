const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

/**
 * H: A의 세로, W: A의 가로, X: 밑으로 움직인 칸 수, Y: 오른쪽으로 움직인 칸 수
 */
const [H, W, X, Y] = input.shift().split(' ').map(Number);
const A = Array.from({ length: H }, () => Array.from({ length: W }));
const B = input.map(row => row.split(' ').map(Number));

const solution = () => {
  // 겹친부분에 더해진 만큼 빼준다.
  // 밑으로 X, 오른쪽으로 Y만큼 움직여서 겹친부분을 더해줬기 때문에,
  // 위로 X, 왼쪽으로 Y만큼 갔을 때 있는 요소만큼 빼주면 원래 값이 나온다.
  for(let i=X; i<H; i++) {
    for(let j=Y; j<W; j++) {
      B[i][j] -= B[i-X][j-Y];
    }
  }

  // A의 크기에 맞는 만큼 B를 복사한다.
  for(let i=0; i<H; i++) {
    for(let j=0; j<W; j++) {
      A[i][j] = B[i][j];
    }
  }

  A.forEach((row) => {
    console.log(row.join(' '));
  });
};

solution();