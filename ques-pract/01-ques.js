// Write a JavaScript function named countPassingScores that accepts an array of scores and returns the number of scores greater than or equal to 50.

// input
const scores = [35, 72, 48, 90, 61, 25];
// expected output = 3

function countPassingScores(arr) {
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 50) {
            counter++;
        }   
    }
    return counter;
}

console.log(countPassingScores(scores))