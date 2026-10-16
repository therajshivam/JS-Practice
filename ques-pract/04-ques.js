// Write a function named findLargestNumber that returns the largest number in the array.

// input
const numbers = [12, 7, 20, 3, 18, 9, 14];
// Expected output: 20

function findLargestNumber(arr) {
    let largest = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (largest < arr[i]) {
            largest = arr[i]
        }
    }
    return largest
}


console.log(findLargestNumber(numbers));

// One edge case to consider later: what should the function do if the array is empty?