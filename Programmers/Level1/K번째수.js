// i부터 j까지 자른 배열을 저장 -> 배열 정렬 -> k번째 수 result에 저장

function solution(array, commands) {
  // array는 주어지는 배열
  // commands [[i,j,k], [i,j,k]...] = commands[i번째부터, j번째까지 자른후, 정렬후 k번째]
  const result = [];
  const sortArr = [];
   
  for(let i=0; i<commands.length; i++) {
      let start = commands[i][0] - 1;
      let end = commands[i][1];
      let idx = commands[i][2] - 1;
      
      sortArr[i] = array.slice(start, end);
      sortArr[i].sort((a,b) => a-b);
      result[i] = sortArr[i][idx];
  }
  return result;
}