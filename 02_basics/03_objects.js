// two ways of declaring objects : as literals and as constructors

// singleton : when object is declare as constructors it becomes singleton
// Object.create => constructor method

// object literals

// declaring objects
// name => keys ; shivam => values
// in objects, we can define keys and values

const mySym = Symbol("key1") // declaring symbol

const JsUser = {
    name: "Shivam",
    "full name": "Shivam Raj",
    [mySym]: "mykey1", // square bracket syntax for symbols
    age: "20",
    location: "Jaipur",
    email: "shivam@google.com",
    isLoggedIn: "false",
    lastLoginDays: ["Monday", "Saturday"]
}

// accessing objects
console.log(JsUser.email);  
console.log(JsUser["email"]);
console.log(JsUser["full name"]); // another way; use to access objects under "" and symbols
console.log(JsUser[mySym]);

// changing object values
JsUser.email = "shivam@chatgpt.com"

// locking values; anyone cant change the value
Object.freeze(JsUser)
JsUser.email = "shivam@microsoft.com"

// console.log(JsUser);

// adding functions in objects
JsUser.greeting = function(){
    console.log("Hello JS user");
}

// String interpolation; referencing name in the object
JsUser.greetingTwo = function(){  
    console.log(`Hello JS user, ${this.name}`); //use backticks
}
// if we have to reference same object, write "this."

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());