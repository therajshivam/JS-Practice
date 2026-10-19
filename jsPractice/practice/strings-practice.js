// primitive string 
let str1 = "hello"
// console.log(str1, typeof str1);

// string object
let strObject = new String("String Object")
// console.log(strObject, typeof strObject);

// Hello, my name is Shivam and I am learning JavaScript. using template literal
let name = "Shivam";
let language = "JavaScript"
// console.log(`Hello, my name is ${name} and I am learning ${language}.`);

// escapes
// console.log("Hello \nWorld");
// console.log("Hello \tWorld");
// console.log("Hello \"World\"");
// console.log("Hello \\World");

const game = "shivam-game-js";
/*
console.log(game.length);
console.log(game.toUpperCase());
console.log(game.toLowerCase());
console.log(game.charAt(5));
console.log(game.at(-1));
console.log(game.indexOf("i"));
console.log(game.lastIndexOf("m"));
*/
/*
console.log(game.substring(0,6));
console.log(game.slice(0,-3));
let fileName = "     vscode      "
console.log(fileName.trim());
let replaceName = "kingkongqueen"
console.log(replaceName.replace("kong", "or"))
console.log(replaceName.includes("king"))
let fruits = "apple,banana,mango";
console.log(fruits.split(","));
console.log("abc".split(""));
*/

/*
const str = "JavaScript";
console.log(str.slice(0,4));
console.log(str.slice(4));
console.log(str.slice(-4));
console.log(str.slice(-6));
console.log(str.slice(-6,-2));
console.log(str.slice(100));
console.log(str.slice(5,2));

outputs
Java
Script
ript
Script
Scri


/*
const str = "JavaScript";
console.log(str.substring(0,4));
console.log(str.substring(4));
console.log(str.substring(-5));
console.log(str.substring(-5,4));
console.log(str.substring(5,2));
console.log(str.substring(100));

output:
Java
Script
JavaScript
Java
vaS

*/
/*
const str = "JavaScript";
console.log(str.charAt(0));
console.log(str.charAt(5));
console.log(str.charAt(100));
console.log(str.charAt(-1));

outputs:
J
c


*/
/*
const str = "JavaScript";
console.log(str.at(0));
console.log(str.at(-1));
console.log(str.at(-2));
console.log(str.at(100));
outputs:
J
t
p
undefined
*/
/*
const str = "JavaScript";
console.log(str.indexOf("a")); // 1
console.log(str.indexOf("Script")); // 4
console.log(str.indexOf("x")); // -1
*/

const str = "JavaScript";

/*
console.log(str.includes("Java"));
console.log(str.includes("java"));
console.log(str.includes("Script"));
console.log(str.includes("JS"));
output:
true
false
true
false
*/
/*
console.log(str.split(""));
console.log(str.split(" "));
console.log(str.split("a"));
console.log(str.split("Java"));
console.log(str.split(","));
outputs:
['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']
[ 'JavaScript' ]
[ 'J', 'v', 'Script' ]
[ '', 'Script' ]
[ 'JavaScript' ]
*/
/*
console.log(str.replace("Java","Type"));
// TypeScript
console.log(str.replace("a","*"));
// J*vaScript
console.log(str.replace("x","y"));
// JavaScript
*/

/*
Assignment 3 – Easy Challenges ⭐

Store your full name.
Print its length.
Print first character.
Print last character.
Print second last character.
Convert to uppercase.
Convert to lowercase.
Remove spaces.
Check whether your name contains "Raj".
Replace "Raj" with "Kumar".
Split your name into characters.
Split your name into words.
Print only your first name.
Print only your surname.
Print your initials.

code:

let fullName = "Shivam Raj"
console.log(fullName);
console.log(fullName.length);

console.log(fullName.charAt(0));
console.log(fullName.slice(-1));
console.log(fullName.slice(-2, -1));

console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());

console.log(fullName.replace(" ",""));
console.log(fullName.includes("Raj"));
console.log(fullName.replace("Raj", "Kumar"));

console.log(fullName.split(""));
console.log(fullName.split(" "));
 
// const words = fullName.split(" ");
// console.log(words[0]);

console.log(fullName.substring(7));

const words = fullName.split(" ");
const firstName = words[0]
const lastName = words[1]
const firstInitial = firstName.charAt(0)  
const lastInitial = lastName.charAt(0)
const nameInitials = `${firstInitial}${lastInitial}`
console.log(nameInitials);

const [first, last] = fullName.split(" ");
console.log(`${first[0]}${last[0]}`);

*/


/*
Assignment 4


const input = "shivam-raj-javascript"
console.log(input.split("-"));

const input2 = "frontend_backend_database"
console.log(input2.split("_"));

const url = "https://example.com/Shivam%20Raj"
console.log(url.replace("%20", "-"));

const input3 = "    JavaScript";
console.log(input3.trimStart().toUpperCase());

const input4 = "shivam@gmail.com"
console.log(input4.includes("@") ? "@" : "");

const input5 = "JavaScript"
console.log(input5.slice(0, 4));
console.log(input5.substring(0, 4));
console.log(input5.slice(4));
console.log(input5.substring(4));

const lastChar = input5.at(-1)
console.log(lastChar);

const input6 = "shivam-raj-game-js"
console.log(input6.replaceAll("-", " "));

const input7 = "Learn JavaScript Today"
console.log(input7.replaceAll(" ", "-"));
*/

/*
Assignment 5

const email = "    ShivamRaj@Gmail.COM   ";
console.log(email.trim().toLowerCase());

const username = "  shivam raj  ";
console.log(username.trim().toUpperCase().replaceAll(" ", "_"));

const date = "2026-06-27";
console.log(date.split("-").reverse().join("/"));

const lang = "JavaScript";
console.log(lang.split("").join("\n"));

const words = "madam";
const wordsClean = words.toLowerCase();
const wordsReverse = wordsClean.split("").reverse().join(""); 
console.log(`isPalindrome ? ${wordsClean === wordsReverse}`);

const emailAddress = "shivamraj@gmail.com";
const atIndex = emailAddress.indexOf("@");
const firstLetter = emailAddress.slice(0, 1);
const domain = emailAddress.slice(atIndex)
const maskedEmail = `${firstLetter}****${domain}`
console.log(maskedEmail);

const strings = "javascript"
const capitalLetter = strings.split("")[0].toUpperCase();
const otherWords = strings.slice(1)
const completeWord = `${capitalLetter}${otherWords}`
console.log(completeWord);

*/



