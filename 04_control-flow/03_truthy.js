// falsy values :- (which values are assumed false)
// false, 0, -0, BigInt 0n, "", null, undefined, Nan

// truthy values
// "0", 'false', " ", [], {}, function() {}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Array

const userEmail = []

if (userEmail) {
    // console.log("Got user email");
} else {
    // console.log("Dont have user email");
}

if (userEmail.length === 0) {
    // console.log("Array is empty");
} 

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Object

const emptyObject = {}

if (Object.keys(emptyObject).length === 0){
    // console.log("Object is empty");
}  

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// false == 0
// true   // output
// false == ' '
// true   // output
// 0 == ''
// true   // output

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Nullish Coalescing Operator (??): null / undefined

// let val1 = 5 ?? 10
// let val1 = null ?? 10
// let val1 = undefined ?? 15
// let val1 = null ?? 15 ?? 10


// console.log(val1);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
