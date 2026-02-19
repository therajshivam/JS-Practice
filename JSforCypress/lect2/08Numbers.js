const score = 400
console.log(score, typeof score);

// explicit define datatype number
const balance = new Number(100)
console.log(balance, typeof balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 23.8563
console.log(otherNumber.toPrecision(3));

const hundreds = 10000000
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));

// max and min value
