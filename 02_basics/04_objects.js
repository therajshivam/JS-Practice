// objects constructors; singletons
// declaring
const tinderUser = new Object() 
// const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.idLoggedIn = false
// console.log(tinderUser);

// nesting in objects
// declaring in which another object is inside an object
const regularUser = {
    email: "some@gmail.com",
    fullname: {                           
        userfullname: {
            firstname: "Shivam",
            lastname: "Raj",
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname); // accessing nested values
// Optional chaining; ? ; use after an object as prectiong if the value doesnot exists (can be useful when data coming from apis)
// Eg: regularUser.fullname?.userfullname?.firstname

// Merging objects
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// 1. using Object.assign
const ob4 = Object.assign({}, obj1, obj2, obj3) 

// 2. using spread operator; mostly used
const obj4 = {...obj1, ...obj2, ...obj3} 
// console.log(obj4);

// 3. if values come from database
const users = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 2,
        email: "b@gmail.com"
    },
    {
        id: 3,
        email: "c@gmail.com"
    }
]
users[1].email

// accesing values and keys from object
console.log(tinderUser);

console.log(Object.keys(tinderUser)); // returns an array of object keys
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

// to check weather this property is in the object or not to prevent it from crashing
console.log(tinderUser.hasOwnProperty('idLoggedIn'));
console.log(tinderUser.hasOwnProperty('idLogged'));