function solution(t, p) {
  let cnt = 0;
  const LEN_P = p.length;

  let start = 0;
  let end = LEN_P;
  let subString = '';
  for(let i=0; i<=t.length-LEN_P; i+=1) {
    subString = t.slice(start, end);

    if(parseInt(subString) <= parseInt(p)) cnt += 1;

    start += 1;
    end += 1;
  }

  return cnt;
}