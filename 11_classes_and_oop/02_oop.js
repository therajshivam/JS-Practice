
// OBJECT LITERALS
// literally making an object  
// it is the base unit in js

const user = {
    username: "shivam",
    loginCount: 5,
    signedIn: true,

    getUserDetails: function () {
        console.log("Got user details from DB");
        console.log(`Username: ${this.username}`);
        console.log(this); // current context for this "this"
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());

// this keyword is used to give current context. 
// console.log(this);
// global context this - gives empty {}
// this global context changes, in browser we get window object which is global object with this.

// constructor function is used to minimize the repetiton of making many objects of similar type.

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// CONSTRUCTOR FUNCTION
// Constructor functions are blueprints used to create multiple similar objects.git 
// constructor function allows to create multiple instances from one object literal. 
// it gives a new instance (copy)

// const promiseOne = new Promise();
// const date = new Date();

// new keyword is a constructor function.
// some values like promise, date ; we want new instance and dont want to affect old values, and keep their own values.
// new keyword is use to create new context and is called constructor function.

function User(username, loginCount, isLoggedIn) {

    // properties
    this.username = username
    // left side username is variable name and right side username is value passed 
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    // methods
    this.greetings = function () {
        console.log(`Welcome ${this.username}`);
    }

    return this
}

// if we dont "return this" here : its default implicitly defined 

const userOne = new User ("hitesh", 12, true)
const userTwo = new User ("ChaiAurCode", 11, false)
console.log(userOne);
// here userTwo overrided all the values 
// to avoid this issue use new(constructor function) for geting a new instance
console.log(userTwo);

// internal working : 
// when new keyword is use:
    // 1. an empty object is created and is called instance.
    // 2. a constructor function is called because of new keyword, it packs all the arguments and pack it in it and give.
    // 3. all the arguments get inject into this keyword.
    // 4. it get through function to us.


// Constructor Property :
// it is reference about its own
console.log(userOne.constructor); // output : [Function: User]
 
// constructor function have concepts of abstraction and encapsulation

// learn about instanceof