// Promises - A promise is an object that may produce a single value
//  some time in the future: either a resolved value, or a reason that 
//  it's not resolved (e.g., a network error occurred). 
//  A promises may be in one of 3 possible 
//  states: fulfilled, rejected, or pending.

// to Perform - async operations
//  Promise users can attach callbacks to handle the fulfilled 
//  value or the reason for Rejection.


// let treat = new Promise (function(resolve, reject){
//     let party = true;

//     if(party){
//         resolve("party is going on ");
//     } else {
//         reject("no party");
//     }
// });

// treat.then((result)=>{
//     console.log(result);
// }).catch((error)=>{
//     console.log(error);
// })


// let isParty = function(){
//     return new Promise (function(resolve, reject){
//         let party = true;
//         if (party){
//             resolve("Party is going on");
//         } else{
//             reject("Party is off");
//         }
//     })
// }

// let isGiftRecieved = function(){
//     return new Promise(function(resolve, reject){
//         let gift = true;
//         if(gift){
//             resolve("Gift Recieved");
//         } else{
//             reject(" No Gift Recieved");
//         }
//     })
// }

// isGiftRecieved().then((result)=>{
//     console.log(result);
//     return isParty();
// }).then((result)=>{
//     console.log(result);
// }).catch((error)=>{
//     console.log(error);
// })


// enter ATM,inser card 
// , enter pin withdrow money 
// , collect cash leave atm


let enter = new Promise(function(resolve, reject) {
    resolve("Enter the ATM");
});

let insert = function() {
    return new Promise(function(resolve, reject) {
        let isInserted = true;
        if (isInserted) {
            resolve("Insert the card");
        } else {
            reject("No card inserted");
        }
    });
}

let pin = function() {
    return new Promise(function(resolve, reject) {
        let isPinEntered = true;
        if (isPinEntered) {
            resolve("Enter the pin");
        } else {
            reject("Pin not entered");
        }
    });
}

let withdraw = function() {
    return new Promise(function(resolve, reject) {
        let isWithdrawn = true;
        if (isWithdrawn) {
            resolve("Withdraw the money");
        } else {
            reject("No money withdrawn");
        }
    });
}
let cash = function(){
    return new Promise(function(resolve,reject){
        let isCash = true;
        if(isCash){
            resolve("collect the cash");
        }else{
            reject("no collect");
        }
    })
}
let leave = function(){
    return new Promise(function(resolve,reject){
        let isLeave = true;
        if(isLeave){
            resolve("leave the Atm");
        }else{
            reject("no leave");
        }
    })
}

// Chaining the promises
enter
    .then((message) => {
        console.log(message);
        return insert();
    })
    .then((message) => {
        console.log(message);
        return pin();
    })
    .then((message) => {
        console.log(message);
        return withdraw();
    })
    .then((message) => {
        console.log(message);
        return cash();
    })
    .then((message) => {
        console.log(message);
        return leave();

    }).then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error(error);
    });

