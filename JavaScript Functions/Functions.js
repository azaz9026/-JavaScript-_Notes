// JavaScript Functions -----------------------------------------------------------------------------------------------------------------

/**
 * A JavaScript function is a block of code designed to perform a particular task.

A JavaScript function is executed when "something" invokes it (calls it).
 */


// Function to compute the product of p1 and p2 ------------------------------------------------------------------------------

function myFunction(p1, p2) {
    return p1 * p2;
}

console.log(myFunction(2,2))


// JavaScript Function Syntax --------------------------------------------------------------------------------------------------

/**
 * A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().

Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).
 */

function name(parameter1, parameter2, parameter3) {
    // code to be executed
}


// Function Return --------------------------------------------------------------------------------------------------------------

// Function is called, the return value will end up in x
let x = myFunction(4, 3);

function myFunction(a, b) {
// Function returns the product of a and b
  return a * b;
}

console.log(x)