const sum = (num) => {
    return num**2;
}

const sumOfSquares = (num1, num2) => {
    let ans1 = sum(num1);
    let ans2 = sum(num2);
    return ans1+ans2;
}

const sum1 = sumOfSquares(2, 3); // "sum1" should be 13 (4 + 9)
const sum2 = sumOfSquares(3, 4); // "sum1" should be 25 (9 + 16)

console.log(sum1);
console.log(sum2);