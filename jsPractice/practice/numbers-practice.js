console.log(Number("250")); // 250
console.log(Number("250px")); // NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 0

console.log(Number.isInteger(10)); // true
console.log(Number.isInteger(10.5)); // false
console.log(Number.isInteger(-8)); // true
console.log(Number.isInteger(3.14159)); // false

console.log(Number.parseInt("120px")); // 120
console.log(Number.parseFloat("45.75kg")); // 45.75
console.log(Number.parseInt("abc100")); // NaN

const num = 1234.56789;
console.log(num.toFixed(2)); // 1234.57
console.log(num.toPrecision(5)); // 1234.6
console.log(num.toLocaleString('en-IN')); // 1,234.568

const num2 = -36.8;
console.log(Math.abs(num2)); // 36.8
console.log(Math.round(num2)); // -37
console.log(Math.ceil(num2)); // -36
console.log(Math.floor(num2)); // -37
console.log(Math.sqrt(49)); // 7

const numbers = [25, 98, 13, 76, 42];
console.log(Math.max(25, 98, 13, 76, 42)); // 98
console.log(Math.min(25, 98, 13, 76, 42)); // 13

// random dice
const diceMin = 1
const diceMax = 6
console.log(Math.floor(Math.random()*(diceMax-diceMin+1))+ diceMin);

// otp generator
const otpMin = 1000
const otpMax = 9999
console.log(Math.floor(Math.random()*(otpMax-otpMin+1))+otpMin);

// random age
const ageMin = 18
const ageMax = 60
console.log(Math.floor(Math.random()*(ageMax-ageMin+1))+ageMin);

// Mini Project – Bill Calculator
const bill = 1499.75;
const tax = 18; // %

const taxAmount = (bill * (tax/100))
console.log(taxAmount);
const finalAmount = bill + taxAmount
console.log(finalAmount);
const finalAmountPrecise = Number(finalAmount.toFixed(2))
console.log(finalAmountPrecise);
