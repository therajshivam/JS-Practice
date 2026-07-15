// object literals 
// literally making an object ; it is base unit

const user = {
    username: "shivam",
    loginCount: 8, 
    signedIn: true,

    getUserDetails: function() {
        // console.log("got user details from DB");
        // console.log(`Username: ${this.username}`);
        console.log(this); // current context
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this); // global context : gives empty {}; changes in browser

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// CONSTRUCTOR FUNCTION

// constructor function allow us to make multiple instances from one instance

// const promiseOne = new Promise()
// const date = new Date()

// "new" keyword is a constructor function

function User(username, loginCount, isLoggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    // return this   // pass on the object
    // if we write or not return this funtion , it will implicitly get define,no need to do
}

const userOne = new User("shivam", 12, true)
// const userTwo = User("hitesh", 11, false)  // overrides the value; there fore use "new"
const userTwo = new User("hitesh", 11, false)
console.log(userOne.constructor);  // constructor property is reference of its own
console.log(userTwo);

// constructor function gives new instance always

// when a "new" keyword is use, sabse phle empty object create hota hai jisko instance bola jata hai
// steps:
// 1. naya object create hua hai
// 2. constructor function call hota hai new keyword k karan;ye jitne bhi arguments hai use pack krta hai
// 3. this keyword will inject in it  
// 4. we get it in a function


// study about instaceof method 