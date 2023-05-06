/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  let graph = {};
  // 진입 차수
  let inDegree = Array.from({ length: numCourses }, () => 0);

  // [들을 강의, 듣기 위해 선행해야할 강의]
  for (const [COURSE, PREV_COURSE] of prerequisites) {
    if (PREV_COURSE in graph) {
      graph[PREV_COURSE].push(COURSE);
    } else {
      graph[PREV_COURSE] = [COURSE];
    }
    // 들을 강의를 듣기 위해 선행해야할 강의 개수 + 1
    inDegree[COURSE] += 1;
  }

  let queue = [];
  inDegree.forEach((count, course) => {
    // 선행 강의가 0개일경우,
    // 즉 선행강의가 없어도 들을 수 있는 강의, 다른 강의를 듣기위해서만 존재하는 강의
    // 시작 강의
    if (count === 0) {
      queue.push(course);
    }
  });

  let result = [];
  while (queue.length) {
    let course = queue.shift();

    if (course in graph) {
      for (const NEXT_COURSE of graph[course]) {
        // queue에서 꺼낸 현재 강의가 선행 강의가 되는 강의들의 진입 차수 - 1
        inDegree[NEXT_COURSE] -= 1;
        // 진입 차수가 0이 된다면 다음 강의를 알기 위해 queue에 넣어줌
        if (inDegree[NEXT_COURSE] === 0) {
          queue.push(NEXT_COURSE);
        }
      }
    }

    result.push(course);
  }

  // result에 담겨있는 강의들이 총 강의의 개수와 맞지 않을 경우 불가능
  if (numCourses !== result.length) {
    result = [];
  }
  return result;
};
