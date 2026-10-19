// Write a function named findFirstOccurrence(arr, target) that returns the index of the first occurrence of the target.

const numbers = [3, 8, 12, 8, 15, 8];

// findFirstOccurrence(numbers, 8);  // 1
// findFirstOccurrence(numbers, 12); // 2
// findFirstOccurrence(numbers, 5);  // -1

function findFirstOccurrence(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i
        }  
    }
    return -1;
}

console.log(findFirstOccurrence(numbers, 8));
console.log(findFirstOccurrence(numbers, 12));
console.log(findFirstOccurrence(numbers, 5));

