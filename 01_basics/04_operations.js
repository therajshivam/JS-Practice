// Implicit Conversion (Type Coercion) -- automatic type conversion by js

// assinging negative value
let value = 1
let negValue = -value
console.log(negValue);

// arithmetic operation
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3); // power
// console.log(2/2);
// console.log(2%2); // modulus , gives remainder

// string concatenation
let str1 = "hello"
let str2 = " world"

let str3 = str1 + str2
// console.log(str3);

// tricky conversion issues - keep in mind (dont write this kind of codes)
console.log("1" + 2);      // 12
console.log(1 + "2");      // 12
console.log("1" + 2 + 2);  // 122
console.log(1 + 2 + "2");  // 32

console.log(+true); // 1
console.log(+"");   // 0

let num1, num2, num3
num1 = num2 = num3 = 2 + 2

// prefix and postfix (imp)

// let gameCounter = 100
// gameCounter++;
// console.log(gameCounter);

// increment operator (++) -- adds 1 to a variable
// decrement operator (--) -- subs 1 from a variable

// Prefix Increment (++a) -- First increases the value, then uses it.
let a = 5;
let b = ++a;
console.log(a); // 6
console.log(b); // 6

// Postfix Increment (a++) -- First uses the value, then increases it.
let a = 5;
let b = a++;
console.log(a); // 6
console.log(b); // 5

// Prefix Decrement (--a)
let a = 5;
let b = --a;
console.log(a); // 4
console.log(b); // 4

// Postfix Decrement (a--)
let a = 5;
let b = a--;
console.log(a); // 4
console.log(b); // 5