// let arr = [0, 1, 2, 3, 4, 5];
// arr.push(6);
// arr.pop();
// arr.unshift(1)
// arr.shift()

// console.log(arr.includes(2));
// console.log(arr.indexOf(4));

// const newArr = arr.join(' and ')
// console.log(newArr);

// const newArr = arr.toString();
// console.log(newArr);

// console.log(arr);

// slice, splice

// console.log("A ", arr);
// const myArr1 = arr.slice(1,3);
// console.log(myArr1)
// console.log("B ", arr);

// const myArr2 = arr.splice(1,3);
// console.log(myArr2);
// console.log("C", arr);

// arr.splice(1, 2, '8', '9');
// console.log(arr);

// const marvel_heros = ['thor', 'ironman','spiderman']
// const dc_heros = ['superman', 'flash','batman']

// marvel_heros.push(dc_heros);
// let result = marvel_heros.concat(dc_heros)
// console.log(result);

// let result = [...marvel_heros, ...dc_heros]     // spread methods
// console.log(result)

// const array = [1, 2, 3,[4, 5, 6],7, 4,[6, 2, [1, 9, 4]]]
// const newArray = array.flat(Infinity);
// console.log(newArray);

// console.log(Array.isArray('Hitesh'))
// console.log(Array.from('Hitesh'))
// console.log(Array.from({name: 'Hitesh'}))

// let score1 = 100
// let score2 = 200
// let score3 = 300

// console.log(Array.of(score1, score2, score3))


// let arr = [1,2,3];
// console.log(arr.unshift())

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let size = fruits.length;
// console.log(size)

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fruit = fruits.at(2);
// console.log(fruit);


const fruits = ["Banana", "Orange", "Apple", "Mango"];
let arr = delete fruits[0];
console.log(arr)