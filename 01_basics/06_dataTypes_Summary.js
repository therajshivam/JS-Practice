// DataTypes are of two types:- Primitive and Non-Primitive
// It is differentiated based on call by value and call by reference; 
// differentiated as how the data is stored in memory and how the data can be accessed from the memory.

// Primitive DataTypes
// Primitive values are stored directly in memory.
// Primitive values are immutable, meaning their value cannot be modified after creation.
// Call by Value : when copy, the original data reference not given, copy is given and changes is done on copy, hence the original data remains safe here, without any changes.
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt 
// stack memory
// Copy creates new value

const score = 100
const scoreVal = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; // or let userEmail = undefined

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(typeof id);
console.log(id === anotherId);

const bigNum = 6656462959295929592n


// Non-primitive DataTypes
// These store a reference (address) to the actual value, hence mutable (can be change).
// Call by Reference : Values whose references are stored in memory and accessed through those references.
// 3 Types : Array, Object, Functions
// heap memory
// Copy shares reference

const heros = ["shaktimaan", "naagraj", "doga"]; // Array
console.log("typeof [] ", typeof heros);

let Obj = {
    name: "shivam",         // Object
    age: 22,
}
console.log("typeof {}", typeof Obj);

const myFunction = function(){
    console.log("Hello World");        // Function
}
console.log("typeof (){}", typeof myFunction);


console.log(typeof bigNum)  // typeof : to know datatype 

// Return type of variables in JavaScript :-
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object  -- This is a legacy bug in JavaScript that cannot be fixed for compatibility reasons.
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object

// Functions are special objects in JavaScript. (internally function is an object)
// typeof function(){} returns "function".


// JS is dynamically typed language.
// not necessary to define datatypes.
// determines the type automatically at runtime.
// let x = 1 
// let x = "hi"
// let x = false 



// Call by Value 
// A copy of the value is passed.
// Changes do not affect the original variable.
let a = 10;
let b = a;
b = 20;
console.log(a); // 10
console.log(b); // 20

// Call by Reference
// A reference (address) to the same object is copied.
// Changes affect the original object.
let user1 = {
    name: "Shivam"
};
let user2 = user1;
user2.name = "Raj";
console.log(user1.name); // Raj
console.log(user2.name); // Raj