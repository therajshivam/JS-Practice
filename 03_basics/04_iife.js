// Immediately Invoked Functions Expressions (IIFE)
// syntax : () ()  
// used to execute function immediately
// used to ignore pollution from global scope

(function chai()  {
   // named iife
   console.log(`DB CONNECTED`);
})();

( (name) => {
   console.log(`DB CONNECTED TWO ${name}`)
} )('abcd')

// while writing two IIFE, add semicolon ;