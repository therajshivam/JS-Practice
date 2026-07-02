// THIS keyword and Arrow function

// THIS keyword used to refer the current context inside the existing scope. 
// this refers to the current execution context.

const user = {
    username: "abcd",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to the website`);
        console.log(this); //gives current context
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()  // the value was not hardcode using this, sam is printed here because the current context username value was not changed

// console.log(this); // in node environment this refers to an empty object because there is no context in global.
// in the browser, the global object is window object

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function chai () {
//     let username = "hitesh"
//     console.log(this.usename); // undefined; this context can only be work with objects not with function
// }
// chai() // this is a function which can be used for the repurpose of the function which is called as an arrow function
// In a regular function, this does not refer to local variables.

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// declaring function using the arrow function

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.usename);           // output is undefined
// }

// ARROW FUNCTION

const chai = () => {
    let username = "hitesh"
    console.log(this);   
}
// chai()

// Arrow functions do not have their own this.
// They inherit this from the surrounding scope.

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// BASIC ARROW FUNCTION (EXPLICIT)
// Explicit return - Uses return keyword.

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3, 4));

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// IMPLICIT RETURN ARROW FUNCTION 
// If the function body is a single expression, return is implicit.

// no need of adding return , we have assumed , it is a one line code

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)
// console.log(addTwo(3, 4));

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// returning an object

const addTwo = (num1, num2) => ({username: "abcd"})
console.log(addTwo(3, 4));
// Wrap object in () to return it implicitly.
