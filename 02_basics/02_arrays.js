// +++++++++++++++++++++++++++++++++++++++++ Merging two arrays +++++++++++++++++++++++++++++++++++++++++++++

const marvelHeros = ["thor", "ironman", "spiderman"]
const dcHeros = ["superman", "batman", "flash"]

// 1. push
marvelHeros.push(dcHeros) // gives array inside the array; dcHeros array becomes another element of this array
// push into axisting array

console.log(marvelHeros);
console.log(marvelHeros[3][1]); // accesing superman 

// 2. concat
const allHeros = marvelHeros.concat(dcHeros) // returns a new array
console.log(allHeros);

// 3. spread ; like dropping a glass and it spreads
const allNewHeros = [...marvelHeros, ...dcHeros]
console.log(allNewHeros);
// spread is easier way to merge arrays; it returns a new array

// 4. flat; Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// intresting case
const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]] // array inside array inside array

const realAnotherArray = anotherArray.flat(Infinity)
console.log(realAnotherArray);

// Duing web scraping data may come in another format like nodelist, object or string but we want it in array

console.log(Array.isArray("Hello"));
console.log(Array.from("Hello")); // from : converts into array
console.log(Array.from({name: "hello"})); // gives empty array in object; need to define keys or values to create an array

// mutliple variables or arrays to convert into an array
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // Returns a new array from a set of elements.