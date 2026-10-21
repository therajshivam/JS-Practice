// destructuring : extract values from arrays and objects, then assign them to variables in a convenient way.
// [] = to perform array destructuring
// {} = to perform object destructuring

// swap values of two variables
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a);
console.log(b);

// swap 2 elements in an array
const colors = ["red", "green", "blue", "black", "white"];
[colors[0], colors[4]] = [colors[4], colors[0]]
console.log(colors);

// assign array elements to variables
const moreColors = ["red", "green", "blue", "black", "white"];
const [firstColor, secondColor, thirdColor, ...extraColors] = moreColors;
console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);

// extract values from objects
const person1 = {
    firstName : "Mickey",
    lastName : "Mouse",
    age : 20,
    job : "builder"
}

const person2 = {
    firstName : "Donald",
    lastName : "Duck",
    age : 15
}

const {firstName, lastName, age, job='unemployed'} = person2
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);

// destructure in function parameters

function displayPerson({firstName, lastName, age, job='unemployed'}) {
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);
}

const person3 = {
    firstName : "Mickey",
    lastName : "Mouse",
    age : 20,
    job : "builder"
}

const person4 = {
    firstName : "Donald",
    lastName : "Duck",
    age : 15
}




displayPerson(person3)
displayPerson(person4)