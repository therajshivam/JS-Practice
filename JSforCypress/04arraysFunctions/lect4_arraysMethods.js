// ARRAY METHODS
// a string is immutable, meaning its content cannot be altered after creation.
// methods in array can change the array or do not change it instead returns new array.


// push() : add to end

let foodItems = ["potato", "apple", "mango", "litchi", "tomato"];
foodItems.push("chips", "burger", "paneer");
console.log(foodItems);

// pop() : delete from end and return

let veges = ["potato", "apple", "mango", "litchi", "tomato"];
veges.pop();
console.log(veges);
 
// toString : change array into strings (cant change original array)
let items = ["potato", "apple", "mango", "litchi", "tomato"];
console.log(items.toString());

let marks = [85, 97, 44, 37, 76, 60]
console.log(marks.toString());

// concat() : join multiple arrays and return result 
let marvel = ["thor", "spiderman", "ironman"]
let dc = ["superman", "batman", "flash"]
let indian = ["shaktiman"]

let heroes = marvel.concat(dc, indian)
console.log(heroes);

// unshift : add to start
marvel.unshift("antman")
console.log(marvel);

// shift : delete from start and return
let deleted = marvel.shift()
console.log("deleted : ", deleted);
console.log(marvel);
 
// slice() : returns a piece of the array ; slice(startIdx, endIdx) -- dont change original array
let superHeroes = ["thor", "spiderman", "ironman", "superman", "batman", "flash"]
console.log(superHeroes);
console.log(superHeroes.slice(1, 4));
console.log(superHeroes.slice(1));
console.log(superHeroes.slice());

// splice() : change original array (add, remove, replace) ; splice(startIdx. deLCount, newEl1...) - change original array
let arr = [1, 2, 3, 5, 6, 8, 9, 11]
// arr.splice(2, 2, 101, 102)
// console.log(arr);

// add element
// arr.splice(2, 0, 101,102)
// console.log(arr);

// delete element
arr.splice(3, 1)
console.log(arr);

// replace element
arr.splice(3, 1, 101)
console.log(arr);
