const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const T = +input.shift();
const stringList = input;

const PALINDROME = 0;
const PSEUDO_PALINDROME = 1;
const ETC = 2;

function solution() {
  const result = stringList.map((string) => {
    let left = 0;
    let right = string.length - 1;

    while (left < right) {
      // 왼쪽 포인터가 가리키는 문자와 오른쪽 포인터가 가리키는 문자가 같지 않을때,
      if (string[left] !== string[right]) {
        // 왼쪽 포인터를 오른쪽으로 한 칸 옮겨서 회문 검사를 한다.
        // 만약 회문이면 유사 회문이다.
        if (isPalindrome(string, left + 1, right)) {
          return PSEUDO_PALINDROME;
        }
        // 오른쪽 포인터를 왼쪽으로 한 칸 옮겨서 회문 검사를 한다.
        // 만약 회문이면 유사 회문이다.
        if (isPalindrome(string, left, right - 1)) {
          return PSEUDO_PALINDROME;
        }

        // 유사 회문도 아닌 경우
        return ETC;
      }

      left++;
      right--;
    }

    return PALINDROME;
  });

  console.log(result.join('\n'));
}

/**
 * 주어진 문자열이 회문인지 검사하는 함수
 *
 * @param {string} string 검사할 문자열
 * @param {number} left 왼쪽 포인터의 시작 위치
 * @param {number} right 오른쪽 포인터의 시작 위치
 * @returns {boolean} 회문이면 true, 아니면 false를 반환
 */
function isPalindrome(string, left, right) {
  while (left < right) {
    if (string[left] !== string[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

solution();
