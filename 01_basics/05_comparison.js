// number comparison
console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1); // Basic comparisons; no problem; both sides have numbers


// not same datatype comparison
console.log("2" > 1);
console.log("02" > 1); // inconsistency in lang; avoid these conversions

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true
// The reason is that the equality check == and comparisons > < >= <= work differently.
// Comparisons convert null to a number, treating it as a 0.
// Thats why (3) null >= 0 is true but (1) null > 0 is false. 
// inconsistency in lang; avoid these conversions

console.log(undefined > 0); // false
console.log(undefined == 0); // false
console.log(undefined >= 0); // false
// undefined will give false whatever the comparison or equality check.
// inconsistency in lang; avoid these conversions

// in js, comparison operators (< > <= >=) and equality operator (==) behaves differently from each other.

// === => strict check
// it checks the values and its data types with conversion
console.log("2" === 2); // false