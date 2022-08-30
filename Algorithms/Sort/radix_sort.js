// 뒤에서 idx 번째 자릿수를 얻는 함수
function getDigit(num, idx) {
  // return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
  return Number(String(num).at(-(idx + 1))) || 0;
}

// 숫자의 자릿수가 몇인지 return 하는 함수
function digitCount(num) {
  if (num === 0) return 1;
  // return Math.floor(Math.log10(Math.abs(num))) + 1;
  return String(num).length;
}

// 가장 큰 자릿수를 찾는 함수
function mostDigit(nums) {
  let max = 0;
  for (const num of nums) {
    max = Math.max(max, digitCount(num));
  }

  return max;
}

function radixSort(nums) {
  const max = mostDigit(nums);

  for (let k = 0; k < max; k++) {
    let digit_buckets = Array.from({ length: 10 }, () => []);

    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digit_buckets[digit].push(nums[i]);
    }

    nums = [].concat(...digit_buckets);
  }

  return nums;
}

const arr = [3, 6, 13, 4, 33, 12, 35, 87, 6, 64];

console.log(radixSort(arr));

/*
[
   3,  4,  6,  6, 12,
  13, 33, 35, 64, 87
]
*/
