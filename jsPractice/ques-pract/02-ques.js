// Write a function named countEvenNumbers that returns the number of even numbers in the array.

// input 
const numbers = [12, 7, 20, 3, 18, 9, 14];
// expected output = 4

function countEvenNumbers(arr) {
    let counter = 0;
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0 ) {
            counter++;
        }
    }
    return counter;
}

console.log(countEvenNumbers(numbers));
