const fruits = [{name: "apple", color: "red", calories: 95},
                {name: "orange", color: "orange", calories: 45},
                {name: "banana", color: "yellow", calories: 105},
                {name: "coconut", color: "white", calories: 159},
                {name: "pineapple", color: "yellow", calories: 37}];

// access object properties
// fruits[0].name
console.log(fruits[1].name);
console.log(fruits[1].calories);
               
// push() to add a new object
fruits.push({name: "grapes", color: "purple", calories: 62})
console.log(fruits);

// pop() removes last object
fruits.pop();
console.log(fruits);

// splice () - remove elements at certain indices
// fruits.splice(1, 2)
// console.log(fruits);

// forEach() - loop through elements
fruits.forEach(fruit => console.log(fruit.name))

// map() - run each element through a function and return a new array
const fruitNames = fruits.map(fruits => fruits.name)
console.log(fruitNames);

// filter() - return a new array after using each element and checking a condition
const yellowFruits = fruits.filter(fruit => fruit.color === "yellow")
console.log(yellowFruits);

const lowCalFruits = fruits.filter(fruit => fruit.calories < 100)
console.log(lowCalFruits);

// reduce() - return a single value 
