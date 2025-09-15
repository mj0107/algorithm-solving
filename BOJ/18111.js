const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.trim());

const [N, M, B] = input.shift().split(' ').map(Number);
const map = input.map((row) => row.split(' ').map(Number));
const MAX_HEIGHT = 256;

function solution() {
  const { minHeight, maxHeight, heightCountList } = calculateHeightData(map);
  const { minTime, optimalHeight } = findOptimalHeight(
    minHeight,
    maxHeight,
    heightCountList,
    B
  );

  console.log(minTime, optimalHeight);
}

/**
 * 각 높이의 출현 빈도와 최소/최대 높이를 계산하는 함수이다.
 *
 * @param {number[][]} map - N x M 크기의 맵 데이터
 * @returns {Object} - { minHeight, maxHeight, heightCountList }
 */
function calculateHeightData(map) {
  const heightCountList = Array.from({ length: MAX_HEIGHT + 1 }, () => 0);
  let minHeight = Infinity;
  let maxHeight = -Infinity;

  map.forEach((row) =>
    row.forEach((height) => {
      heightCountList[height]++;
      minHeight = Math.min(minHeight, height);
      maxHeight = Math.max(maxHeight, height);
    })
  );

  return { minHeight, maxHeight, heightCountList };
}

/**
 * 주어진 높이 범위에서 최적의 시간을 계산하고, 해당 높이를 반환하는 함수이다.
 *
 * @param {number} minHeight - 맵의 최소 높이
 * @param {number} maxHeight - 맵의 최대 높이
 * @param {number[]} heightCountList - 각 높이의 출현 빈도
 * @param {number} initialBlocks - 초기 블록 수
 * @returns {Object} - { minTime, optimalHeight }
 */
function findOptimalHeight(
  minHeight,
  maxHeight,
  heightCountList,
  initialBlocks
) {
  let minTime = Infinity;
  let optimalHeight = -Infinity;

  for (
    let targetHeight = minHeight;
    targetHeight <= maxHeight;
    targetHeight++
  ) {
    const { time, remainingBlocks } = calculateTimeAndBlocks(
      targetHeight,
      heightCountList,
      initialBlocks
    );

    if (remainingBlocks < 0) {
      continue;
    }

    if (time <= minTime) {
      minTime = time;
      if (targetHeight > optimalHeight) {
        optimalHeight = targetHeight;
      }
    }
  }

  return { minTime, optimalHeight };
}

/**
 * 특정 목표 높이에서 소요 시간과 남은 블록 수를 계산하는 함수이다.
 *
 * @param {number} targetHeight - 목표 높이
 * @param {number[]} heightCountList - 각 높이의 출현 빈도
 * @param {number} initialBlocks - 초기 블록 수
 * @returns {Object} - { time, remainingBlocks }
 */
function calculateTimeAndBlocks(targetHeight, heightCountList, initialBlocks) {
  let time = 0;
  let remainingBlocks = initialBlocks;

  heightCountList.forEach((count, height) => {
    if (count === 0) return;

    if (height > targetHeight) {
      const removeBlocks = (height - targetHeight) * count;
      time += 2 * removeBlocks;
      remainingBlocks += removeBlocks;
    } else if (height < targetHeight) {
      const addBlocks = (targetHeight - height) * count;
      time += addBlocks;
      remainingBlocks -= addBlocks;
    }
  });

  return { time, remainingBlocks };
}

solution();
