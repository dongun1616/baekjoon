//해시
//회사에 있는 사람을 반환하는 함수
function solution(n, records) {
    let employees = new Map();

    records.forEach(record => {
        const [name, action] = record.split(' ');
        if (action === "enter") {
            employees.set(name, true);
        } else if (action === "leave") {
            employees.delete(name);
        }
    });

    return Array.from(employees.keys()).sort().reverse().join("\n");
}

// 예제 입력
const n = 4;
const records = [
    "Baha enter",
    "Askar enter",
    "Baha leave",
    "Artem enter"
];

console.log(solution(n, records));
