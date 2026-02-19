// let a;         declaration
// let a = 1;     initialization
// a = 2;         reassingment

// *********************************************************************************************************

// 1. var, let, and const
// dont use var because window available, functioned scope and redeclaration.
var a;
var a = 12;
let b = 16;
const c = 12;

// declaration and initialization
let d; // declaration
let e = 23; // declaration and initialization

// ********************************************************************************************************* 

// 2. Scope (Global, block, functional)
// global
let newNum = 12;

// block (inside curly braces)
{
    let blockNum = 25;
}

// functional scope
function anyfunc() {
    if (true) {
        var k = 12;
    }
}

// *********************************************************************************************************

// 3. reassigning and redeclaring
var variable = 2;
variable = 3; // reassigning

var variable = 4; // redeclaring : it is a problem, it should not use. 
//  redeclaration is not possible with let

// *********************************************************************************************************

// 4. Temporal Dead Zone
console.log(tdz);
let tdz = 12;

// throws an error
// Uncaught ReferenceError: Cannot access 'tdz' before initialization

// 

// *********************************************************************************************************

// 5. Hoisting
//  var -> hoist -> undefined
//  const and let -> hoist -> x
