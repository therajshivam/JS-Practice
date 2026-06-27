// Strings : Sequence of characters used to represent text.
// strings have inbuilt properties and functions(methods)

// syntax for declaring string
const name = "Shivam"
const repoCount = 50

// String Concatenation
// console.log(name + repoCount + " Value"); // not recommended syntax

// Template Literals -- use this instead
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // string interpolation

// Template literals : A way to have embedded expressions in strings
// String Interpolation : To create string by doing substitution of placeholders

// Escape Characters
// \n - next line
// \t - tab space
console.log("Hello \tWorld");

// Creating Strings
// Primitive String
let city = "Chandigarh";
console.log(typeof city); // string

// String Object
const cityName = new String("Chandigarh");
console.log(typeof cityName); // object

// Prefer primitive strings. new String() creates a String object and is rarely used.

// another syntax for string (String Object)
const gameName = new String('shivam-game-com')

console.log(gameName[0]); // accessing key of string (string indices)
console.log(gameName.__proto__); // accessing key of string
// console.log(Object.getPrototypeOf(gameName));

// STRING METHODS : These are built-in functions to manipulate the string
console.log(gameName.length); // string length
console.log(gameName.toUpperCase()); 
console.log(gameName.toLowerCase()); 
console.log(gameName.charAt(2)); // str.charAt(index)
console.log(gameName.indexOf('v'));
console.log(gameName.at(-1)); // last character access


const newString = gameName.substring(0, 4) // not including the last no. ie 4
console.log(newString);
// Doesn't accept negative indexes

// str.slice(start, end?)
const anotherString = gameName.slice(-8, 4)
console.log(anotherString);
// Accepts negative indexes.

const newStringOne = "      shivam      "
console.log(newStringOne);
console.log(newStringOne.trim()); // shivam

// str.replace(searchVal, newVal)
const url = "https://shivam.com/shivam%20raj"
console.log(url.replace('%20', '-')); // https://shivam.com/shivam-raj

console.log(url.includes('shivam')); // true
console.log(url.includes('sid')); // false

console.log(gameName.split('-')); 
// Split a string into substrings using the specified separator and return them as an array.
// [ 'shivam', 'game', 'com' ]


// str1.concat(str2)
let str1 = "Hello"
let str2 = "World"
console.log(str1.concat(str2)); // HelloWorld

console.log("Hi ".repeat(3)); // Hi Hi Hi

// strings are immutable it does not change

