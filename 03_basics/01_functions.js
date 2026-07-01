// functions 
// A function is a reusable block of code that performs a specific task.

function sayMyName() {
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("V");
    console.log("A");
    console.log("M");
}
sayMyName()

// sayMyName => function reference
// sayMyName() => funuction execution

// +++++++++++++++++++++++++++++++++++++++++++++++++
// Function for adding two numbers
function addTwoNumbers(number1, number2) {   // parameters
    console.log(number1 + number2);
}
addTwoNumbers(3, 4)  // arguments

// parameters : when we make definition of the function, then the inputs inside it are called parameters.
// arguments : when we call the function then the value we pass in it then we call it arguments.

const result = addTwoNumbers(3, 4)
console.log("Result: ", result);  // Result:  undefined
// console print doesnot means it is returning the value.

// +++++++++++++++++++++++++++++++++++++++++++++++++
function addTwoNumbers(number1, number2) { 
    let result = number1 + number2
    return result
    // console.log(abc); // it will never execute; because by default function rules says after returning a function, the function will not do any work.
}
// const result = addTwoNumbers(3, 4)
console.log("Result: ", result);  

// ++++++++++++++++++++++++++++++++++++++++++++++++++
// adding number 
function addTwoNumbers(number1, number2) { 

    // let result = number1 + number2
    // return result      // Code after return is never executed.

    //  OR 

    return number1 + number2
}

// const result = addTwoNumbers(3, 5)
// console.log("Result: ", result);  

// ++++++++++++++++++++++++++++++++++++++++++++++++

function loginUserMessage(usename = "sam"){  // Default Parameter
    // if(usename === undefined) {
    //     console.log("Please enter a username");
    //     return
    if(!usename) {
        console.log("Please enter a username");
        return
    }        
    return `${usename} just logged in`
}
// console.log(loginUserMessage("shivam"));
console.log(loginUserMessage()); // gives 'undefined' if any values are not given

// +++++++++++++++++++++++++++++++++++++++++++++++++

// passing parameters in js

// in situations like shopping cart, user will add the number, and we dont know the number of items will come
// when we dont know the how many arguments will come, we have to design the parameters:

// rest operator => ... ; three dots; to packing the individual items into a bundle
// this will give an array of different items
function calculateCartPrice(...num1) {
    return num1
} 
// console.log(calculateCartPrice(200, 300, 400, 500, 2000))

function anotherCart(val1, val2, ...total) {
    return total;
}
console.log(anotherCart(20, 30, 40, 50, 60));
// 20 goes into val1 and 30 goes into val2, after all whatever left get into ...total
 
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// objects passing in function

const user = {
    username: "shivam",
    price: 199   // if object name is not matched then the value will come undefined
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and the price is ${anyobject.price}`)
}
handleObject(user)

// another way
handleObject({
    username: "sam",
    price: 399
})

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// arrays passing in function

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200, 400, 100, 600]));

