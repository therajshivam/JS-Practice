// LOOPS
// Loops are used to execute a piece of code again and again.

// 1. FOR LOOP
// for(let i = 0; i < 5; i++) {
//     console.log("hello");
// }

// calculate sum of 1 to n
// let sum = 0;
// let n = 5;
// for(let i = 1; i <= n; i++) {
//     sum += i;
// }
// console.log(sum);

// 2. WHILE LOOP
// let i = 1;
// let sum = 0;
// while (i <= 5) {
//   sum = sum + i;
//   i++;
// }
// console.log(sum);

// 3. DO WHILE LOOP
// let j = 1;
// do {
//   console.log("j = ",  j);
//   j++
// } while (j <= 5);

// 4. FOR-OF LOOP -- for strings and arrays
let str = "Hello World";
let size = 0;
for(let i of str) {
    console.log("i = ", i);
    size++;
}
console.log(size);

// 5. FOR-IN LOOP -- for objects
let student = {
    fullName : "John Doe",
    age : "24",
    cgpa : "7.9",
    isPass : true
};

for(let key in student) {
    console.log("key = ", key, "value = ", student[key]);
}

// Q1. Print all numbers from 0 to 100

for (let i = 0; i <= 100; i++) {
//   console.log("i = ", i);
}

// Q2. Print all even numbers from 0 to 100

for (let evenNum = 0; evenNum <= 100; evenNum++) {
  if (evenNum % 2 === 0) {
    console.log("even numbers = ", evenNum);
  }
}