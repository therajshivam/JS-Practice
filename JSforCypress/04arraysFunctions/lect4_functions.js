// FUNCTIONS
// block of code that performs a specific task, can be invoked whenever needed

// function defination :
// function functionName () {
// do some work
// }

// parameter -> input
// function functionName (param1, param2 ...) {
// do some work
// }

// function call/invoke :
// functionName ();

function myFunc(msg) {
  // parameter -> input
  console.log(msg);
}
myFunc("hello"); //argument

// function -> 2 num, sum

function sum(num1, num2) {
  numSum = num1 + num2;
  return numSum;
}
console.log(sum(3, 4));

// ARROW FUNCTIONS
const arrowSum = (a, b) => {
  console.log(a + b);
};

arrowSum(5, 5);

const printHello = () => console.log("hello");
printHello();

// PRACTICE QUESTIONS
// 1. Find vowels in a string

function countVowels(str) {
  let count = 0;
  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u" ||
      char === "A" ||
      char === "E" ||
      char === "I" ||
      char === "O" ||
      char === "U"
    ) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("aaa"));

