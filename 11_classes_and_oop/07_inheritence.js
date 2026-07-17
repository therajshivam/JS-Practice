// inheritance

class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password){
        // super keyword
        super(username)
        this.email = email
        this.password = password
    }

    addCourses(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("Chai", "chai@gmail.com", "123")
chai.addCourses()
chai.logMe()

const tea = new User("Tea")
// tea.addCourses()
// tea dont have access to addCourses() method 
tea.logMe()

console.log(chai === tea); // false
console.log(chai === Teacher); // false

console.log(chai instanceof Teacher); // true
console.log(chai instanceof User); // true