// Numbers

const score = 400
console.log(score, typeof score); // number

const balance = new Number(100)
console.log(balance, typeof balance); // object, Creates a Number object (rarely used)

// methods
console.log(balance.toString()); // converts to string
console.log(balance.toString().length); // counts length of string
console.log(balance.toFixed(2)); // precision value, return a string

const otherNumber = 123.5966
console.log(otherNumber.toPrecision(3)); // precised value on number given (round of value on 3rd num)
// return an string

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); // puts commas in the num; default US system, 'en-IN' - indian num sys

// Number.isInteger()
console.log(Number.isInteger(10));      // true
console.log(Number.isInteger(10.5));    // false

// Number.isNaN()
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN(10));  // false

// Number() : conversion
// Converts a value to a number.
// Returns NaN if the entire value cannot be converted.
console.log(Number("123"));    // 123
console.log(Number("123abc")); // NaN
console.log(Number(true));     // 1
console.log(Number(false));    // 0

// parseInt()
// Extracts and returns the integer from the beginning of a string.
// Stops reading when a non-numeric character is found.
console.log(parseInt("123px"));   // 123
console.log(parseInt("12.5kg"));  // 12
console.log(parseInt("abc123"));  // NaN

// parseFloat()
// Extracts and returns the decimal number from the beginning of a string.
// Stops reading when a non-numeric character is found.
console.log(parseFloat("12.5kg"));  // 12.5
console.log(parseFloat("100px"));   // 100
console.log(parseFloat("abc12"));   // NaN

// maxvalue and minvalue (Number Constants)
// Number.MIN_VALUE
// Number.MAX_VALUE
// Number.MIN_SAFE_INTEGER
// Number.MAX_SAFE_INTEGER