// const object = {
//     name: "Alka",
//     phone:6307398283,
//     email:"alka@navgurukul.org",
//     sayHii(phone){
//         console.log(this.name, this.phone, this.email, phone);
//     }
// }
// object.sayHii("8376289663");

// let name = "Alka"
// function sayHii(){
//     console.log(this.name);
// }
// sayHii();


// let name = "Alka";
// var name1 = "Annu";
// const name2 = "Alka";

// var sayHii = ()=>{
//     console.log("Hello, Good Morning")
// }

// function printName(){
//     console.log(sayHii());
//     console.log(this.sayHii());
// }
// printName();

// var c = 0;
// function count(){
//     return function count(){
//         c++;
//         console.log(c);
//     }
// }
// let res = count();
// res();
// res();
// res();
// res();

// function get(){
//     let user = "alka";
//     let pass = "12345";
//     let c = 0;

//     return function(){
//         let cread = {
//             name:user,
//             password:pass
//         }
//         if(c==3){
//             c+=1;
//             return cread;
//         }
//         c+=1;
//         return false;
//         // return cread;
//     }
// }
// let res = get();
// console.log(res());
// console.log(res());
// console.log(res());
// console.log(res());
// console.log(res());


// function get(){
//     let user = "alka";
//     let c = 0;

//     return function(){
//         let firstName = {
//             name:user
//         }
//         if(c==2){
//             c+=1;
//             return firstName;
//         }
//         c+=1;
//         return false;
//     }
// }
// let res = get();
// console.log(res());
// console.log(res());
// console.log(res());
// console.log(res());


// function multi (a){
//     return function mul1(b){
//         return function mul2(c){
//             return a*b*c;
//         }
        
//     }
// }
// let res = multi(10);
// let res1 = (res(5));
// console.log(res1(2));


// this is curry

// let res = multi(10)(5)(2);
// console.log(res);

