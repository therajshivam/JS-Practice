// for-in loop - use for objects

// Iterates over the keys (property names) of an object.
// For arrays, it returns the indexes.

// Objects
const myObject = {
    js: 'Javascript',
    cpp: 'C++',
    rb: 'Ruby',
    swift: 'Swift by Apple'
} 

for (const key in myObject) {
    // console.log(key); // gives keys of object
    // console.log(myObject[key]); // gives values of objects


    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

// Array
const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(key); // gives index of array values
    // console.log(programming[key]); // gives values of arrays 

}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Maps is not iterable with for-in
// Use for...of with Map instead.

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key);
}
