// map() → Returns a new array by transforming each element.


// map() - callback function
// automatically returns value

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNumbers.map( (num) => num + 10) 
// or
const newNums2 = myNumbers.map( (num) => { return num + 10})
// console.log(newNums2);

// with forEach(), not with map()
const newNums3 = []
myNumbers.forEach( (nums) => {
    newNums3.push(nums + 10)
})
// console.log(newNums3);



// chaining : using more than one methods
const newChain = myNumbers
                .map( (num) => num * 10)
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newChain);                