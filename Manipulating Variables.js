// ------------------------------------------------------------------Manipulating Variables-----------------------------------------------------------------------------

// Assignment:
let x = 5;
x = x + 3; // Now 'x' is 8
console.log(x)

/**
 * 2. **Arithmetic Operations**:
    - JavaScript supports arithmetic operations like addition, subtraction, multiplication, division, and modulus.
 */

    let a = 10;
    let b = 5;
    let sum = a + b; // Addition
    let difference = a - b; // Subtraction
    let product = a * b; // Multiplication
    let quotient = a / b; // Division
    let remainder = a % b; // Modulus (remainder)

    console.log(sum,difference,product,quotient,remainder)


/**
 * 3. **String Concatenation**:
    - You can concatenate (join) strings together using the `+` operator.
 */
    let firstName = "Md";
    let lastName = "Azaz";
    let fullName = firstName + " " + lastName; // "Md Azaz"
    console.log(fullName)


/**
 * 4. **Increment and Decrement**:
    - You can increment and decrement numerical variables using the `++` and `-` operators.
 */

    let count = 10;
    count++; // Increment by 1, count is now 11
    console.log(count)
    count--; // Decrement by 1, count is now 10 again
    console.log(count)

/**
 * 5. **Compound Assignment Operators**:
    - JavaScript provides shorthand operators for performing arithmetic and assignment in one step.
 */
    let y = 5;
    y+= 3; // Equivalent to x = x + 3; (x is now 8)
    console.log(y)
    

/**
 * 6. **Comparison and Logical Operators**:
    - You can use comparison operators (`<`, `>`, `<=`, `>=`, `==`, `!=`) and logical operators (`&&`, `||`, `!`) 
    to manipulate variables within conditional statements.
 */

    let age = 21;
    let isAdult = age >= 18; // isAdult is true
    console.log(isAdult)

/**
 * 7. **String Methods**:
    - JavaScript provides built-in string methods for manipulating string variables. For example, you can
     change the case of a string, split it into an array, replace parts of it, and more.
 */
     let text = "Hello, World!";
     let uppercaseText = text.toUpperCase(); // "HELLO, WORLD!"
     let lowercaseText = text.toLowerCase(); // "HELLO, WORLD!"
     let parts = text.split(", "); // ["Hello", "World!"]
     let replacedText = text.replace("World", "JavaScript"); // "Hello, JavaScript!"
     console.log(text)
     console.log(uppercaseText)
     console.log(lowercaseText)
     console.log(parts)
     console.log(replacedText)


/**
 * 8. **Array Methods**:
    - When working with arrays, you can use array methods like `push`, `pop`, `splice`, `concat`, 
    and others to manipulate the contents of array variables.
 */

    let numbers = [1, 2, 3];
    numbers.push(4); // Add 4 to the end: [1, 2, 3, 4]
    console.log(numbers)
    numbers.pop(); // Remove the last element: [1, 2, 3]
    console.log(numbers)