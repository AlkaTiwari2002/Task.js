// dates

// A Date object in programming is a data type used to represent and work 
// with dates and times. It can store information like the year, month, day, 
// hour, minute, second, and millisecond.

// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());
// console.log(myDate.getTimezoneOffset());
// console.log(typeof myDate);


// let myCreatedDate = new Date(2024, 4, 26)
// let myCreatedDate = new Date(2024, 4, 26, 5, 3)
// let myCreatedDate = new Date("2024-05-26")
// let myCreatedDate = new Date("05-26-2024")
// console.log(myCreatedDate.toLocaleString());

// let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000)); // if you want to change in seconds

// let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getDate());
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDay());

// newDate.toLocaleString('default',{
//     weekday:"long",
// })
// Syntax: new Date(year, month, day, hours, minutes, seconds, milliseconds)
// let specificDate = new Date(2024, 4, 26, 10, 30, 0, 0); // Months are 0-indexed (0 = January, 11 = December)
// console.log(specificDate.toLocaleString());

let date = new Date();

date.setFullYear(2025);
date.setMonth(11);    // December
date.setDate(25);
date.setHours(10);
date.setMinutes(30);
date.setSeconds(0);
date.setMilliseconds(0);

console.log(date.toLocaleString());
