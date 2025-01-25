//정렬
// 입력 데이터
function solution(input) {
    // 첫 줄 제외한 회원 데이터를 배열로 파싱
    const [_, ...data] = input.split('\n');
    const members = data.map((line) => {
        const [age, name] = line.split(' ');
        return { age: parseInt(age, 10), name };
    });

    // 정렬: 나이 순, 나이가 같으면 입력 순
    members.sort((a, b) => a.age - b.age);

    // 결과 출력 형식으로 변환
    const result = members.map(member => `${member.age} ${member.name}`).join('\n');
    return result;
}
// 테스트
const input = `3
21 Junkyu
21 Dohyun
20 Sunyoung`;
console.log(solution(input));