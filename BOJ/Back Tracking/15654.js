/* N과 M (5) */
const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const N_LIST = input.shift().split(' ').map(Number);

function solution(N, M, N_LIST) {
  const getPermutation = (N_LIST, M) => {
    let result = [];

    if (M === 1) return N_LIST.map((el) => [el]);

    N_LIST.forEach((fixed, idx) => {
      let rest = [...N_LIST.slice(0, idx), ...N_LIST.slice(idx + 1)];
      let combinationList = getPermutation(rest, M - 1);
      let attached = combinationList.map((el) => [fixed, ...el]);

      result.push(...attached);
    });

    return result;
  };

  const SORTED_N_LIST = [...N_LIST].sort((a, b) => a - b);
  
  let result = getPermutation(SORTED_N_LIST, M);
  result.forEach((el) => {
    console.log(el.join(' '));
  });
}

solution(N, M, N_LIST);
