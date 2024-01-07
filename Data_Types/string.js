// Strings---------------------------------------------------------------------------------------------------------------------------------

//---------------------------------------------------------- String functions.------------------------------------------------------- 

// length:

let text = "Hello, World!";
let length = text.length; // 13
console.log(length)


/**
 * toUpperCase():
Converts all characters in a string to uppercase.
 */

let text1 = "hello";
let uppercaseText = text1.toUpperCase(); // "HELLO"
console.log(uppercaseText)


/**
 * toLowerCase():
Converts all characters in a string to lowercase.
 */

let text2 = "WORLD";
let lowercaseText = text2.toLowerCase(); // "world"
console.log(lowercaseText)


/**
 * ndex):
Returns the character at the specified index in the string. The index is zero-based.
 */

let text3 = "JavaScript";
let character = text3.charAt(0); // "S"

console.log(character)



/**
 * substring(start, end):
Returns a substring of the original string, starting from the start index (inclusive) and ending at the end index (exclusive).
 */

let text4 = "Hello, World!";
let substring = text4.substring(7, text4.length); // "World"
console.log(substring)



/**
 * slice(start, end):
Similar to substring, it returns a substring, but allows negative indices (counting from the end of the string).
 */


let text5 = "Hello, World!";
let slice = text5.slice(-6, -1); // "World"
console.log(slice)



/**
 * indexOf(substring):
Returns the index of the first occurrence of substring in the string. Returns 1 if not found.
 */


let text6 = "Hello, World!";
let index = text6.indexOf("World"); // 7

console.log(index)


/**
 * lastIndexOf(substring):
Returns the index of the last occurrence of substring in the string. Returns 1 if not found.
 */

let text7 = "Hello, World!";
let lastIndex = text7.lastIndexOf("o"); // 8
console.log(lastIndex)


/**
 * replace(oldSubstring, newSubstring):
Replaces the first occurrence of oldSubstring with newSubstring in the string.
 */

let text8 = "Hello, World!";
let newText = text8.replace("World", "Universe"); // "Hello, Universe!"
console.log(newText)


/**
 * split(separator):
Splits the string into an array of substrings based on the specified separator. Useful for breaking text into parts.
 */

let text9 = "apple,banana,cherry";
let fruits = text9.split(","); // ["apple", "banana", "cherry"]
console.log(fruits)


/**
 * trim():
Removes leading and trailing whitespace characters (spaces, tabs, newlines) from a string.
 */

let text10 = "   Hello, World!   ";
let trimmedText = text10.trim(); // "Hello, World!"
console.log(trimmedText)


/**
 * concat(string1, string2, ...):
Combines multiple strings into one string.
 */

let firstName = "Md";
let lastName = "Azaz";
let fullName = firstName.concat(" " , lastName); // "Md Azaz"
console.log(fullName)


let firstName1 = "Md";
let lastName1 = "Azaz";
let fullName1 = firstName + " " + lastName; // "Md Azaz"
let message = `Hello, ${firstName}!`; // "Hello, Azaz!"
console.log(fullName1)
console.log(message)