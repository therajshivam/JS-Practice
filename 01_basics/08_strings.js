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
// \t - tab spave
console.log("Hello \tWorld");

// Primitive String
let city = "Chandigarh";
// String Object
const cityName = new String("Chandigarh");
// Prefer primitive strings. new String() creates a String object and is rarely used.

// another syntax for string (String Object)
const gameName = new String('shivam-game-com')

console.log(gameName[0]); // accessing key of string (string indices)
console.log(gameName.__proto__); // accessing key of string

// STRING METHODS : These are built-in fuctions to manipulate the string
console.log(gameName.length); // string length
console.log(gameName.toUpperCase()); 
console.log(gameName.toLowerCase()); 
console.log(gameName.charAt(2)); // str.charAt(index)
console.log(gameName.indexOf('v'));


const newString = gameName.substring(0, 4) // not including the last no. ie 4
console.log(newString);

// str.slice(start, end?)
const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "      shivam      "
console.log(newStringOne);
console.log(newStringOne.trim());

// str.replace(searchVal, newVal)
const url = "https://shivam.com/shivam%20raj"
console.log(url.replace('%20', '-'));

console.log(url.includes('shivam'));
console.log(url.includes('sid'));

console.log(gameName.split('-')); // convert string into array 

// str1.concat(str2)
let str1 = "Hello"
let str2 = "World"
console.log(str1.concat(str2));

// strings are immutable it does not change

