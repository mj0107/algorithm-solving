function solution(m, musicinfos) {
    /**
     * 재생 시간을 계산하는 함수
     * @param {string} start - 시작 시간
     * @param {string} end - 종료 시간
     * @returns {number} - 재생 시간
     */
    const getPlayedMinutes = (start, end) => {
        const [startHours, startMinutes] = start.split(':').map(Number);
        const [endHours, endMinutes] = end.split(':').map(Number);
        
        return (endHours * 60 + endMinutes) - (startHours * 60 + startMinutes);
    }

    /**
     * 악보에서 #을 치환하는 함수
     * @param {string} sheet 
     * @returns {string} - 치환된 악보
     */
    const getSubstitutedSheet = (sheet) => {
        let substitutedSheet = sheet;
        const sharpMap = new Map([
            ['C#', 'c'],
            ['D#', 'd'],
            ['F#', 'f'],
            ['G#', 'g'],
            ['A#', 'a'],
            ['B#', 'b'] // 주의! 문제에서 주어진 악보에는 B#이 없다.
        ]);
        
        for(const [key, value] of sharpMap) {
            substitutedSheet = substitutedSheet.replaceAll(key, value);
        }
        
        return substitutedSheet;
    }
    
    const matchedMusicInfoList = [];
    for(const musicInfo of musicinfos) {
        const [start, end, title, sheet] = musicInfo.split(',');
        
        const substitutedSheet = getSubstitutedSheet(sheet);
        const substitutedM = getSubstitutedSheet(m);
        
        const playedMinutes = getPlayedMinutes(start, end);
        const repeatCount = Math.ceil(playedMinutes / substitutedSheet.length);
        const playedMelody = substitutedSheet.repeat(repeatCount).slice(0, playedMinutes);
        
        // 재생된 멜로디에 찾고자 하는 멜로디가 포함되어 있는지 확인한다.
        if(playedMelody.includes(substitutedM)) {
            matchedMusicInfoList.push({title, playedMinutes});
        }
    }
    
    if(matchedMusicInfoList.length === 0) {
        return '(None)';
    }
    
    matchedMusicInfoList.sort((a, b) => b.playedMinutes - a.playedMinutes);
    
    const title = matchedMusicInfoList[0].title;
    
    return title;
}