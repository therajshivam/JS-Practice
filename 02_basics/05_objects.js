// destructuring of objects

const course = {
    courseName: "JS in Hindi",
    price: "999",
    courseInstructor: "shivam"
}

// course.courseInstructor 

const {courseInstructor} = course
console.log(courseInstructor);

const {courseInstructor: instructor} = course
console.log(instructor);

// JSON API 

// {
//     "name": "abc",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// Json is used to store apis values
// it is like in object formate
// diff is objects have variable name
// json key is also string formate