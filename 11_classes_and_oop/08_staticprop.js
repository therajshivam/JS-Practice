// static keyword

class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`); 
    }

    // we want after creation of user immediately gets a unique id
    // createId(){
    //     return `123`
    // }

    // sometimes we dont want to give access of this method to all objects instanctiate from this method
    // in that case we use 'static' keyword
    static createId(){
        return `123`
    }
}

const hitesh = new User("hitesh")
// console.log(hitesh.createId())

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
iphone.logMe();
