/* 연구소 */
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);
// 0: 빈 칸, 1: 벽, 2: 바이러스
const MAP = input.map((row) => {
  return row.split(' ').map(Number);
});

function solution(N, M, MAP) {
  let result = -Infinity;

  const isValidIndex = (map, row, col) => {
    // 행이 범위를 벗어났을 때
    if (row < 0 || row >= N) {
      return false;
    }
    // 열이 범위를 벗어났을 때
    if (col < 0 || col >= M) {
      return false;
    }
    // 빈칸이 아닐 때
    if (map[row][col] !== 0) {
      return false;
    }

    return true;
  };

  const spreadVirus = (map) => {
    // 만약 현재 구한 답의 지도가 정답이 아니라면,
    // 바이러스가 퍼지기 전의 지도로 다른 벽을 세웠을 때를 또 판단해야 하므로
    // 원본 지도를 해치지 않기 위해 깊은 복사
    let spreadedMap = map.map((row) => [...row]);

    const MOVE = {
      top: [-1, 0],
      down: [1, 0],
      left: [0, -1],
      right: [0, 1],
    };
    let queue = [];

    // 바이러스가 있는 좌표들만 큐에 넣어줌
    for (let i = 0; i < N; i += 1) {
      for (let j = 0; j < M; j += 1) {
        if (spreadedMap[i][j] === 2) {
          queue.push([i, j]);
        }
      }
    }

    // bfs
    while (queue.length) {
      const [CUR_ROW, CUR_COL] = queue.shift();

      for (const [MOVE_ROW, MOVE_CUR] of Object.values(MOVE)) {
        const NEXT_ROW = CUR_ROW + MOVE_ROW;
        const NEXT_CUR = CUR_COL + MOVE_CUR;

        if (isValidIndex(spreadedMap, NEXT_ROW, NEXT_CUR)) {
          // 큐에 넣어주고,
          queue.push([NEXT_ROW, NEXT_CUR]);
          // 바이러스 확산
          spreadedMap[NEXT_ROW][NEXT_CUR] = 2;
        }
      }
    }

    return spreadedMap;
  };

  // 안전한 곳의 칸수를 세주는 함수
  const getSafetyZoneCount = (map) => {
    let cnt = 0;

    for (let i = 0; i < N; i += 1) {
      for (let j = 0; j < M; j += 1) {
        if (map[i][j] === 0) {
          cnt += 1;
        }
      }
    }

    return cnt;
  };

  const makeWall = (map, wallCount) => {
    // 벽이 3개 다 세워졌을 때
    if (wallCount === 3) {
      // 바이러스를 퍼뜨리고,
      let spreadedMap = spreadVirus(map);
      // 안전한 칸의 개수를 구함
      let safetyZoneCount = getSafetyZoneCount(spreadedMap);

      // 저장되어 있는 값과 현재 값중 더 큰값으로 갱신
      result = Math.max(result, safetyZoneCount);
      return;
    }

    for (let i = 0; i < N; i += 1) {
      for (let j = 0; j < M; j += 1) {
        // back-tracking
        if (map[i][j] === 0) {
          map[i][j] = 1;
          makeWall(map, wallCount + 1);
          map[i][j] = 0;
        }
      }
    }
  };

  makeWall(MAP, 0);

  console.log(result);
}

solution(N, M, MAP);
