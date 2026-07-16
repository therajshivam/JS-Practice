// Understanding prototype:

/*
Challenge : to create a custom property 

let myName = "hitesh     "
let channel = "chai     "
console.log(myName.truelength)

Create a property name truelength which will trim all the empty space and prints the length of the string. Whenever a string is declared it will trim and print length.
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
