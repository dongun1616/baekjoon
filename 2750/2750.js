//수 정렬하기
//버블 정렬 활용
function solution(arr) {
    //스왑을 확인하는 불리언
    let noSwap = true;
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                noSwap = false;
            }
        }
        if (noSwap) break; //스왑을 안했을경우
    }
    return arr;
}

console.log(solution([5, 5, 2, 3, 4, 1]))