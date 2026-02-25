let username = "Shivam"
let repoCount = 15
console.log(username, typeof username);


// concatination
console.log(username + repoCount + " value");
// this is usually not recommended and not a good practice
// instead use string interpolation

// String interpolation
console.log(`Hello my name is ${username}, and my repo count is ${repoCount}`);

let gameName = new String("shivam-sr");
console.log(gameName, typeof gameName);

console.log(gameName[0]); // accessing key of string
console.log(gameName.__proto__);
// string methods
console.log(gameName.length);
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('m'))

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-7, 4)
console.log(anotherString);

const newStringOne = "       shivam       "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://shivam.com/shivam%20raj"
console.log(url.replace('%20', '-'))

console.log(url.includes('shivam'));
console.log(url.includes('sid'));

console.log(gameName.split('-'));

// strings are immutable it does not change