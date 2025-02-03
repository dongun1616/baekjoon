//빈도수
//주어진 숫자들중에 입력한 숫자가 몇개인지 갯수를 세는 함수
function solution(arr1, arr2) {
    // 각 배열의 값들을 카운팅할 객체 생성
    let frequencyCounter = {};
    // arr1의 각 요소를 카운팅 
    for (let val of arr1) {
        frequencyCounter[val] = (frequencyCounter[val] || 0) + 1;
    }
    //해당 타겟 배열 숫자의 빈도수 출력
    return arr2.map(target => frequencyCounter[target] || 0).join(" ");;
}

let input1 = [6, 3, 2, 10, 10, 10, -10, -10, 7, 3]
let input2 = [10, 9, -5, 2, 3, 4, 5, -10]

console.log(solution(input1, input2))