// In this codefile we will understand about object and prototype behaviour of js.

/*
Prototype Behaviour of JS
    Default behaviour of js is prototypal behaviour.

    Prototypal behaviour means that JS always try to get what is expected thing it wants, if it doesnt get that thing then it go to the upper layer, if again js dont find what it expects it get more upper layer (parents, grandparents, till all) and it continues going to the upper layers until it got the null value.

    this, new, keyword, classes, prototypal inheritance works on it
*/

/*
Diagram is attached.

Object dont have any parent, and its properties is of its own and object's prototype reference come from null.

    In JS : 
        Array declared -----> Object (Array is also an object) -----> null
        String -------> Object -------> null
*/

// code for understanding about function prototype behaviour
function multiplyBy5(num) {
    return num * 5;
}

// checking dot methods with function to check is function too object?
multiplyBy5.power = 2

console.log(multiplyBy5(5));        // 25
console.log(multiplyBy5.power);     // 2    
console.log(multiplyBy5.prototype); //{}

/*
Understandings :
    - In JS everything is object.
    - Function's working behaves like a function but if we want then we can make function behave like an object too.
    - Which means : 
        Function -----> Object -----> null

    What is empty object {} in the output?
        - There is bydefault some contexts are set. It is "this" of that method.
        - .prototype gives some methods access and internal propperties access.

*/

function createUser(username, score) {
    this.username = username;
    this.score = score;
}

// declaring custom functions as properties inside a createUser function as treating createUser as an Object.Injecting increment into createUser.
createUser.prototype.increment = function () {
    this.score++
}

createUser.prototype.printMe = function () {
    console.log(`price is : ${this.score}`)
}

const chai = new createUser("chai", 25)
const tea = createUser("tea" , 250)
// here both users using same function createUser, hence these can get confuse for which they have to take increment option. because createUser dont have context as what it need to increase. hence to give context in this case :
        // remember : "jisne bhi bulaya hai wapas jao"
        // we will write : this.score++


// Using custom properties:
    // behind the scene JS handles going to upper layers 
    // so we dont need to write ex: myArray.prototype.map() 
    // we can write simple myArray.map()
    // in similar way :
chai.printMe()
// interview imp: importance of new keyword
    // now here is a problem - "TypeError: Cannot read properties of undefined (reading 'printMe')"
    // here properties are injected but we havnt told the function that we have added this additional property.
    // To tell this we use NEW Keyword.
    // new keyword should be injected. 


/*
Interview important

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.
*/
