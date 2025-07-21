class Person {
  constructor(referral, name, cost) {
    this.referral = referral; // 내가 추천한 사람
    this.referee = []; // 나를 추천한 사람들
    this.name = name;
    this.cost = cost;
  }
}

class Pyramid {
  constructor() {
    this.root = new Person(null, 'center', 0);
    this.personMap = new Map();
    this.personMap.set('center', this.root);
  }

  insert(name, referralName) {
    let refferal;

    if (referralName === '-') {
      refferal = this.root;
    } else {
      refferal = this.personMap.get(referralName);
    }

    const newPerson = new Person(refferal, name, 0);
    refferal.referee.push(newPerson);

    this.personMap.set(name, newPerson);
  }

  setCost(name, cost) {
    if (cost < 1) {
      return;
    }

    const seller = this.personMap.get(name);

    if (seller.name === 'center') {
      return;
    }

    const share = Math.floor(cost * 0.1);
    const rest = cost - share;

    seller.cost += rest;

    if (seller.referral) {
      this.setCost(seller.referral.name, share);
    }
  }

  getReferral(name) {
    return this.personMap.get(name).referral;
  }
}

/**
 * 다단계 칫솔 판매
 * @param {string[]} enroll
 * @param {string[]} referral
 * @param {string[]} seller
 * @param {number[]} amount
 * @returns {number[]}
 *
 * @constraints
 * [enroll 배열]
 * - 길이: 1 이상 10,000 이하
 * - 민호의 이름은 없음 (민호를 제외한 조직 구성원의 총 수)
 * - 조직에 참여한 순서에 따라 정렬됨
 * - 모든 이름: 10글자 이내의 영문 소문자
 *
 * [referral 배열]
 * - 길이: enroll의 길이와 같음
 * - i번째 원소: enroll[i]를 조직에 참여시킨 추천인의 이름
 * - 추천인이 없는 경우: "-"로 표시
 * - referral[i]는 이미 enroll의 j번째(j < i)에 등장한 이름임이 보장
 *
 * [seller 배열]
 * - 길이: 1 이상 100,000 이하
 * - i번째 원소: i번째 판매 집계 데이터의 판매원 이름
 * - 같은 이름이 중복될 수 있음
 *
 * [amount 배열]
 * - 길이: seller의 길이와 같음
 * - i번째 원소: i번째 판매 집계 데이터의 판매량
 * - 각 원소의 범위: 1 이상 100 이하의 자연수
 *
 * [기타]
 * - 칫솔 한 개당 이익: 100원
 */
function solution(enroll, referral, seller, amount) {
  const PER_COST = 100;

  const pyramid = new Pyramid();

  // 조직 구성
  for (let i = 0; i < enroll.length; i++) {
    const enrollName = enroll[i];
    const referralName = referral[i];

    pyramid.insert(enrollName, referralName);
  }

  // 판매 집계
  for (let i = 0; i < seller.length; i++) {
    const sellerName = seller[i];
    const cost = amount[i] * PER_COST;

    pyramid.setCost(sellerName, cost);
  }

  // 결과 계산
  const result = [];
  for (let i = 0; i < enroll.length; i++) {
    const totalCost = pyramid.personMap.get(enroll[i]).cost;
    result.push(totalCost);
  }

  return result;
}
