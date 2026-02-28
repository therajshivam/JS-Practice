// some more array methods

// 1. map
// creates a new array with the results of some operation. The value its callback returns are used to form new array.
// arr.map(callbackFnx(value, index, array))

let nums = [67, 52, 38]

// print
nums.map((val) => {
    console.log(val)
})

// make new array
let newArr = nums.map((val)=>{
    // return val
    return val ** 2;
})
console.log(newArr);

// MAP - FILTER - REDUCE

// 1. MAP

