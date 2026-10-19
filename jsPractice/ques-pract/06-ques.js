// Write a function named countOccurrences(arr, target) that returns how many times target appears in the array.

const numbers = [4, 2, 4, 7, 4, 2, 9];
// expected output:
// countOccurrences(numbers, 4); // 3
// countOccurrences(numbers, 2); // 2
// countOccurrences(numbers, 7); // 1
// countOccurrences(numbers, 5); // 0

function countOccurrences(arr, target) {
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            counter++
        }
    }
    return counter;   
}

console.log(countOccurrences(numbers, 4));
console.log(countOccurrences(numbers, 2));
console.log(countOccurrences(numbers, 7));
console.log(countOccurrences(numbers, 5));
console.log(countOccurrences([1, 2, 3], 5));
