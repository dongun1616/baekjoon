//정렬
//수가 주어지면 해당 수의 각 자리수를 내림차순으로 정렬하는 함수
function solution(n) {
    //수 배열 선언
    let nums = [];
    while (n) {
        nums.unshift(n % 10);
        n = Math.floor(n / 10);
    }
    nums.sort((a, b) => (b - a));
    n = parseInt(nums.join(''), 10); // 문자열로 합친 뒤 숫자로 변환
    return n // 4321
}

solution(2314)