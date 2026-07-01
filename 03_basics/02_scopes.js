// {} => scopes; comes with function or if-else; not with object bcz that is called object declaration

// global scope: outside the scope, can be access inside the function
// block/local scope: inside the scope, cant

if (true) {
    let a = 10
    const b = 20
    var c = 30
}
// console.log(a);
// console.log(b);
// console.log(c); --> var leaks out of the block scope

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let a = 300

if (true) {
    let a = 10
    const b = 20
    console.log("INNER: ", a);
}

console.log("Global: ", a);

// global scope in node and browser are different.
// inside browser is called core scope.


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// SCOPE LEVEL

// NESTED SCOPE IN FUNCTION

// inner "two" nested scope items can take values from "one" scope but the "one" cant take from inner 

// CLOSURE

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
// declaring functions

addOne(5) // can be access before declaration of the function
function addOne(num) {
    return num + 1
}

// addTwo(5) // hoisting, cannot access before declaration of the function
// addTwo => function expression
const addTwo = function(num){  // declared in variable
    return num + 2
}
