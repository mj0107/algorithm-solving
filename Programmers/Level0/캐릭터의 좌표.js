function solution(keyinput, board) {
  const [MAX_WIDTH, MAX_HEIGHT] = board;
  let moveObj = {
    "left": [-1, 0],
    "right": [1, 0],
    "up": [0, 1],
    "down": [0, -1]
  };

  let cur = [0, 0];
  for(let input of keyinput) {
    const [MOVE_COL, MOVE_ROW] = moveObj[input];
    const [CUR_COL, CUR_ROW] = cur;
    const [NEXT_ROW, NEXT_COL] = [CUR_ROW + MOVE_ROW, CUR_COL + MOVE_COL];

    if(Math.abs(NEXT_COL) > Math.floor(MAX_WIDTH / 2)) continue;
    if(Math.abs(NEXT_ROW) > Math.floor(MAX_HEIGHT / 2)) continue;

    cur = [NEXT_COL, NEXT_ROW];
  }

  return cur;
}