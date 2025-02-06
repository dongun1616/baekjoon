//스택
//올바른 괄호가 맞는지 확인하는 함수
function checkParentheses(arr) {
    return arr.map(s => isValidParentheses(s) ? "YES" : "NO");
}

function isValidParentheses(s) {
    const stack = [];

    for (let char of s) {
        if (char === '(') {
            stack.push(char);
        } else {
            if (stack.length === 0) {
                return false;
            }
            stack.pop();
        }
    }

    return stack.length === 0;
}

// 테스트 실행
let input = [
    '(())())',
    '(((()())()',
    '(()())((()))',
    '((()()(()))(((())))()',
    '()()()()(()()())()',
    '(()((())()('
];

console.log(checkParentheses(input).join("\n"));
