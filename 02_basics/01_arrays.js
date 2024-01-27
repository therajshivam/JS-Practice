// array is an object; stores a collection of multiple items under a single variable name
// declairing array; array should be in square brackets

const myArr = [0, 1, 2, 3, 4, 5] // inside array are called elements; elements can be string, numbers, boolean or mixed

// JS arrays are resizable and can contain a mix of diff datatypes.

console.log(myArr[0]); // accessing value in array; array indexing starts with 0; first element indexed as 0

// JavaScript array-copy-operation create shallow copies; changes in original copy

const myHeros = ["ironman", "hulk"]
const myArr2 = new Array(1, 2, 3, 4) // another way of declaring array

// Array methods :

myArr.push(6) // adds value inside the array
myArr.push(7) 
myArr.pop() // removes the last element of array

myArr.unshift(9) // insert element in the start of array; problematic; not to use much; todos
myArr.shift() // iremoves the first element

console.log(myArr.includes(9)); // checks elements present or not; gives boolean true/false
console.log(myArr.indexOf(9)); 

const newArr = myArr.join() // binds and convert into string

console.log(myArr);
console.log(newArr);

// slice and splice

console.log("A ", myArr ); // original arr

const myn1 = myArr.slice(1, 3) // using slice
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3) // using splice
console.log(myn2);
console.log("C ", myArr);


// slice : only takes the given value in the range without including last limit of the range
// in slice the original array remains the same

// splice : takes the values of the range including last limit element
// in splice the original array get changes as the splice elements get eliminated from original array
