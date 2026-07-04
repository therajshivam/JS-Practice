// 
/*
if(condition){
    //code
}
*/
// true => condition will be execute , false => condition will not execute
// comparison operators in condition : <, >, <=, >=, ==, !=, ===, !==

const temperature = 41
if (temperature < 50 ) {
    console.log("less than 50");
} else {
console.log("temperature greater than 50");
}
console.log("execute");

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// scope related
const score = 200

if (score > 100) {
    let power = "fly";
    console.log(`User power: ${power}`);
} 

// console.log(`User power: ${power}`); // power outside the scope, hence cant access outside the block scope

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Short hand notation
// avoid writing this code - not a clean code
// const balance = 1000;        
// if (balance > 500) console.log("test"), console.log(test2);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// nested if-else

const balance = 800;

if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750 ) {
    console.log("less than 750");
} else if (balance < 900 ) {                      
    console.log("less than 900");
} else {
    console.log("less than 1200");
}

// real life usecase example
const userLoggedIn = true
const debitCard = true

if (userLoggedIn && debitCard && 2==3) {             // multiple conditon checking (and) (all should be true)
    console.log("Allow to buy courses");
}

const loggedInFromGoogle = false
const loggedInFromEmail = true

if (loggedInFromGoogle || loggedInFromEmail) {        // multiple checking (or) (any one can be true)
    console.log("User logged in");
}