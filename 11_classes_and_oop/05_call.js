// call

// to hold the reference of a function which is called in another function, call is used

function SetUsername(username) {
    // complex DB calls
    this.username = username;
    console.log("called");
}

function createUser(username, email, password) {

    SetUsername.call(this, username)  // Here, 'this' gives current context if it is not in the callstack. 
    
    this.email = email;
    this.password = password;
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);
