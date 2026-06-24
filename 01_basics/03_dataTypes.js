"use strict"; // treat all JS code as newer version

// alert ( 3 + 3 ) // we are using nodejs, not browser // runs only inside browser console


// dont write code like this
console.log( 3 
    + 3 ); // code readiblity should be high


// datatypes
let name = "Shivam"     // string
let age = 18            //numbers
let isLoggedIn = false  // boolean
let state;              // undefined
let temp = null;       


// premitive dataTypes :
// number => 2 to power 53 (range)
// bigint
// string => "" or '' , prefer to use ""
// boolean => true/false
// null => stand alone value, represent of emply value
// undefined => value is not yet assinged
// symbol => unique ; mostly use in react

// object


console.log(typeof undefined); //undefined
console.log(typeof null); //object
console.log(typeof "hey"); //string
console.log(typeof age); //number