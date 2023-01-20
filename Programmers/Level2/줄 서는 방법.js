function getPermutationList(numberList, n) {
  let result = [];

  if(n === 1) return numberList.map((el) => [el]);

  numberList.forEach((fixed, index) => {
    const REST = [...numberList.slice(0 ,index), ...numberList.slice(index + 1)];
    const PERMUTATION = getPermutationList(REST, n - 1);
    const ATTACHED = PERMUTATION.map((el) => [fixed, ...el]);

    result.push(...ATTACHED);
  });

  return result;
}

function solution(n, k) {
  let numberList = [];
  for(let i=1; i<=n; i+=1) {
    numberList.push(i);
  }

  const PERMUTATION_LIST = getPermutationList(numberList, n);

  let result = PERMUTATION_LIST.at(k - 1);
  return result;
}

const result = solution(3, 5);
console.log(result);