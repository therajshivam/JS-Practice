// Numbers

const score = 400
console.log(score, typeof score); // number

const balance = new Number(100)
console.log(balance, typeof balance); // object (exclusively declaring number)

// methods
console.log(balance.toString(), typeof balance); // converts to string
console.log(balance.toString().length); // counts length of string
console.log(balance.toFixed(2)); // precision value

const otherNumber = 123.5966
console.log(otherNumber.toPrecision(3)); // precised value on number given (round of value on 3rd num)
// return an string

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); // puts commas in the num; default US system, 'en-IN' - indian num sys

// maxvalue and minvalue
// Number.MIN_VALUE
// Number.MAX_VALUE
// Number.MIN_SAFE_INTEGER
// Number.MAX_SAFE_INTEGER