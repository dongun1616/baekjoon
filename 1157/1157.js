//알파벳이 주어지면 가장 많이 사용된 알파벳이 무엇인지 알아내는 함수
//빈도수 세기
function solution(word) {
    //word 대문자 변환
    word = word.toUpperCase()
    //카운팅 하는 객체 생성
    let frequency = {};
    //카운팅
    for (let char of word) {
        frequency[char] = (frequency[char] || 0) + 1;
    }
    //최대 빈도수 변수
    let maxFrequency = 0;
    //결과 변수
    let result = '';
    //빈도수 가장 많은것을 순회하며 탐색
    for (let char in frequency) {
        if (frequency[char] > maxFrequency) {
            maxFrequency = frequency[char];
            result = char;
        } else if (frequency[char] === maxFrequency) {
            result = '?'; // 최대값이 중복되는 경우
        }
    }
    return result;
}

console.log(solution('zza'))