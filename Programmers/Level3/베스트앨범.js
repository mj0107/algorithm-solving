const infoObj = {};
const playOfGenre = {};
let result = [];

function solution(genres, plays) {
  const length = genres.length;

  /**
   * 곡별 정보들을 객체로 만드는 함수
   */
  const getInfo = () => {
    for (let i = 0; i < length; i++) {
      const genre = genres[i];
      const play = plays[i];

      infoObj[i] = { genre, play };
    }
  };

  /**
   * 장르별 재생 횟수를 구하는 함수
   */
  const getPlayOfGenres = () => {
    for (const { genre, play } of Object.values(infoObj)) {
      playOfGenre[genre] = playOfGenre[genre] + play || play;
    }
  };

  /**
   * 많이 재생된 장르를 먼저 수록하는 함수
   */
  const getSortedObjByMostPlayedGenre = () => {
    const sortedByMostPlay = Object.entries(playOfGenre).sort(
      (a, b) => b[1] - a[1]
    );

    for (const [genre, _] of sortedByMostPlay) {
      const sortedList = [];
      for (let i = 0; i < length; i++) {
        if (genre === genres[i]) {
          sortedList.push({ index: i, genre, play: plays[i] });
        }
      }
      // 장르 내에서 많이 재생된 노래 먼저 수록
      result = [
        ...result,
        ...sortedList.sort((a, b) => b.play - a.play).slice(0, 2),
      ];
    }
  };

  /**
   * 장르 내에서 재생 횟수가 같은 노래 중에서 고유 번호가 낮은 노래를 먼저 수록하는 함수
   */
  const getSortedObjByLowerIndexInSamePlayOfSameGenre = () => {
    result.sort((a, b) => {
      if (a.genre !== b.genre) {
        return 1;
      } else if (a.play === b.genre) {
        return a.index - b.index;
      }
    });
  };

  const getResult = () => {
    result = result.map((el) => el.index);
  };

  getInfo();
  getPlayOfGenres();
  getSortedObjByMostPlayedGenre();
  getSortedObjByLowerIndexInSamePlayOfSameGenre();
  getResult();

  return result;
}
