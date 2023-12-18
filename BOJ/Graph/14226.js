const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const S = +input.shift();
const MAX = 2000 + 1;

const solution = () => {
  bfs();
};

const bfs = () => {
  const queue = [];
  const visited = Array.from({ length: MAX }, () => Array.from({ length: MAX }, () => false));

  // [이모티콘 개수, 클립보드에 복사된 이모티콘의 개수, 시간]
  queue.push([1, 0, 0]);

  while(queue.length > 0) {
    const [emoticon, clipboard, time] = queue.shift();

    // S개의 이모티콘을 만들었을 경우 출력하고 끝낸다.
    if(emoticon === S) {
      console.log(time);
      return;
    }
    if(visited[emoticon][clipboard] === true) {
      continue;
    }

    visited[emoticon][clipboard] = true;

    // 클립보드에 복사
    queue.push([emoticon, emoticon, time + 1]);
    // 붙여넣기
    if(emoticon + clipboard < MAX) {
      queue.push([emoticon + clipboard, clipboard, time + 1]);
    }
    // 삭제
    if(emoticon > 0) {
      queue.push([emoticon - 1, clipboard, time + 1]);
    }
  }
}

solution();