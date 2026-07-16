// Understanding prototype:

/*
Challenge : to create a custom property 

let myName = "hitesh     "
let channel = "chai     "
console.log(myName.truelength)

Create a method name truelength which will trim all the empty space and prints the length of the string. Wr can use that method with any string.
*/


let myHeros = ['thor', 'spiderman']
let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    // injecting function in the key of object
    getSpiderPower: function(){
        console.log(`spidey power is : ${this.spiderman}`);
        
    }
}

// We are trying to make a property which will do : whenever any object is declared it will have our custom property present in it. As arrays, functions and string all have upper layer as object.

Object.prototype.hitesh = function () {
    console.log(`hitesh is present in all objects`);
}

heroPower.hitesh()
myHeros.hitesh()

/*
Both have hitesh() our custom property in it.
We have accessed the top level hierarchy(object) and added a new property.Now all the childs will get that method in it.
*/

// Now, if we inject method in the Array will it be accessible in its upper hierarchy(objects) or not.

Array.prototype.heyHitesh = function () {
    console.log(`Hitesh says hello`);
}

myHeros.heyHitesh()
// heroPower.heyHitesh()  // Object dont have access to custom method injected in the array


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// inheritance
// prototypal inheritance


// old syntax : __proto__
const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport ={
    makeAssignment : 'JS Assignment',
    fullTime : true,
    __proto__ : TeachingSupport
}

Teacher.__proto__ = User

/*
Every object is an instance in its own. No object is sharing their key,values to each other.

Here, we want information exchange between these objects. 
For linking nowadays we have .prototype which have use in above examples.

But in older times, __proto__ was for information exchange.
*/

// Avoid to use the above old syntax.

// Modern Syntax : .setPrototypeOf()

Object.setPrototypeOf(TeachingSupport, Teacher)
// TeachingSupport can access properties of Teacher.

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Solution of the challenge:

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);   
}

anotherUsername.trueLength()

"hitesh".trueLength()
"iceTea".trueLength()