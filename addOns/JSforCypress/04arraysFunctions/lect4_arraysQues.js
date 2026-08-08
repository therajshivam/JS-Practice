// Q1
let marks = [85, 97, 44, 37, 76, 60]

let sum = 0
for (const mark of marks) {
    sum += mark;
}
let avg = sum/marks.length
// console.log(avg);

// Q2
let prices = [250, 645, 300, 900, 50]

// let i = 0;
// for (const price of prices) {
//     let offer = price/10
//     prices[i] -= offer;
//     console.log(`value after offer = ${prices[i]}`);
//     i++;
// }

for(let i = 0; i < prices.length; i++) {
    let offer = prices[i] / 10
    prices[i] -= offer
}
console.log(prices);





