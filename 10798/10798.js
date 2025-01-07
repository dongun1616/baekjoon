//알파벳 대문자 소문자 숫자를 다섯줄을 입력해서 세로로 읽어 한단어로 출력하는 함수
function solution(input) {
    //최대 길이 선언, 일반 길이 선언
    let len = input.map(x => x.length);
    let maxLen = Math.max(...len);
    //결과 단어 선언
    let word = '';
    //세로로 읽을수 있도록 순회
    for (let i = 0; i < maxLen; i++) {
        for (let j = 0; j < input.length; j++) {
            word += input[j][i] ?? ''
        }
    }
    return word;
}

let input = [
    'AABCDD',
    'afzz',
    '09121',
    'a8EWg6',
    'P5h3kx'
]

console.log(solution(input))