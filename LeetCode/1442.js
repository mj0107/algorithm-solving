/**
 * @param {number[]} arr
 * @return {number}
 */
const countTriplets = (arr) => {
  const len = arr.length;
  const prefix = Array.from({ length: len + 1 }, () => 0);

  // prefix[i + 1] = arr[0] ^ ... ^ arr[i]
  for (let i = 0; i < len; i++) {
    prefix[i + 1] = prefix[i] ^ arr[i];
  }

  let count = 0;
  for (let i = 0; i < len; i++) {
    for (let k = i + 1; k < len; k++) {
      /*
      만약 i-1까지의 XOR 결과와 k까지의 XOR 결과가 같다면,
      그 사이에 존재하는 j는 모두 답이된다.

      arr[0] ^ ... ^ arr[i-1] = arr[0] ^ ... ^ arr[k]

      같은 부분을 제거하면 다음과 같이 된다.
      arr[i] ^ ... ^ arr[k] = 0 (*)

      j를 사용하면 다음과 같이 나타낼 수 있다.
      arr[i] ^ arr[i+1] ^ ... ^ arr[j-1] = arr[j] ^ arr[j+1] ^ ... ^ arr[k]

      약간의 설명을 덧붙이자면, XOR은 비교하는 두 값이 같으면 0이 된다.
      따라서 0 ~ j-1까지 XOR을 한 것과,
      j ~ k까지 XOR을 한 것이 같다면,
      둘이 XOR을 할 경우 0이된다.
      이것은 결국 붙여쓰면 위의 (*) 라인과 같이 된다.
      */

      // i초과, k이하인 j의 개수를 센다.
      if (prefix[i] === prefix[k + 1]) {
        count += k - i;
      }
    }
  }

  return count;
};
