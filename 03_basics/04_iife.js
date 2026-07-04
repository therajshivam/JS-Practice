// Immediately Invoked Functions Expressions (IIFE)
// syntax : () ()  
// used to execute function immediately
// used to ignore pollution from global scope

(function chai()  {
   // named iife
   console.log(`DB CONNECTED`);
})(); // end with semicolon

( (name) => {
   // simple iife or unnamed iife 
   console.log(`DB CONNECTED TWO ${name}`) // passed with parameter
} )('abcd');

// while writing two IIFE, add semicolon ;
