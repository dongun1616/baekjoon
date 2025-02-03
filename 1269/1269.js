//대칭 차집합 해쉬
//두 배열이 주어지고 서로의 차집합 갯수의 합을 구하는 함수
function solution(arr1, arr2) {
    //Set()을 활용해 빠르게 저장
    const setA = new Set(arr1);
    const setB = new Set(arr2);

    //대칭 차집합으로 한번에 반환
    const result = [
        ...arr1.filter(el => !setB.has(el)),
        ...arr2.filter(el => !setA.has(el))
    ]
    //대칭 차집합의 합 반환
    return result.length;
}

console.log(solution([1, 2, 4], [2, 3, 4, 5, 6]))