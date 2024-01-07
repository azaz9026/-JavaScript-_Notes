// Boolean Values ----------------------------------------------------------------------------

/**
 * Boolean Values:
There are only two possible Boolean values: true and false. These values are case-sensitive, so True and False are not valid Boolean values.
 */
let isTrue = true;
let isFalse = false;



/**
 * Boolean Expressions:
Boolean expressions are conditions that evaluate to either true or false. These expressions are used in control structures like if statements and loops to make decisions in your code.

 */

if (isTrue) {
    // This block will execute because isTrue is true.
  }
  
  if (!isFalse) {
    // This block will execute because !isFalse is true (logical NOT).
  }



/**
 * Logical Operators:
JavaScript provides logical operators like && (logical AND), || (logical OR), and ! (logical NOT) to work with Boolean values.
 */


let x = true;
let y = false;

let result1 = x && y; // false (logical AND)
let result2 = x || y; // true (logical OR)
let result3 = !x; 

console.log(result1 , result2 , result3)