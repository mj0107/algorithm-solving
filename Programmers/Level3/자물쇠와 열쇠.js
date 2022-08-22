function verification(key, r, c, lock) {
  // 깊은 복사
  let lock_copy = JSON.parse(JSON.stringify(lock));
  const len = lock_copy.length;

  // 키의 돌기부분 보다 자물쇠의 홈 부분이 더 많을 경우
  const key_teeth = key.flat().filter((el) => el === 1).length; // 키의 돌기부분의 갯수
  let lock_notch = lock.flat().filter((el) => el === 0).length; // 자물쇠의 홈의 갯수

  if (key_teeth < lock_notch) return false;

  for (let i = 0; i < key.length; i++) {
    for (let j = 0; j < key.length; j++) {
      // 범위 체크, 자물쇠의 범위를 벗어난것은 영향을 주지않음
      if (i + r >= len || j + c >= len || i + r < 0 || j + c < 0) continue;
      // 열쇠가 이동한 위치에 자물쇠가 막혀있을 경우
      if (lock_copy[i + r][j + c] && key[i][j]) return false;
      // 열쇠가 이동한 위치가 자물쇠의 홈 부분일 경우
      // 1로 채워줌
      if (!lock_copy[i + r][j + c] && key[i][j]) lock_copy[i + r][j + c] = 1;
    }
  }

  // 자물쇠에 홈이 채워지지 않은 경우 false
  lock_notch = lock_copy.flat().filter((el) => el === 0).length; // 자물쇠의 홈의 갯수
  if (lock_notch > 0) return false;

  return true;
}

// 오른쪽으로 90도 회전
function rotate(key) {
  // 깊은 복사
  let key_copy = JSON.parse(JSON.stringify(key));

  for (let i = 0; i < key.length; i++) {
    for (let j = 0; j < key.length; j++) {
      key[i][j] = key_copy[key.length - j - 1][i];
    }
  }
}

function solution(key, lock) {
  let result = false;

  for (let rotate_cnt = 1; rotate_cnt <= 4; rotate_cnt++) {
    rotate(key);

    for (let i = -lock.length; i < lock.length; i++) {
      for (let j = -lock.length; j < lock.length; j++) {
        result = result || verification(key, i, j, lock);
      }
    }
  }

  return result;
}
