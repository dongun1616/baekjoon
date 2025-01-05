//전공평점을 계산해주는 함수
//전공평점은 전공과목별 (학점 × 과목평점)의 합을 학점의 총합으로 나눈 값
// 등급별 점수 매핑 객체
const gradePoints = {
    "A+": 4.5,
    "A0": 4.0,
    "B+": 3.5,
    "B0": 3.0,
    "C+": 2.5,
    "C0": 2.0,
    "D+": 1.5,
    "D0": 1.0,
    "F": 0.0
};

function solution(input) {
    let totalPoints = 0; // (학점 × 평점)의 총합
    let totalCredits = 0; // 학점의 총합

    // 입력 데이터를 줄 단위로 처리
    const lines = input.trim().split("\n");

    for (const line of lines) {
        // 과목명, 학점, 등급으로 분리
        const [course, creditStr, grade] = line.split(" ");
        const credit = parseFloat(creditStr);

        // P 과목은 계산에서 제외
        if (grade === "P") continue;

        // 총점 계산 (학점 × 평점)
        totalPoints += credit * gradePoints[grade];

        // 학점 합산
        totalCredits += credit;
    }

    // 전공평점 계산
    const gpa = totalPoints / totalCredits;

    // 소수점 6자리까지 출력
    return gpa.toFixed(6);
}

// 예제 입력
const input = `ObjectOrientedProgramming1 3.0 A+
IntroductiontoComputerEngineering 3.0 A+
ObjectOrientedProgramming2 3.0 A0
CreativeComputerEngineeringDesign 3.0 A+
AssemblyLanguage 3.0 A+
InternetProgramming 3.0 B0
ApplicationProgramminginJava 3.0 A0
SystemProgramming 3.0 B0
OperatingSystem 3.0 B0
WirelessCommunicationsandNetworking 3.0 C+
LogicCircuits 3.0 B0
DataStructure 4.0 A+
MicroprocessorApplication 3.0 B+
EmbeddedSoftware 3.0 C0
ComputerSecurity 3.0 D+
Database 3.0 C+
Algorithm 3.0 B0
CapstoneDesigninCSE 3.0 B+
CompilerDesign 3.0 D0
ProblemSolving 4.0 P`;

// 결과 출력
console.log(solution(input));
