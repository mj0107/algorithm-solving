function solution(brown, yellow) {
  let answer = [];

  const totalArea = brown + yellow;

  for (let row = 1; row < totalArea; row++) {
    if (totalArea % row !== 0) continue;

    let col = totalArea / row;

    if (row < col) continue;

    let yellowRow = row - 2;
    let yellowCol = col - 2;
    let yellowArea = yellowRow * yellowCol;

    let brownArea = totalArea - yellowArea;

    if (brownArea === brown && yellowArea === yellow) {
      answer.push(row);
      answer.push(col);
    }
  }

  return answer;
}
