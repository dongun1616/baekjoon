//대표값
//평균과 중간값 찾는 함수
function solution(arr) {
    //오름차순으로 정렬
    arr.sort((a, b) => a - b);
    //중간값 선언
    let mid = Math.floor((arr.length / 2))
    //총 합 변순
    let sum = 0;

    //평균 계산
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    let avg = sum / arr.length;

    return [avg, arr[mid]]
}
console.log(solution([30, 40, 10, 30, 60]))