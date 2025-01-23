//정렬
//길이가 짧고 길이가 같으면 사전순으로 단어들을 정렬하는 함수
function solution(arr) {
    //중복 제거
    arr = [...new Set(input)]
    //정렬
    arr.sort((a, b) => a.localeCompare(b));
    arr.sort((a, b) => a.length - b.length);

    return arr;
}

const input = [
    'but',
    'i',
    'wont',
    'hesitate',
    'no',
    'more',
    'no',
    'more',
    'it',
    'cannot',
    'wait',
    'im',
    'yours'
]

console.log(solution(input))