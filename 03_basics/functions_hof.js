// functions and higher order functions

/*
01. Write a function named `makeTea` that takes one parameter, `typeOfTea`, and returns a string like `"Making green tea"` when called with `"green tea"`. 
Store the result in a variable named `teaOrder`.
*/

function makeTea(typeOfTea) {
    return `Making ${typeOfTea}`;
}
const teaOrder = makeTea("green tea");
console.log(teaOrder);

/*
02. Create a function named `orderTea` that takes one parameter, `teaType`. Inside this function, create another function named `confirmedOrder` that returns a message like `"Ordered confirmed for the chai"`.
Call `confirmOrder` from within `orderTea` and return the result.
*/

function orderTea(teaType) {
    function confirmedOrder() {
        return `Ordered confirmed for the chai`
    }
    return confirmedOrder()
}
const orderConfirmed = orderTea("chai")
console.log(orderConfirmed);

/*
03. Write an arrow function named `calculateTotal` that takes two parameters: `price` and `quantity`. The function should return the total cost by multiplying the `price` and `quantity`.
Store the result in the variable named `totalCost`.
*/

// Arrow function Explicit return
// const calculateTotal = (price, quantity) => {
//     return (price * quantity);
// }

// Arrow function Implicit return
const calculateTotal = (price, quantity) => (price * quantity);
const totalCost = calculateTotal(20, 2)
console.log(totalCost);

/*
04. Write a function named `processTeaOrder` that takes another function, `makeTea` as a parameter and calls it with the argument `"earl grey"`.
Return the result of calling `makeTea`.
*/

// higher order function
function makeTea(typeTea) {
    return `maketea : ${typeTea}`
}

function processTeaOrder(fn) {
    return fn("earl grey")
}

let order = processTeaOrder(makeTea)
console.log(order);

/*
05. Write a function named `createTeaMaker` that returns another function. The returned function should take one parameter, `teaType`, and return a message like `"Making green tea"`.
Store the returned function in a variable named `teaMaker` and call it with `"green tea"`. 
*/

// closure
function createTeaMaker() {
    return function(teaType) {
        return `Making ${teaType}`
    }
}

let teaMaker = createTeaMaker()
let result = teaMaker("green tea")
console.log(result);