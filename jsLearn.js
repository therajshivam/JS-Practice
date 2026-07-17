// static keyword

class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`); 
    }

    // we want after creation of user immediately gets a unique id
    static createId(){
        return `123`
    }

    // sometimes we dont want to give access of this method to not all objects initiated from this method
}

const hitesh = new User("hitesh")
console.log(hitesh.createId())