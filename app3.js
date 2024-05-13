// conditional branching - if, else,else if

// let age = 20;
// if (age >= 18) {
//     console.log("you are eligible to vote");
// }

// let year = 2024;
// if (year%4==0){
//     console.log("this is a leap year");
//     console.log("i can vote");
// } else{
//     console.log("this is not a leap year");
// }

// let speed = 10;
// if (speed<20){
//     console.log("you are driving too slow");
// } else if (speed>=20 && speed<=60){
//     console.log("you are driving at a moderate speed");
// } else {
//     console.log("you are driving too fast");
// }

let age=17;
let canvote = (age>=18) ? "you are eligible to vote" : "you are not eligible to vote";
console.log(canvote);
