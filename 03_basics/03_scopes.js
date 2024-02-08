// {} => scopes; comes with function or if-else; not with object bcz that is called object declaration

// global scope: outside the scope, can be access inside the function
// block/local scope: inside the scope, cant

// var c = 30

let a = 300

if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
}

// console.log(a);

// global scope in node and browser are different.
// inside browser is called core scope.


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// NESTED SCOPE IN FUNCTION

// inner "two" nested scope items cam take values from "one" scope but the "one" cant take from inner 

// closure

function one(){
    const username = "abc"

    function two(){
        const website = "youtube"
        console.log(username);
    }

    // console.log(website);   

    two()

}

// one()

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// NESTED SCOPE IN IF-ELSE

if (true) {
    const username = "abc"
    if (username === "abc") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);


// +++++++++++++++++++++++ INTERESTING ++++++++++++++++++++++++++++++++++
// HOISTING => how function is declared, stored and executed and how variables are treated 
// declaring functions

function addOne(num) {
    return num + 1
}
addOne(5)

// addTwo => expression
const addTwo = function(num){  // declared in variable
    return num + 2
}
addTwo(5)

// diff between them

addOne(5)                                // can be access before declaration of the function
function addOne(num) {
    return num + 1
}

addTwo(5)                                // cannot be access before declataion of the function
const addTwo = function(num){  
    return num + 2
}
