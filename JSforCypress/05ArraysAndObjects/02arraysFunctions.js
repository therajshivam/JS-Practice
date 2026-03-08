const marvelHeroes = ["ironman", "captain america", "thor", "hulk", "hawkeye", "black widow"]
const dcHeroes = ["batman", "superman", "aquaman", "flash", "wonder woman"]

// marvelHeroes.push(dcHeroes)
// console.log(marvelHeroes);
// console.log(marvelHeros[3][1]) // not a good syntax

// concat
// const allHeros = marvelHeroes.concat(dcHeroes)
// console.log(allHeros); // gives new array

// spread
const allNewHeros = [...marvelHeroes, ...dcHeroes]
console.log(allNewHeros);

// flat
// Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// rarely
const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const realAnotherArray = anotherArray.flat(Infinity)
console.log(realAnotherArray);

// Duing web scraping data may come in another format like nodelist, object or string but we want it in array
console.log(Array.isArray("hello")) // checks if the give is array or not