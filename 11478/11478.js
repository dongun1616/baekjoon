//서로 다른 부분 문자열의 개수
//주어진 문자열의 다른 부분 문자열 개수를 구하는 함수
function solution(str) {
    //분해한 문자열을 저장할 배열
    let substrings = [];

    //슬라이딩 윈도우 방식으로 순회하며 저장
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            substrings.push(str.slice(i, j));
        }
    }

    //Set을 활용해 중복을 제외하고 카운트
    const setStr = new Set(substrings);;
    return setStr.size
}

console.log(solution('ababc'))