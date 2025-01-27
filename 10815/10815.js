//숫자 카드 집합
//주어진 정수들중에 해당 정수들이 있는지 없는지 확인하는 함수
function solution(input) {
    const [n, cards, m, targets] = input.trim().split('\n');

    // 상근이 카드 정렬
    const sortedCards = cards.split(' ').map(Number).sort((a, b) => a - b);

    // 이진 탐색 함수
    function binarySearch(array, target) {
        let left = 0;
        let right = array.length - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (array[mid] === target) return true; // 찾았다면 true 반환
            else if (array[mid] < target) left = mid + 1; // 타겟이 더 크면 오른쪽 탐색
            else right = mid - 1; // 타겟이 더 작으면 왼쪽 탐색
        }
        return false; // 찾지 못한 경우
    }

    // 확인해야 할 숫자들
    const targetNumbers = targets.split(' ').map(Number);

    // 이진 탐색으로 결과 생성
    const result = targetNumbers.map(num => (binarySearch(sortedCards, num) ? 1 : 0));

    // 결과를 공백으로 구분하여 출력
    return result.join(' ');
}
// 테스트
const input = `5
6 3 2 10 -10
8
10 9 -5 2 3 4 5 -10`;
console.log(solution(input)); // 출력: 1 0 0 1 1 0 0 1
