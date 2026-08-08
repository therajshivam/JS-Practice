const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["ironman", "batman"]

const myArr2 = new Array(1, 2, 3, 4, 5)
// console.log(myArr[0]); 

// array methods

// myArr.push(6)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr,",", typeof newArr);

// SLICE AND SPLICE

// slice : only takes the given value in the range without including last limit of the range
// in slice the original array remains the same

// splice : takes the values of the range including last limit element
// in splice the original array get changes as the splice elements get eliminated from original array

console.log("original array: ", myArr);

const sliceArr = myArr.slice(1, 3)
console.log("slice Array: ", sliceArr);
console.log("original array after slice: ", myArr);

console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

console.log("original array: ", myArr);

const spliceArr = myArr.splice(1, 3)
console.log("splice Array: ", spliceArr);
console.log("original array after splice: ", myArr);

