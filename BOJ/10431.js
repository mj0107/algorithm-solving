const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const P = +input.shift();
const infoList = input.map(row => row.split(' ').map(Number));

const solution = () => {
  for(let i=0; i<P; i++) {
    const [testCase, ...heightList] = infoList[i];

    const stepBackCount = getStepBackCount(heightList);

    console.log(`${testCase} ${stepBackCount}`);
  }
};

/**
 * 한 발씩 뒤로 물러나는 총 횟수를 구하는 함수
 * 
 * @param {number[]} heightList 키 리스트
 * @returns 한 발씩 뒤로 물러나는 총 횟수를 반환한다.
 */
const getStepBackCount = (heightList) => {
  let stepBackCount = 0;

  for(let i=0; i<heightList.length; i++) {
    let curHeight = heightList[i];
    for(let j=0; j<i; j++) {
      // 현재 키가 더 작으면 앞에 와야하므로 그 뒤는 한발씩 물러나야 한다.
      // 따라서 현재 키보다 큰 키의 개수를 세주면 된다.
      if(curHeight < heightList[j]) {
        stepBackCount++;
      }
    }
  }
  
  return stepBackCount;
};

solution();