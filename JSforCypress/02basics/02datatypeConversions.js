// NUMBER
console.log("******************NUMBER**********************");

let score = 33;
console.log(score, typeof score);

let stringScore = "33abc";
let valueInNumber = Number(stringScore);
console.log(stringScore, typeof stringScore, valueInNumber, typeof valueInNumber);

let undefiendScore = undefined;
let undefinedToNumber = Number(undefiendScore);
console.log(undefiendScore, typeof undefiendScore, undefinedToNumber, typeof undefinedToNumber);

let nullScore = null;
let nullToNumber = Number(nullScore);
console.log(nullScore, typeof nullScore, nullToNumber, typeof nullToNumber);

let booleanScore = true
let booleanToNumber = Number(booleanScore)
console.log(booleanScore, typeof booleanScore, booleanToNumber, typeof(booleanToNumber));

// "33" => 33
// "33abc" => NaN (Not a Number) type is number
// "abc" => NaN
// "" => 0
// true => 1; false => 0
// null => 0
// undefined => NaN

// BOOLEAN
console.log("******************BOOLEAN**********************");

let isLoggedIn = 1
let numberToBoolean = Boolean(isLoggedIn)
console.log(isLoggedIn, typeof(isLoggedIn), numberToBoolean, typeof(numberToBoolean));

let string = ""
let stringToBoolean = Boolean(string)
console.log(string, typeof(string), stringToBoolean, typeof(stringToBoolean));

let stringFill = "hi"
let stringFillToBoolean = Boolean(stringFill)
console.log(stringFill, typeof(stringFill), stringFillToBoolean, typeof(stringFillToBoolean));

// 1 => true; 0 => false
//  "" => false
// "abc" => true

// STRING
console.log("******************STRING**********************");

let number = 33
let numberToString = String(number)
console.log(number, typeof number, numberToString, typeof numberToString);




