// syntax for declaring string

const name = "Shivam"
const repoCount = 50

// console.log(name + repoCount + " Value"); // not recommended syntax

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// another syntax for string

const gameName = new String('shivam-game-com')

console.log(gameName[0]); // accessing key of string
console.log(gameName.__proto__); // accessing key of string
// string methods
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('v'));


const newString = gameName.substring(0, 4) // not including the last no. ie 4
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "      shivam      "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://shivam.com/shivam%20raj"
console.log(url.replace('%20', '-'));

console.log(url.includes('shivam'));
console.log(url.includes('sid'));

console.log(gameName.split('-')); // into array \