/*
typeof operator can be declared two types - 
console.log(typeof variable);
console.log(typeof (variable));
*/

// Explicit Conversion (Type Casting) -- intentionally changing datatypes

//NUMBER
// String to Number
let score = 33
console.log(score);         // 33
console.log(typeof score);  // number

let marks = "21"
console.log(marks);         // 21
console.log(typeof marks);  // string
// now we will convert string into number
let marksInNumber = Number(marks);
console.log(marksInNumber);          // 21 
console.log(typeof marksInNumber);   // number

let amount = "75abc" // or "hello"
// convert string into number
let amountInNumber = Number(amount)
console.log(amountInNumber);           // NaN
console.log(typeof amountInNumber);    // number

// Null to Number
let price = null
console.log(price);                // null
console.log(typeof price);         // object
// convert into number 
let priceInNumber = Number(price);
console.log(priceInNumber);         // 0
console.log(typeof priceInNumber);  // number

// Undefined to Number
let price1 = undefined
console.log(price1);           // undefined
console.log(typeof price1);    // undefined
// convert into number
let price1InNumber = Number(price1);
console.log(price1InNumber);          // NaN
console.log(typeof price1InNumber);   // number

// Boolean to Number
let count = true
console.log(count);         // true
console.log(typeof count);  // boolean
// convert into number
let countInNumber = Number(count);
console.log(countInNumber);          // 1 
console.log(typeof countInNumber);   // number

// "33" => 33
// "33abc" => NaN (Not a Number) type is number
// true => 1; false => 0
// "abc" => NaN
// null => 0
// undefined => NaN

// BOOLEAN
// Number to Boolean
let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);          // true
console.log(typeof booleanIsLoggedIn);   // boolean

// 1 => true; 0 => false
//  "" => false
// "abc" => true

// STRING
// numbers into string
let someNumber = 33
let stringSomeNumber = String(someNumber)
console.log(stringSomeNumber);         // 33
console.log(typeof stringSomeNumber);  // string
