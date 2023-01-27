function solution(elements) {
  const ELEMENTS_LEN = elements.length;
  let sumSet = new Set();

  let [start, end] = [0, 0];
  for (let i = 1; i <= ELEMENTS_LEN; i += 1) {
    const PART_SEQUENCE_LEN = i;
    let sum = 0;
    for (let j = 0; j < ELEMENTS_LEN; j += 1) {
      [start, end] = [j, j + PART_SEQUENCE_LEN];

      sum = 0;
      for (let k = start; k < end; k += 1) {
        sum += elements[k % ELEMENTS_LEN];
      }

      sumSet.add(sum);
    }
  }

  let result = sumSet.size;
  return result;
}
