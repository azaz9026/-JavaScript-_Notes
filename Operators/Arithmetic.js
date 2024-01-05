/**
 * 1. **Addition `+`**:
    - The addition operator is used to add two or more numbers or concatenate strings (if at least one operand is a string).
 */

    let a = 5;
    let b = 3;
    let sum = a + b; // sum is 8
    console.log(sum)

    let str1 = "Hello, ";
    let str2 = "World!";
    let greeting = str1 + str2; // greeting is "Hello, World!"
    console.log(greeting)


/**
 * 2. **ubtraction ``**:
    - The subtraction operator is used to subtract the right operand from the left operand.
 */

    let a1 = 10;
    let b1 = 5;
    let difference = a1 - b1; // difference is 5
    console.log(difference)


/**
 * 3. **Multiplication ``**:
    - The multiplication operator is used to multiply two numbers.
*/

    let a2 = 6;
    let b2 = 7;
    let product = a2 * b2; // product is 42
    console.log(product)


/**
 * 4. **Division `/`**:
    - The division operator is used to divide the left operand by the right operand. It returns a floating-point result.
 */

    let a3 = 15;
    let b3 = 3;
    let quotient = a3 / b3; // quotient is 5
    console.log(quotient)



/**
 * 5. **Modulus `%`**:
    - The modulus operator calculates the remainder when the left operand is divided by the right operand.
 */

    let a4 = 10;
    let b4 = 3;
    let remainder = a4 % b4; // remainder is 1
    console.log(remainder)


/**
 * 6. **Exponentiation `*` (ES6)**:
    - The exponentiation operator, introduced in ES6, raises the left operand to the power of the right operand
 */

    let base = 2;
    let exponent = 3;
    let result = base ** exponent; // result is 8 (2^3)
    console.log(result)


/**
 * 7. **Increment `++`** and **Decrement `-`**:
    - The increment operator `++` increases a variable's value by 1, while the decrement operator `-` decreases it by 1.
 */

    let x = 5;
    x++; // Increment x by 1 (x is now 6)
    console.log(x)
    x--; // Decrement x by 1 (x is now 5 again)
    console.log(x)


/**
 * 8. **Unary Negation ``**:
    - The unary negation operator `` is used to change the sign of a numeric value.
 */

    let number = 7;
    let negNumber = -number; // negNumber is -7
    console.log(negNumber)


/**
 * 9. **Unary Plus `+`**:
    - The unary plus operator `+` is used to explicitly convert a value to a number, although it often has no effect on numbers.
 */

    let numStr = "42";
    let num = +numStr; // num is 42 (converted to a number)
    console.log(num)
