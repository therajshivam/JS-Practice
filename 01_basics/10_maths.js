console.log(Math);

console.log(Math.abs(-4)); // converts neg num to positive
console.log(Math.round(4.6)); // round off the given num
console.log(Math.ceil(4.2)); // round off the number with upper value
console.log(Math.floor(4.9)); // round off the number with lower value

console.log(Math.min(3, 5 , 9 , 7 , 2)); // finds lowest/minimum value
console.log(Math.max(3, 5 , 9 , 7 , 2)); // finds highest/maximum value

console.log(Math.random()); // always gives values between 0 and 1; can be in decimals
console.log((Math.random()*10) + 1);  // shifts value by 1 and avoids if answer is 0
console.log(Math.floor(Math.random()*10) + 1); // gives num without decimals; value lies between 1 and 9

// to get random value between given min and max value

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
// Math.floor => without decimals
// Math.random() => gives random value
// max - min => gives value in the range
// + 1 => avoids 0 case
//  + min => to get min value