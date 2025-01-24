//정렬
//나이순 대로 정렬하고 나이가 같으면 이름 사전순으로 정렬하는 함수
function solution(arr) {
    const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

    const len = input.shift();

    input.sort((a, b) => a.split(" ")[0] - b.split(" ")[0]);

    console.log(input.join("\n"));
}
