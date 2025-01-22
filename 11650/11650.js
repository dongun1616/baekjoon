//정렬
function sortPoints(points) {
    // x 좌표 우선, x 좌표가 같으면 y 좌표 기준 정렬
    points.sort((a, b) => {
        if (a[0] === b[0]) {
            return a[1] - b[1]; // x가 같으면 y를 기준으로 오름차순 정렬
        }
        return a[0] - b[0]; // x를 기준으로 오름차순 정렬
    });
    return points;
}

// 입력 처리
const input = `5
3 4
1 1
1 -1
2 2
3 3`.split('\n'); // 입력 예제

const N = parseInt(input[0]); // 점의 개수
const points = input.slice(1, N + 1).map(line => line.split(' ').map(Number));

// 정렬 수행
const sortedPoints = sortPoints(points);

// 결과 출력
sortedPoints.forEach(([x, y]) => console.log(x, y));