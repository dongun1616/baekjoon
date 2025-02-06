//스택
//수를 입력하면 해당 수를 스택에 추가하고 0을 입력하면 최근수를 제거하는 함수
function solution(arr) {
    //합 변수
    let sum = 0;
    //스택 변수
    let stack = [];

    //순회하며 스택처리
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            stack.pop();
        }
        else {
            stack.push(arr[i])
        }
    }
    //순회하며 총 합 연산
    for (let j = 0; j < stack.length; j++) {
        sum += stack[j];
    }

    return sum;
}

console.log(solution([1, 3, 5, 4, 0, 0, 7, 0, 0, 6]))