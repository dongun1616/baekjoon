//행렬안에 최대값 찾는 함수
function solution(input) {
    let max = -1; // 최댓값 초기화
    let row = 0, col = 0; // 최댓값의 위치 초기화

    // 이중 루프를 통해 격자를 순회
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (input[i][j] > max) {
                max = input[i][j];
                row = i + 1; // 1-based index
                col = j + 1; // 1-based index
            }
        }
    }

    // 결과 출력
    console.log(max);
    console.log(row, col);
}

// 예제 입력
const input = [
    [3, 23, 85, 34, 17, 74, 25, 52, 65],
    [10, 7, 39, 42, 88, 52, 14, 72, 63],
    [87, 42, 18, 78, 53, 45, 18, 84, 53],
    [34, 28, 64, 85, 12, 16, 75, 36, 55],
    [21, 77, 45, 35, 28, 75, 90, 76, 1],
    [25, 87, 65, 15, 28, 11, 37, 28, 74],
    [65, 27, 75, 41, 7, 89, 78, 64, 39],
    [47, 47, 70, 45, 23, 65, 3, 41, 44],
    [87, 13, 82, 38, 31, 12, 29, 29, 80]
];

// 함수 실행
solution(input);