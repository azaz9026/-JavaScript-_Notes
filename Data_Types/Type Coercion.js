// Type Coercion-----------------------------------------------------------------------------------------------------------------------

/**
 * String Concatenation:
JavaScript will automatically convert non-string values to strings when using the + operator for concatenation.
 */

let num = 5;
let str = "Hello, " + num; // "Hello, 5" (num is coerced to a string)
console.log(str)


/**
 * Arithmetic Operations:
When performing arithmetic operations, JavaScript may convert operands to numbers if needed.
 */

let num1 = "5";
let num2 = 10;
let sum = num1 + num2; // "510" (both are coerced to strings)
let total = num1 - num2; // -5 (both are coerced to numbers)
console.log(sum , total)



/**
 * Comparison Operators:
JavaScript will coerce values to the same type before comparing them using equality (==) and inequality (!=) operators. This can lead to unexpected results.
let num = 5;
let str = "5";
console.log(num == str); // true (str is coerced to a number)
 */

let num3 = 5;
let str1 = "5";
console.log(num3 == str1); // true (str is coerced to a number)



/**
 * Truthy and Falsy Values:
JavaScript has truthy and falsy values. Values like 0, "" (empty string), null, undefined, NaN, and false are falsy. All other values are truthy.
 */

if (0) {
    // This code won't execute because 0 is falsy.
  }


/**
   * Logical Operators:
JavaScript performs type coercion when evaluating logical expressions using && and || operators.
*/

let result = "Hello" && true; // true (both operands are truthy)
console.log(result)


/**
 * Function Arguments:
Function parameters can receive values of different types, and JavaScript will attempt to coerce them if necessary.
 */

function greet(name) {
    console.log("Hello, " + name);
  }
  
  greet("Alice"); // "Hello, Alice"
  greet(42); // "Hello, 42" (42 is coerced to a string)