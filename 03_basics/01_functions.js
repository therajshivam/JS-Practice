// functions 
// it is just a way of packaging the codes inside a package and we can use the copy of package anywhere and use it.

function sayMyName() {
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("V");
    console.log("A");
    console.log("M");
}
sayMyName()

// sayMyName => funuction reference
// sayMyName() => funuction execution


// Function for add two numbers


// ++++++++++++++++++++++++++++++++++++++++++++++
function addTwoNumbers(number1, number2) {   // parameters
    console.log(number1 + number2);
}

addTwoNumbers(3, 4)  // arguments

// parameters : when we make defination of the function, then the inputs inside it are called parameters.
// arguments : when we call the fuunction hen the value we pass in it then we call it arguments.

const result = addTwoNumbers(3, 4)
console.log("Result: ", result);  // Result:  undefined
// console print doesnot means it is returning the value.

// +++++++++++++++++++++++++++++++++++++++++++++++++
function addTwoNumbers(number1, number2) { 
    let result = number1 + number2
    return result
    console.log(abc); // it will never execute; because by defalut function rules says after returning a function, the function will not do any work.
}
const result = addTwoNumbers(3, 4)
console.log("Result: ", result);  

// ++++++++++++++++++++++++++++++++++++++++++++++++++
// adding number 
function addTwoNumbers(number1, number2) { 

    // let result = number1 + number2
    // return result      // funtion will not work after returning it

    //  OR 

    return number1 + number2
}

const result = addTwoNumbers(3, 5)
// console.log("Result: ", result);  

// ++++++++++++++++++++++++++++++++++++++++++++++++

function loginUserMessage(usename = "sam"){
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
