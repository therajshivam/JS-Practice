console.log(Math);

console.log(Math.abs(-9)); // neg values to positive
console.log(Math.round(9.7)); // rounds off
console.log(Math.ceil(4.2)); // round off the number with upper value
console.log(Math.floor(4.9)); // round off the number with lower value

console.log(Math.min(3, 5 , 9 , 7 , 2)); // finds lowest/minimum value
console.log(Math.max(3, 5 , 9 , 7 , 2)); // finds highest/maximum value
 
// MATH.RANDOM()
console.log(Math.random()); // random values from 0 to 1

// customization
console.log(Math.random() * 10); // shift value by 1 digit
console.log((Math.random() * 10) + 1); // minimum value will be 1
console.log(Math.floor(Math.random()*10) + 1); // gives num without decimals; value lies between 1 and 9

// to get random value between given min and max value

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1))+ min);

// Math.floor => without decimals
// Math.random() => gives random value
// max - min => gives value in the range
// + 1 => avoids 0 case
//  + min => to get min value