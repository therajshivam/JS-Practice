// Immediately Invoked Functions Expressions (IIFE)
// syntax : (function(){})();
// used to execute function immediately
// // Creates a private scope and avoids polluting the global scope.

(function chai()  {
   // named iife
   console.log(`DB CONNECTED`);
})(); // end with semicolon

( (name) => {
   // Unnamed (Arrow) IIFE
   console.log(`DB CONNECTED TWO ${name}`) // passed with parameter
} )('abcd');

// while writing two IIFE, add semicolon ;
