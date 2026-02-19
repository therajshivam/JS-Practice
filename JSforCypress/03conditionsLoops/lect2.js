// conditional statements

let age = 26 ;

if (age >= 18) {
  console.log("you can vote");
} else {
  console.log("you can not vote");
}

let mode = "dark";
let color;

// if (mode === "dark") {
//   color = "black";
// }

// if (mode === "light") {
//   color = "white";
// }

// console.log(color);

if (mode === "dark") {
  color = "black";
} else {
  color = "white";
}
console.log(color);

// odd-even check
let num = 10;

if (num % 2 === 0) {
  console.log("even");
} else {
  console.log("odd");
}

// else-if condition
if (age < 18) {
    console.log("junior");
} else if (age > 60) {
    console.log("senior");
} else {
    console.log("middle");
}

if (mode === "dark") console.log(mode);

// TERNARY OPERATOR
// three oprands
// condition ? true output : false output

let result; 
age > 18 ? result = "adult" : result = "child"
console.log(result);

// Switch
let status = 200;

switch (status) {
  case 200:
    console.log("Success");
    break;
  case 404:
    console.log("Not Found");
    break;
  case 500:
    console.log("Server Error");
    break;
  default:
    console.log("Unknown Status");
}
