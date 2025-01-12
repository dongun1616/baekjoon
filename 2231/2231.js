//브루트 포스 알고리즘
//분해합 가장 작은 생성자 찾는 함수
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();
const n = parseInt(input)

function solution(n) {
    // 각 자리수의 최대 합을 구해 시작 범위 제한
    const start = Math.max(1, n - String(n).length * 9);

    for (let m = start; m < n; m++) {
        // 생성자 조건 확인: m + 각 자리수 합 = n
        const sum = m + String(m).split("").reduce((acc, digit) => acc + Number(digit), 0);
        if (sum === n) {
            return m; // 가장 작은 생성자
        }
    }

    return 0; // 생성자가 없는 경우
}

// 예제 실행
console.log(solution(256));
console.log(solution(216));
console.log(solution(1));  
