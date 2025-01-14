//브루트 포스 알고리즘
//종말의 영화 제목
function solution(n) {
    let count = 0; // "666"을 포함하는 수를 센다
    let number = 666; // 가장 작은 종말의 수부터 시작

    while (true) {
        if (String(number).includes("666")) {
            count++;
        }

        if (count === n) {
            return number;
        }

        number++;
    }
}

// 예제 입력
console.log(solution(2)); 
