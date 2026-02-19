// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 <= 1);
// console.log(2 == 1);
// console.log(2 === 1);
// console.log(2 != 1);
// console.log(2 !== 1);

console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0);
console.log(null < 0);
console.log(null == 0);
console.log(null >= 0);
console.log(null <= 0);
// The reason is that an equality check and comparisons > < work differently.
// Comparisons convert null to a number, treating it as 0.
// That's why (3) null O is true and (1) null > O is false.

// === => strict check
// it checks the values and its data types with conversion
console.log("2" == 2);
console.log("2" === 2);
