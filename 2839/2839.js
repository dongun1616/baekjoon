//브루트 포스 알고리즘
//설탕배달 함수(가장 적은 수의 봉지를 배달)
function solution(n) {
    //봉지 개수 선언
    let count = 0;

    //큰봉지 순회
    while (n > 0) {
        if (n % 5 === 0) {
            n -= 5;
        } else {
            n -= 3;
        }
        count++;
    }
    return n === 0 ? count : -1;
}

console.log(solution(8))