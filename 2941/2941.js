//주어진 문자열에서 크로아티아 알파벳이 몇개인지 세는 함수
let croatia = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

function solution(input) {
    for (let alphabet of croatia) {
        input = input.split(alphabet).join("Q");
    }

    return input.length; // return input일 경우 QeQQak를 반환한다.
}

console.log(solution(input));