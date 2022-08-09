function solution(places) {
  let answer = places.map(place => {
      // some은 빈배열일 경우 false, 하나라도 true일 경우 true return
      return place.some((row, rowIndex) => {
          // false일 경우 거리두기 o
          return row.split('').some((col, colIndex, arr) => {
              // 가림막이 있을경우 거리두기 o
              if(col === 'X') return false;
              
              // 사방에 응시자가 몇명 있는지 확인
              const check = [
                  (place[rowIndex - 1] || '').charAt(colIndex), // 상
                  (place[rowIndex + 1] || '').charAt(colIndex), // 하
                  arr[colIndex - 1] || '', // 좌
                  arr[colIndex + 1] || '', // 우
              ].filter(el => el === 'P').length;
              
              return (col === 'P' && check >= 1 || col === 'O' && check >= 2)
          });
      }) ? 0 : 1;
  });  
  
  return answer;
}