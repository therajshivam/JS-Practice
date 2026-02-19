// JS is dynamically types language.
// DataTypes are of two types:- Primitive and Non-Primitive

// 1. Primitive DataTypes
// Call by Value : when copy, the original data reference not given, copy is given and changes is done on copy.
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt 

const score = 100
const scoreVal = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; // or let userEmail = undefined

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const bigNum = 6656462959295929592n

// 2. Non-primitive DataTypes
// Reference Type : Values who's reference directly allocated in the memory
// Types : Array, Object, Functions

const heros = ["shaktimaan", "naagraj", "doga"]; // Array

let Object = {
    name: "shivam",         // Object
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");        // Function
}

// typeof() : to know datatype 
console.log(typeof bigNum)

// non primitive datatypes give "function" typeof; function typeof gives "object function"

// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object