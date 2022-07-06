const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const T = +input.shift();
const matrix = input.map((el) => {
  return el.split(' ').map(Number);
});

function solution(T, matrix) {
  for(let i=0; i<T; i++) {
    const [x1, y1, x2, y2] = matrix.shift();
    const n = matrix.shift();

    let result = 0;

    for(let j=0; j<n; j++) {
      const [cx, cy, r] = matrix.shift();
      let cnt = 0;

      /* 거리 구하는 공식 : sqrt((x2 - x1)^2 + (y2 - y1)^2)*/
      /* 루트를 씌워야 하므로 양변에 제곱을 해서 비교했다 */
      
      // 출발점과 원의중심 사이의 거리가 반지름보다 작을 경우,
      // 한마디로 출발점이 원의 내부에 있을 경우
      if((x1 - cx)**2 + (y1 - cy)**2 < r**2) cnt++;
      // 도착점과 원의중심 사이의 거리가 반지름보다 작을 경우,
      // 한마디로 도착점이 원의 내부에 있을 경우
      if((x2 - cx)**2 + (y2 - cy)**2 < r**2) cnt++;

      // if(cnt === 0): 둘다 원의 내부에 있으므로 진입/이탈 x
      if(cnt === 1) result++;
      // if(cnt === 2): 둘다 원의 외부에 있으므로 진입/이탈 x
    }

    console.log(result);
  }
}

solution(T, matrix);