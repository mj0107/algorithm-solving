/* 치킨 배달 */
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

// N: 줄의 개수, M: 폐업시키지 않을 치킨집의 개수
const [N, M] = input.shift().split(' ').map(Number);
// 0: 빈 칸, 1: 집, 2: 치킨 집
const CITY_LIST = input.map((row) => {
  return row.split(' ').map(Number);
});

function solution(N, M, CITY_LIST) {
  let houseList = [];
  let chickenStoreList = [];

  for (let i = 0; i < N; i += 1) {
    for (let j = 0; j < N; j += 1) {
      let curPos = CITY_LIST[i][j];

      // 집일 때
      if (curPos === 1) {
        houseList.push([i, j]);
      }
      // 치킨집일 때
      else if (curPos === 2) {
        chickenStoreList.push([i, j]);
      }
    }
  }

  // 치킨집들의 위치가 저장되어있는 배열에서,
  // 배열의 각 인덱스에 해당하는 위치가 열려있는,
  // 즉 폐업하지 않은 치킨집인지 저장하는 배열
  let isOpenedChickenStore = Array.from(
    { length: chickenStoreList.length },
    () => false
  );

  // 두 위치 사이의 치킨거리를 구하는 함수
  const getChickenDistance = (r1, c1, r2, c2) => {
    return Math.abs(r1 - r2) + Math.abs(c1 - c2);
  };

  // 최소 치킨거리를 구하는 함수
  const getMinChickenDistance = () => {
    let sum = 0;

    for (const [HOUSE_ROW, HOUSR_COL] of houseList) {
      let min = Infinity;
      for (let i = 0; i < chickenStoreList.length; i += 1) {
        // 만약 치킨집이 열려있다면,
        if (isOpenedChickenStore[i] === true) {
          const [CHICKEN_ROW, CHICKEN_COL] = chickenStoreList[i];
          min = Math.min(
            min,
            getChickenDistance(HOUSE_ROW, HOUSR_COL, CHICKEN_ROW, CHICKEN_COL)
          );
        }
      }

      sum += min;
    }

    return sum;
  };

  let result = Infinity;
  const backTracking = (idx, count) => {
    if (count === M) {
      result = Math.min(result, getMinChickenDistance());
      return;
    }

    for (let i = idx; i < isOpenedChickenStore.length; i += 1) {
      isOpenedChickenStore[i] = true;
      backTracking(i + 1, count + 1);
      isOpenedChickenStore[i] = false;
    }
  };

  backTracking(0, 0);
  console.log(result);
}

solution(N, M, CITY_LIST);
