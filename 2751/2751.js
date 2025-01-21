//정렬
//N개의 수가 주어졌을 때, 오름차순으로 정렬하는 함수
function solution(N) {
    N.sort((a, b) => (a - b))
    return N
}

console.log(solution([5, 5, 3, 2, 1, 5, 2, 3, 4, 10]))