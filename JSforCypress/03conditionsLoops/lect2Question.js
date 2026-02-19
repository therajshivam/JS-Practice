// QUESTIONS
// Q1. Get user to input a number using prompt("Enter a number: "). Check if the number is multiple of 5 or not.

let number = prompt("Enter a number: ");

if (number % 5 === 0) {
    console.log(`YES! ${number} is multiple of 5.`);  
} else {
    console.log(`NO! ${number} is not multiple of 5.`);
}