// function areaoftherectangle(length,breadth){                                              Q=1
//     return length * breadth;
// }

// const area = areaoftherectangle(20,30);
// console.log("Area of Rectangle",area);


// function squareofnumber(number){                                                         Q=2
//     return number*number;
// }

// const square=squareofnumber(10);
// console.log("square of number",square);


// function integerpart(a ,b){                                                                  Q=3
//     return (parseInt(a/b));
// }
// const integer = integerpart(10,3);
// console.log("integer part",integer);


// function lastdigit(number){                                                                 Q=4
//     return number%10;
// }
// const lastnumber = lastdigit(13);
// console.log("last digit",lastnumber);


// function cubeofnumber(a){                                                                      Q=5
//     return a*a*a;
// }
// const cube = cubeofnumber(5);
// console.log("cube of the number",cube);


// function reverseOfTheNumber(a) {                                                            Q=6
//     let sum = 0;
//     while (a > 0) {
//         sum = sum * 10 + (a % 10);
//         a = Math.floor(a / 10);
//     }
//     return sum;
// }

// let num = 123; 
// let reverse = reverseOfTheNumber(num);

// console.log("Reverse of the number", reverse);



// function swap(a, b) {                                              Q = 10
//     let c = a;
//     a = b;
//     b = c;
//     return [a, b];
// }

// let a = 10, b = 5;

// [a,b]=swap(a, b);

// console.log("Swap values:", a, b);


// function firstdigit(a){                                      Q = 7
//     while(a>=10){
//         a=(parseInt(a/10));
//     }
//     return a;
// }
// let b=123;
// let first=firstdigit(b);
// console.log("first digit of the number",first);


// function sumfirstandlast(a){                                 Q = 8
//     let c = a % 10;
//     while(a >= 10){
//         a = parseInt(a / 10);
//     }
//     let sum = c + a;
//     return sum;
// }
// let num = 246;
// let sum = sumfirstandlast(num);
// console.log("Sum of the first and last digit:", sum);


// function averageofsalary(a,b,c,d,e){                                       Q = 9
//     return a+b+c+d+e/5;
// }
// const average = averageofsalary(500,200,100,50,400);
// console.log("average of the salary",average);

