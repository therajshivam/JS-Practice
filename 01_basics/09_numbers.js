const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

// methods
console.log(balance.toString()); // converts to string
console.log(balance.toString().length); // counts length of string
console.log(balance.toFixed(2)); // precision value

const otherNumber = 123.5966
console.log(otherNumber.toPrecision(3)); // precised value on number given (round of value on 3rd num)

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); // puts commas in the num; default US system, 'en-IN' - indian num sys

