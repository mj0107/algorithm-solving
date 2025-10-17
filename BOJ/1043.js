const fs = require('fs');
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const [truthKnowerCount, ...truthKnowerNumberList] = input
  .shift()
  .split(' ')
  .map(Number);
const partyInfoList = input.map((row) => row.split(' ').map(Number));
const truthKnowerNumberSet = new Set(truthKnowerNumberList);

function solution() {
  if (truthKnowerCount === 0) {
    console.log(M);
    return;
  }

  let changed = true; // 진실을 알고있는 사람이 추가되었는지 여부
  // 계속 순회하면서 진실을 알고있는 사람이 추가되지 않을 때까지 반복
  while (changed) {
    changed = false;
    for (const [_, ...numberList] of partyInfoList) {
      // 파티 정보에 진실을 알고있는 사람이 있는지 확인
      if (numberList.some((number) => truthKnowerNumberSet.has(number))) {
        // 파티 정보에 있는 사람들을 순회하며 진실을 알고있는 사람이 있는지 확인
        numberList.forEach((number) => {
          // 진실을 알고있는 사람이 아니라면 추가
          if (!truthKnowerNumberSet.has(number)) {
            truthKnowerNumberSet.add(number);
            changed = true; // 진실을 알고있는 사람이 추가되었으므로 반복 계속
          }
        });
      }
    }
  }

  let result = 0;
  for (const [_, ...numberList] of partyInfoList) {
    if (!numberList.some((number) => truthKnowerNumberSet.has(number))) {
      result++;
    }
  }

  console.log(result);
}

solution();
