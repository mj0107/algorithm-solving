function solution(cacheSize, cities) {
  let cache = [];
  const [HIT, MISS] = [1, 5];
  let answer = 0;

  cities = cities.map(el => el.toLowerCase());

  for(const CITY of cities) {
    // 캐시에 이미 있다면
    if(cache.includes(CITY)) {
      answer += HIT;
      cache.splice(cache.indexOf(CITY), 1);
    }
    // 캐시에 없다면
    else answer += 5;

    cache.push(CITY);

    // 캐시 사이즈가 넘어간다면 맨 앞 삭제
    if(cache.length > cacheSize) cache.shift();
  }

  return answer;
}