// Class Questions - 
// 1 . Given a sentence, capitalize the first character of each word.
// 	input - this is javascript
// 	output - This Is JavaScript

// 2. Given an array of string. Return a new boolean array. If the item at each index contains the word javascript in it. It should be true else it should be false.
// 	input - ["javascript", "react", "node"]
// 	output - [true, false, false]
	
// 	input - ["java","python","c"]
// 	output - [false, false, false]

// 3. Given a string which contains an email address, return true if the given email is valid, else return false.
// 	input - puran@navgurukul.org
// 	output - true
	
// 	input - puran@navgurukul
// 	output - false
	
// 	input - puran@gmail.com
// 	output - true

// 4. Given two strings, check if they are anagrams or not. If they are anagrams return true else return false.
// 	input - below, elbow
// 	output - true

// 	input - night, thing
// 	output - true

// 5. Reverse the given sentence.
// 	input- i am learning javascript.
// 	output - tpircsavaj gninrael ma i

// 6. Reveres the given string word by word then return the reversed string.
// 	input - Success comes to those who work hard
// 	output - hard work who those to comes Success

// 2. Given an array of string. Return a new boolean array. If the item at each index contains the word javascript in it. It should be true else it should be false.

// let array = ["javascript", "react", "node"];
// for(let i=0; i<array.length;i++){
//     if(array[i]==="javascript"){
//         console.log("true");
//     } else{
//         console.log("false");
//     }
// }

// 5. Reverse the given sentence.

// let letter = "i am from raebareli";
// let letters = letter.split('').reverse().join('');
// console.log(letters);

//  6. Reveres the given string word by word then return the reversed string.


// function reverseByWord(sentence) {
//     const words = sentence.split(' ');
//     const reverseWords = words.reverse();
//     const reverseSentence = reverseWords.join(' ');

//     return reverseSentence;
// }

// const input = "Success comes to those who work hard";
// const output = reverseByWord(input);
// console.log(output);
