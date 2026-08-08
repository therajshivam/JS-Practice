// ARRAYS
// collection of same type of items -> linear way

let marks = [97, 62, 85, 59, 74, 81]
console.log(marks, typeof marks);

// property
console.log(marks.length);

let heroes = ["hulk", "ironman", "captain america", "spiderman", "batman", "antman"]
console.log(heroes, typeof heroes);

// array indices
console.log(marks[4]);

marks[0] = 50;
console.log(marks, typeof marks);

// looping over an array
// Eg : print all elements of an array

// for loop
let heroes2 = ["hulk", "ironman", "captain america", "spiderman", "batman", "antman"]
for(let i = 0; i<heroes2.length; i++){
    console.log(heroes2[i]);
}

// for of

for (let hero of heroes2) {
    console.log(hero);
}

for (let hero of heroes2) {
    console.log(hero.toUpperCase());
}