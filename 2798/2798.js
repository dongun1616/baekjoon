//브루트 포스 알고리즘
//블랙잭
function solution(n, m, input) {
    //n은 3~100 사이의 카드 개수
    //m은 최종합 수
    //input은 제공되는 수들의 배열

    //최대합 변수 선언
    let maxSum = 0;
    //input 배열 오름차순으로 정렬
    input.sort((a, b) => a - b);
    //수들 순회
    for (let i = 0; i < n - 2; i++) {
        for (let j = i + 1; j < n - 1; j++) {
            for (let k = j + 1; k < n; k++) {
                const sum = input[i] + input[j] + input[k]
                //주어진값보다 합이 적거나 현재 최대합보다 크면 갱신
                if (m >= sum && sum > maxSum) {
                    maxSum = sum
                }
            }
        }


    }
    return maxSum;
}

console.log(solution(10, 500, [93, 181, 245, 214, 315, 36, 185, 138, 216, 295]))