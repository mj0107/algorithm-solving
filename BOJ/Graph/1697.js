const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, K] = input.shift().split(' ').map(Number);
const MAX = 1e5 + 1;

const solution = () => {
  bfs();
};

const bfs = () => {
  const queue = [[N, 0]];
  const visited = Array.from({ length: MAX }, () => false);

  visited[N] = true;

  while (queue.length > 0) {
    const [curPos, curTime] = queue.shift();

    if (curPos === K) {
      console.log(curTime);
      return;
    }

    // (현재 칸 - 1)로 이동
    if (curPos > 0 && !visited[curPos - 1]) {
      queue.push([curPos - 1, curTime + 1]);
      visited[curPos - 1] = true;
    }
    // (현재 칸 + 1)로 이동
    if (curPos < MAX - 1 && !visited[curPos + 1]) {
      queue.push([curPos + 1, curTime + 1]);
      visited[curPos + 1] = true;
    }
    // (현재 칸 * 2)로 이동
    if (curPos * 2 < MAX && !visited[curPos * 2]) {
      queue.push([curPos * 2, curTime + 1]);
      visited[curPos * 2] = true;
    }
  }
};

solution();
