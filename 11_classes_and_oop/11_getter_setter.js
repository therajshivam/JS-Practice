class User {
    constructor(email, password) {
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
        // return this._password.toUpperCase()
        return `${this._password}hitesh`
    }

    set password(value){
        this._password = value
    }
    // values when stored is setter but when someone ask then getter is returned, cant know whats written in class
}

const hitesh = new User("hitesh@h.in", "abc")
console.log(hitesh.password);
console.log(hitesh.email);

// sometimes we want fine grain control
// like if someone ask password then dont give password or give encrypted password
// some cases like if there is a class and it has properties and dont want to give access to others or give access after adding customise code 

// when we make properties in a class, in their name automatically getters and setters have method.

// getter and setter come together, must write both. 

// getter : to get a value from outside the class.
// setter : to set a value in the class.

// error: Maximum call stack size exceeded, if setting one value many times in the class
// solution: when setting value, make a new propery