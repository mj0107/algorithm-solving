function solution(r1, r2) {
  let count = 0;

  for (let x = 1; x <= r2; x++) {
    let y1 = Math.ceil(Math.sqrt(r1 * r1 - x * x));
    let y2 = Math.floor(Math.sqrt(r2 * r2 - x * x));

    if (x > r1) y1 = 0;

    count += y2 - y1 + 1;
  }

  return count * 4;
}
