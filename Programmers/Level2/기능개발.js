function solution(progresses, speeds) {
  let answer = [];
  let deployment = 0;

  while (progresses.length) {
    for (let i = 0; i < progresses.length; i++) {
      progresses[i] += speeds[i];
    }

    while (true) {
      if (progresses[0] >= 100) {
        progresses.shift();
        speeds.shift();
        deployment++;
      }
      else {
        if (deployment) {
          answer.push(deployment);
        }
        deployment = 0;
        break;
      }
    }
  }

  return answer;
}