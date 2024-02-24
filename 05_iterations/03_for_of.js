

// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello World!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Maps 
// no duplicate values; all unique values

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")
map.set('IN', "India") // will not print this because it only give unique values

// console.log(map);

for (const [key, value] of map) {   // square brackets give destructure of array
    // console.log(key, ':-', value);
}



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Object

const myObject = {
    'game1': 'NFS', 
    'game1': 'Spiderman', 
}

// for (const [key, value] of myObject) {   
//     console.log(key, ':-', value);
// }
// myObject is not iterable