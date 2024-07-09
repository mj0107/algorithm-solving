function solution(book_time) {
  /**
   * 시간 문자열을 분으로 바꿔주는 함수이다.
   *
   * @param {string} time hh:mm 형식의 시간 문자열
   * @returns 분으로 치환한 정수
   */
  const covertToMinutes = (time) => {
    const [hours, minutes] = time.split(':').map(Number);

    return hours * 60 + minutes;
  };

  const bookMinuteList = [...book_time].map((time) => {
    const [start, end] = time;

    // 정리 시간 10분까지 미리 더해준다.
    return [covertToMinutes(start), covertToMinutes(end) + 10];
  });

  // 시작 시간 기준으로 오름차순 정렬한다.
  bookMinuteList.sort((a, b) => a[0] - b[0]);

  const roomList = [];
  for (const [start, end] of bookMinuteList) {
    // 비어있는 방의 인덱스를 찾는다.
    const emptyRoomIndex = roomList.findIndex((room) => room <= start);

    // 만약 비어있는 방이 없다면 새로운 방을 추가한다.
    if (emptyRoomIndex === -1) {
      roomList.push(end);
    } else {
      // 만약 방이 있다면, 퇴실 시간을 갱신한다.
      roomList[emptyRoomIndex] = end;
    }
  }

  return roomList.length;
}
