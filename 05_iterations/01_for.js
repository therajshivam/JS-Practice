// for loop

// counting till 10 -- with a condition 
for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is the best number");
    }
    // console.log(element);
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// nested loop
for (let i = 0; i <=10; i++) {
    // console.log(`Outer loop value: ${i}`);
    for (let j = 0; j <= 10; j++) {
        // console.log(`Inner loop value: ${j} and inner loop ${i}`);
    }
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// table printing
for (let i = 1; i <=10; i++) {
    // console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(i + ' * ' + j + ' = ' + i*j);
        // console.log(`${i} * ${j} = ${i*j}`);
    }
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// for-loop and Array

let myArray = ["flash", "batman", "superman"]
// console.log(myArray.length);

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element);
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// break and continue

// break immediately exits the loop.
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        // console.log("detected 5");
        break;
    }
    // console.log(`value of i is: ${index}`);
}

// continue skips the current iteration and moves to the next one.
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        // console.log("detected 5");
        continue
    }
    // console.log(`value of i is: ${index}`);
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// patttern printing
for (let i = 0; i <5; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
        row += "*";
    }
//    console.log(row)
}
// OR
for (let i = 1; i <= 5; i++) {
    // console.log("*".repeat(i));
}

// Outer loop → Number of rows
// Inner loop → Number of stars