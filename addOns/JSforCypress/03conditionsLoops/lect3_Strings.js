// Strings
// Sequence of characters used to represent text.

let str = "hello world";
console.log(str);

// strings have inbuilt properties and functions(methods)

// string length
console.log(str.length);

// string indices
console.log(str[6]);

// TEMPLATE LITERALS
// A way to have embedded expressions in strings
let sentence = `This is a template literal`
console.log(sentence, typeof sentence);

let obj = {
    item : "pen",
    price : 5
}

// String Interpolation
// To create string by doing substitution of placeholders
console.log(`The cost of ${obj.item} is ${obj.price} rupees.`);

// Escape Characters
// \n - next line
// \t - tab spave
console.log("Hello \tWorld");

// STRING METHODS
// These are built-in fuctions to manipulate the string

let string = "  Hello World   "

// toUpperCase()
console.log(string.toUpperCase());

// toLowerCase()
console.log(string.toLowerCase());

// trim()
console.log(string.trim());

// strings are immutable

// str.slice(start, end?)
let stringg = "0123456"
console.log(stringg.slice(1, 6));

// str1.concat(str2)
let str1 = "Hello"
let str2 = "World"
console.log(str1.concat(str2));

// str.replace(searchVal, newVal)
let strr = "hello"
console.log(strr.replace("h", "y"));
console.log(strr.replaceAll("lo", "y"));

// str.charAt(index)
let sstring = "IloveJS"
console.log(sstring.charAt(1));