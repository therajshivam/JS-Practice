// Write a function named sumNumbersGreaterThan10 that returns the sum of all numbers greater than 10.

// input
const numbers = [12, 7, 20, 3, 18, 9, 14];
// expexted output = 64

function sumNumbersGreaterThan10(number) {
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        if (number[i] > 10) {
            sum += number[i];
        }
    }
    return sum
}

console.log(sumNumbersGreaterThan10(numbers))