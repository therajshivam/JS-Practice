// FOR-EACH LOOP

// array.forEach(callBackFunction);
// CallBackFunction : here, it is a function to execute for each element in the array
// a callback is a function passed as an argument to another function

let arr = [1, 2, 3, 4, 5];
arr.forEach(function printValue(val) {
  // val = value at each index
  console.log(val);
});

let arrCities = ["mumbai", "delhi", "chandigarh", "pune"];
arrCities.forEach((val, index, arrCities) => {
  // console.log(val);
  console.log(val.toUpperCase(), index, arrCities);
});

// forEach have 3 parameters -> value, index and array

// HIGHER ORDER FUNCTION / higher order method
// can take another function as a parameter or returns another function as value
// forEach() is a higher order function

// Ques : For a given array of numbers, print the square of each value using forEach loop.

let nums = [1, 2, 3, 4, 5, 6];

// nums.forEach((sqNums)=>{
//     console.log(sqNums**2);
// })

// another way
let calcSquare = (sqNums) => {
  console.log(sqNums ** 2);
};

nums.forEach(calcSquare);