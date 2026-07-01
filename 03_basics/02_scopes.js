// {} can represent either:
// 1. A block scope (if, for, while, function body)
// 2. An object literal
// It depends on the context.

// Global scope: Variables declared outside any block or function. They can be accessed from anywhere.
// Block scope: Variables declared with let and const inside {}, are only accessible inside that block.

if (true) {
    let a = 10
    const b = 20
    var c = 30
}
// console.log(a);
// console.log(b);
// console.log(c); --> var leaks out of the block scope

// var is function-scoped, not block-scoped.
// Avoid using var in modern JavaScript.

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let a = 300

if (true) {
    let a = 10
    const b = 20
    console.log("INNER: ", a);
}

console.log("Global: ", a);

// Variable Shadowing: A local variable with the same name hides the outer variable.

// global scope in node and browser are different.
// inside browser is called core scope.


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// SCOPE LEVEL

// NESTED SCOPE IN FUNCTION
// Inner scope can access outer scope.
// Outer scope cannot access inner scope.

// inner "two" nested scope items can take values from "one" scope but the "one" cant take from inner 

// Closure: An inner function remembers and can access variables from its outer function, even after the outer function finishes.

function one(){
    const username = "abc"

    function two(){
        const website = "youtube"
        console.log(username);
    }

    // console.log(website);    // cant be accessed outside the scope, as its scope is only till "two" function

    two()

}
// one()

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// NESTED SCOPE IN IF-ELSE

if (true) {
    const username = "abc"
    if (username === "abc") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website); --> cant access
}
// console.log(username); --> cant access


// +++++++++++++++++++++++ INTERESTING ++++++++++++++++++++++++++++++++++
// HOISTING => how function is declared, stored and executed and how variables are treated 
// JavaScript moves declarations to the top of their scope before executing the code.

addOne(5) // can be access before declaration of the function
function addOne(num) {
    return num + 1
}

// addTwo(5) // hoisting, cannot access before declaration of the function
// addTwo => function expression 
const addTwo = function(num){  // declared in variable
    return num + 2
}

// Function expressions are NOT hoisted like function declarations.


// Scope Chain:
// JavaScript looks for a variable in the current scope first.
// If not found, it checks the parent scope.