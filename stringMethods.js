// let text = "alkaanjalimahimasushmitapreetipriyankagayatri"
// let length = text.length;
// console.log(length);

// let text = "HELLO WORLD";
// let char = text.charAt(6);
// console.log(char);

// let text = "HELLO WORLD";
// let char = text.charCodeAt(5);
// console.log(char);

// const name = "W3Schools";
// let letter = name[2];
// console.log(letter);

// let text = "HELLO WORLD";               // property access[]
// let char = text[0];
// console.log(char);

// let text = "HELLO WORLD";
// text[0] = "A";    // Gives no error, but does not work


// There are 3 methods for extracting a part of a string:

// slice(start, end)
// substring(start, end)
// substr(start, length)

// let text = "Apple, Banana, Kiwi";
// let part = text.slice(0, 13);
// console.log(part);


//If you omit the second parameter, the method will slice out the rest of the string

// let text = "Apple, Banana, Kiwi";
// let part = text.slice(7);
// console.log(part);


// If a parameter is negative, the position is counted from the end of the string

// let text = "Apple, Banana, Kiwi";
// let part = text.slice(-12);
// console.log(part);


//slices out a portion of a string from position -12 to position -6

// let text = "Apple, Banana, Kiwi";
// let part = text.slice(-12, -6);
// console.log(part);


// substring() is similar to slice()

// let str = "Apple, Banana, Kiwi";
// let part = str.substring(7, 13);
// console.log(part);

// let str = "Apple, Banana, Kiwi";
// let part = str.substr(7, 6);
// console.log(part);