//부루트 포스 알고리즘
//수학 연립방정식 함수
function solveLinearEquations(a, b, c, d, e, f) {
    // Calculate the determinants
    const determinant = a * e - b * d;
    const determinantX = c * e - b * f;
    const determinantY = a * f - c * d;

    // Compute x and y using Cramer's rule
    const x = determinantX / determinant;
    const y = determinantY / determinant;

    // Return the solution as integers
    return `${x} ${y}`;
}

// Example Inputs
const input1 = [1, 3, -1, 4, 1, 7]; // Expected output: 2 -1
const input2 = [2, 5, 8, 3, -4, -11]; // Expected output: -1 2

console.log(solveLinearEquations(...input1));
console.log(solveLinearEquations(...input2));