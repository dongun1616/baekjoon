//스택
//5가지 명령을 가진 스택을 구현하자.
const fs = require('fs');

function solution(input) {
    const result = [];
    const stack = [];

    input.forEach((line) => {
        //1 X: 정수 X를 스택에 넣는다. (1 ≤ X ≤ 100,000)
        if (line.length !== 1) {
            const target = Number(line.split(" ")[1]);
            stack.push(target);
        } else {
            //2: 스택에 정수가 있다면 맨 위의 정수를 빼고 출력한다. 없다면 -1을 대신 출력한다.
            const num = Number(line);
            if (num === 2) {
                result.push(stack.length ? stack.pop() : -1);
            } //3: 스택에 들어있는 정수의 개수를 출력한다.
            else if (num === 3) {
                result.push(stack.length);
            } //4: 스택이 비어있으면 1, 아니면 0을 출력한다.
            else if (num === 4) {
                result.push(stack.length ? 0 : 1);
            } //5: 스택에 정수가 있다면 맨 위의 정수를 출력한다. 없다면 -1을 대신 출력한다.
            else if (num === 5) {
                result.push(stack.length ? stack.at(-1) : -1);
            }
        }
    });

    return result;
}
const testInput = [
    '4',
    '1 3',
    '1 5',
    '3',
    '2',
    '5',
    '2',
    '2',
    '5'
];

console.log(solution(testInput).join("\n"));

// ✅ 백준 환경에서 입력 받기
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
