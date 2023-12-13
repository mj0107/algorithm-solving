const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, K] = input.shift().split(' ').map(Number);
const infoList = input.map(row => row.split(' ').map(Number));

const solution = () => {
  // 조건에 맞게 정렬한다.
  infoList.sort((a, b) => {
    const country1 = { gold: a[1], silver: a[2], bronze: a[3] };
    const country2 = { gold: b[1], silver: b[2], bronze: b[3] };

    if(country1.gold !== country2.gold) {
      return country2.gold - country1.gold;
    }
    if(country1.silver !== country2.silver) {
      return country2.silver - country1.silver;
    }
    return country2.bronze - country1.bronze;
  });

  let rank = 1;

  // 만약 K가 정렬된 리스트의 첫번째 나라라면, 1등을 출력하고 바로 끝낸다.
  if(infoList[0][0] === K) {
    console.log(rank);
    return;
  }

  for(let i=1; i<N; i++) {
    const [prevCountry, prevGold, prevSilver, prevBronze] = infoList[i-1];
    const [curCountry, curGold, curSilver, curBronze] = infoList[i];

    // 전 인덱스의 나라의 메달 개수가 현재 인덱스의 나라의 메달 개수보다 많으면,
    // 순위를 (현재 인덱스 + 1)로 해준다.
    // (현재 인덱스 + 1)로 해주는 이유는, 공동 2등이 있을 경우, 그 다음은 3등이 아니라 4등이기 때문이다.
    if(prevGold > curGold) rank = i + 1;
    else if(prevSilver > curSilver) rank = i + 1;
    else if(prevBronze > curBronze) rank = i + 1;

    // 현재 인덱스의 나라가 구하려는 나라라면, 순위를 출력해주고 끝낸다.
    if(curCountry === K) {
      console.log(rank);
      break;
    }

    // 만약 전의 인덱스의 나라와 메달 개수가 같다면,
    // 같은 순위이므로 rank를 더해주지 않고 다음 반복으로 넘어간다.
  }
};

solution();