// High order array loops

// forEach() is an array method.
// forEach() executes a callback function once for every element in an array.

const coding = ["js", "ruby", "java", "py", "cpp"]

coding.forEach(function (item) {
    // console.log(item);
})

// callback function is inside forEach()
// forEach() accepts a callback function, which is executed for every array element.

// with arrow function
coding.forEach( (item) => {
    // console.log(item);
} )


// function reference - with declaring seperate function and taking reference in forEach()
function printMe(item) {
    console.log(item);
}
// coding.forEach(printMe)


// three parameters in forEach() - element, index and array 
coding.forEach( (item, index, arr) => {
    // console.log(item, index, arr);
} )

// -------------------------------------------------------------------------------
// [{}, {}, {}] -- array of objects
// objects inside array (mostly these values comes from db)

const myCoding = [
    {
        languageName: "javascipt",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
} ) 