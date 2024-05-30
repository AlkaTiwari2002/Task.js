// function factorial (num){
//     let sum = 1;
//     for(let i = num; i>=i; i--){
//         sum = sum * i;
//     }
//     console.log(sum);
// }
// factorial(5);


// function counter(n){
//     if(n>10){
//         return 1
//     }
//     console.log(n)
//     return counter(n+1)
// }
// counter(1);


// function power(base, num){
//     let sum = 1;
//     for(let i = 0; i<num; i++){
//         sum = sum * num;
//     }
//     return sum;
// }
// console.log(power(3,2));


// function power (a,b){
//     if(b===0){
//         return 1;
//     }
//     return a*power(a,b-1);
// }
// let a=10;
// let b=2;
// console.log(power(a,b));

// function arrsum(arr, index){
//     if(index === arr.length){
//         return 0;
//     } else {
//         return arr[index] + arrsum(arr, index + 1);
//     }
// }
// let arr = [1,2,3,4];
// console.log(arrsum(arr, 0));


// function preparedFood(foodDelivered){
//     setTimeout(()=>{
//         console.log("Food is being prepared");
//         console.log("Food is ready");
//         foodDelivered(eatingFood);
//     }, 10000);

// }

// function deliveredFood(eatingFood){
//     setTimeout(()=>{
//         console.log("Food is delivered to your table");
//         eatingFood(payment);
//     }, 5000)

// }

// function eatingFood(payment){
//     setTimeout(()=>{
//         console.log("Eating Food");
//         payment(leaveHotel)
//     }, 20000)
// }

// function payment(leaveHotel){
//     setTimeout(()=>{
//         console.log("Payment");
//         leaveHotel();
//     }, 3000)
// }

// function leaveHotel(){
//     console.log("Leave the Hotel");
// }

// function visitingHotel(){
//     console.log("Entering the Hotel");
//     console.log("Order Food - Biryani ");
//     preparedFood(deliveredFood);
    
// }

// visitingHotel();


// ATM
// Enter ATM
// Insert Card
// Processing - 5 seconds
// Enter Pin - 2 seconds
// Withdraw Money - 5 seconds
// Collect Cash - 1 second
// Leave ATM


// function enterATM(){
//     console.log("Enter the ATM");
//     console.log("Insert the card");
//     Processing(enterPin);
// }

// function Processing(enterPin){
//     setTimeout(() => {
//         console.log("Processing");
//         enterPin(withdrawMoney);
//     }, 5000);
// }

// function enterPin(withdrawMoney){
//     setTimeout(() =>{
//         console.log("Enter the Pin");
//         withdrawMoney(collectCash);
//     }, 2000);
// }

// function withdrawMoney(collectCash){
//     setTimeout(() => {
//         console.log("Withdraw the Money");
//         collectCash(leaveATM);
//     }, 5000);
// }

// function collectCash(leaveATM){
//     setTimeout(() =>{
//         console.log("Collect the Cash");
//         console.log("Count the Cash");
//         leaveATM();
//     },5000);
// }

// function leaveATM(){
//     console.log("Leave the ATM");
// }

// enterATM();


// function sayHii (callback){
//     const data = callback();
//     return "Hii" + data;
// }
// const sayBye = ()=> "Bye";

// const result = sayHii(sayBye);
// console.log(result);


