// destructuring of objects
const course = {
    courseName: "JS in Hindi",
    price: "999",
    courseInstructor: "shivam"
}
// course.courseInstructor -- its good but can be use below method for writing clean code as to not repeat same things
const {courseInstructor} = course
console.log(courseInstructor);
// or manually giving variable name
const {courseInstructor: instructor} = course
console.log(instructor);
// will be use in react

// JSON API 
// {
//     "name": "abc",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// Json is used to store apis values
// it is like in object formate
// difference is objects have variable name
// json key is also in string formate