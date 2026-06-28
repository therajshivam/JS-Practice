console.log(Math); // Object [Math] {}

console.log(Math.abs(-4)); // absolute value, converts negative values to positive

// round off the given num
console.log(Math.round(4.3)); // 4 
console.log(Math.round(4.6)); // 5
console.log(Math.ceil(4.2)); // round off the number with upper value
console.log(Math.floor(4.9)); // round off the number with lower value

console.log(Math.sqrt(49)); // square root
console.log(Math.pow(9,3)); // power
console.log(Math.trunc(256.6)); // removes decimal

console.log(Math.min(3, 5 , 9 , 7 , 2)); // finds lowest/minimum value
console.log(Math.max(3, 5 , 9 , 7 , 2)); // finds highest/maximum value

// mostly usecase of math library
console.log(Math.random()); // always gives values between 0 and 1; can be in decimals
console.log((Math.random()*10) + 1);  // shifts value by 1 and avoids if answer is 0
console.log(Math.floor(Math.random()*10) + 1); // gives num without decimals; value lies between 1 and 10

// to get random value between given min and max value
const min = 10
const max = 20
// Random Number Formula
console.log(Math.floor(Math.random()*(max-min+1)) + min) // values between 10 and 20
// Math.floor => without decimals
// Math.random() => gives random value
// max - min => gives value in the range
// + 1 => avoids 0 case
// + min => value starts from min value