//연속해서 나타나는 경우의 그룹 단어의 개수를 출력하는 함수
function solution(words) {
    let count = 0;
    N = words.length

    for (let word of words) {
        let seen = new Set(); // 이미 본 문자 저장
        let isGroupWord = true;

        for (let i = 0; i < word.length; i++) {
            const char = word[i];

            // 문자가 새로 나왔고, 이전 문자와 다르다면 그룹 단어가 아님
            if (seen.has(char) && word[i - 1] !== char) {
                isGroupWord = false;
                break;
            }

            // 문자 기록
            seen.add(char);
        }

        if (isGroupWord) count++;
    }

    return count;
}

const input = ["happy", "new", "year"];
console.log(solution(input));