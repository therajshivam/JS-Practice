//Class
// constructor will call immediately after the intialisation of a object from the class (new keyword)

// Class syntax
class User {
    // not necessary to always write constructor, but its a good practice
    constructor (username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password
    }

    // it works like function, in class it is called method
    encryptPassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User ("chai", "chai@code.in", "123")

console.log(chai.encryptPassword());
// console.log(chai.username.toUpperCase());
console.log(chai.changeUsername());


// Behind the scene (if classes wont exist then how its working)

function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function () {
    return `${this.password}abc`
}
User.prototype.changeUsername = function () {
    return `${this.username.toUpperCase()}`
}

const chai = new User ("chai", "chai@code.in", "123")

console.log(chai.encryptPassword());
console.log(chai.changeUsername());