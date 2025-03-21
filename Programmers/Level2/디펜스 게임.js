/**
 * 디펜스 게임
 * @param {number} n 병사의 수
 * @param {number} k 무적권의 수
 * @param {number[]} enemy 적군의 수
 * @returns {number} 디펜스 게임을 몇 라운드까지 막을 수 있는지
 */
function solution(n, k, enemy) {
  const initialSoldierCount = n;
  const initialInvincibilityCount = k;
  const totalRound = enemy.length;

  // 무적권으로 전체 라운드를 막을 수 있을 경우
  if (initialInvincibilityCount >= totalRound) {
    return totalRound;
  }

  let left = 0;
  let right = totalRound;

  // 이분 탐색
  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (
      isPossible(initialSoldierCount, initialInvincibilityCount, enemy, mid)
    ) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return right;
}

/**
 * 최대 라운드까지 막을 수 있는지 확인
 * @param {number} soldierCount 병사의 수
 * @param {number} invincibilityCount 무적권의 수
 * @param {number[]} enemy 적군의 수
 * @param {number} maxRound 최대 라운드
 * @returns {boolean} 최대 라운드까지 막을 수 있는지
 */
function isPossible(soldierCount, invincibilityCount, enemy, maxRound) {
  // 최대 라운드까지 적군의 수를 내림차순으로 정렬
  const sortedEnemyCountList = enemy
    .slice(0, maxRound + 1)
    .sort((a, b) => b - a);

  let remainSoldierCount = soldierCount;
  for (let i = invincibilityCount; i <= maxRound; i++) {
    remainSoldierCount -= sortedEnemyCountList[i];

    if (remainSoldierCount < 0) {
      return false;
    }
  }

  return true;
}
