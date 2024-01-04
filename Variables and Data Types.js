// Variables and Data Types--------------------------------------------------------------------------------------------------------------------------------

// --------------------------------------------------------Literals and Variables------------------------------------------------------

/**
 * Literals:
 * A literal is a direct representation of a fixed value in your code. It's a way to express values without using variables.
 *  JavaScript supports various types of literals, including:
 * 
 * 1. **String Literals**:
    - Enclosed in single (`'`) or double (`"`) quotes.
    - Example: `'Hello, World!'` or `"JavaScript"`
2. **Numeric Literals**:
    - Representing numeric values like integers or floating-point numbers.
    - Examples: `42`, `3.14`, `123`
3. **Boolean Literals**:
    - Representing `true` or `false`.
    - Examples: `true`, `false`
4. **Array Literals**:
    - Enclosed in square brackets and contain a list of values, separated by commas.
    - Example: `[1, 2, 3]`
5. **Object Literals**:
    - Enclosed in curly braces and define key-value pairs.
    - Example: `{ name: "John", age: 30 }`
6. **Regular Expression Literals**:
    - Used to define patterns for pattern matching and manipulation.
    - Example: `/pattern/`
7. **Template Literals** (introduced in ES6):
    - Enclosed in backticks (\`) and allow for string interpolation and multiline strings.
    - Example: ``My name is ${name} and I am ${age} years old.``
 */


    // ------------------------------------------------------------------------------ Variables---------------------------------------------------------------------------

/**
     * Variables:
        Variables in JavaScript are used to store and manage data that may change or be referenced multiple times within your code.
        Variables provide a way to give a name to a piece of data. To declare a variable, you can use the var, let, or const keyword:
*/

let age = 21; // Declaring a variable 'age' and initializing it with the value 25.
const name = "Azaz"; // Declaring a constant 'name' and initializing it with a string value.

console.log(`My name is ${name} and I am ${age} years old.`);


// -------------------------------------------------------------Variable Declaration and Initialization----------------------------------------------------------

// Variable Declaration:
// To declare a variable, you use one of three keywords: var, let, or const. The choice of keyword affects the variable's scope (where it can be accessed) and whether its value can be changed (mutability).
// var: Variables declared with var have function-level scope, meaning they are accessible throughout the function in which they are declared. Variables declared with var can be reassigned.
    var Age; // Variable declaration (undefined)

​
// let: Introduced in ES6, let allows you to declare variables with block-level scope. Block-level scope means the variable is accessible only within the block (typically enclosed by curly braces {}) where it's declared. Variables declared with let can be reassigned.
    let Names; // Variable declaration (undefined)

​
// const: Also introduced in ES6, const is used to declare variables with block-level scope. However, variables declared with const cannot be reassigned after initialization, making them constants.
    const PI = 3.14; // Variable declaration and initialization


/**
 * **Variable Initialization:**

        Variable initialization is the process of assigning an initial value to a declared variable. 
        You can declare and initialize a variable in one step using the `=` operator:
 */
        var Age = 30; // Variable declaration and initialization
        let names= "Alice"; // Variable declaration and initialization
        const PIs = 3.14; // Variable declaration and initialization
        

        console.log(name1); // ReferenceError: Cannot access 'name' before initialization
        let name1 = "Alice";

        console.log(age1); // undefined
        var age1 = 30;