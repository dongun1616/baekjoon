//정렬
//응시자 수 N과 상을 받는 사람 수 k가 주어지면 상을 받는 커트라인 함수
function solution(arr, k) {
    //해당 배열을 내림차순으로 정렬
    arr.sort((a, b) => b - a);
    return arr[k - 1]
}

console.log(solution([100, 76, 85, 93, 98], 2))