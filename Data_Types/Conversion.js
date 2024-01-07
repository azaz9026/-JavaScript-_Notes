// Conversion Between String and Number Type ------------------------------------------------------------------------------------------------

/**
 * Using parseInt() and parseFloat():
You can use the parseInt() function to convert a string to an integer, and parseFloat() to convert a string to a floating-point number.
 */


let strInt = "42";
let strFloat = "3.14";

let numInt = parseInt(strInt); // 42
let numFloat = parseFloat(strFloat); // 3.14

console.log(numInt)
console.log(numFloat)


let strNum1 = "123";
let num1 = Number(strNum1); // 123
console.log(num1)



let strNum = "456";
let num = +strNum; // 456
console.log(num)


// onverting Numbers to Strings: ---------------------------------------------------------

/**
 * Using String() Constructor or .toString() Method:
You can use the String() constructor or the .toString() method to convert a number to a string.
 */

let num2 = 42;
let str1 = String(num2); // "42"
let str2 = num2.toString(); // "42"
console.log(str1)
console.log(str2)



let num3 = 123;
let str = num3 + ""; // "123"
console.log(str)




let num4 = 789;
let str4 = `${num4}`; // "789"
console.log(str4)



let num5 = 1000;
let str5 = num5.toLocaleString(); // "1,000" (formatted as per locale)
console.log(str5)


let str6 = "abc";
let num6 = parseInt(str6);
if (!isNaN(num6)) {
  console.log(num6);
} else {
  console.log("Conversion failed.");
}

