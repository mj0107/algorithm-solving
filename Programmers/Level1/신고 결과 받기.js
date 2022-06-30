function solution(id_list, report, k) {
  // Set()으로 중복 제거
  const report_info = [...new Set(report)].map(el => el.split(' '));

  // 신고당한 횟수 저장
  const reported_cnt = new Map();
  for (const report of report_info) {
    // 신고당했으면 cnt+1 해주고, 값이 초기화 되어 있지 않으면 1로 초기화
    reported_cnt.set(report[1], reported_cnt.get(report[1]) + 1 || 1);
  }

  // k번 이상 신고당한 id 저장
  const received = new Map();
  for (const report of report_info) {
    // 신고당한 횟수가 k 이상이면,
    if (reported_cnt.get(report[1]) >= k) {
      // 신고자 cnt+1
      received.set(report[0], received.get(report[0]) + 1 || 1);
    }
  }

  const result = id_list.map((el) => received.get(el) || 0);
  return result;
}