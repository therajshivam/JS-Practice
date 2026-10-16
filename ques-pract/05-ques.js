// Find the second-largest distinct number in the array.

// Input
const numbers = [12, 7, 20, 3, 18, 9, 14];
// Expected output: 18

const num2 = [5, 5, 4]                 // 4
const num3 = [-5, -2, -8]              // -5
const num4 = [5, 5, 5]                 // null
const num5 = [10, 10, 8, 12, 12, 9]
 
function findSecondLargest(arr){
    let largest = arr[0]
    let secondLargest = -Infinity
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest
            largest = arr[i]
        } else {
            if (arr[i] > secondLargest && arr[i] < largest) {
                secondLargest = arr[i]
            }
        }
    }
    if (secondLargest === -Infinity) {
        return null;
    } else {
        return secondLargest;
    }
}

console.log(findSecondLargest(numbers));
console.log(findSecondLargest(num2));
console.log(findSecondLargest(num3));
console.log(findSecondLargest(num4));
console.log(findSecondLargest(num5));

