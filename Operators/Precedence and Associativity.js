// Precedence and Associativity ---------------------------------------------------------------------------------------------------------------------------------------

/**
 * 1. **Operator Precedence**:
    - JavaScript has a hierarchy of operator precedence, which determines how different operators are evaluated in expressions.
    - For example, the multiplication operator (``) has higher precedence than the addition operator (`+`). Therefore, expressions with both `` and `+` operators will first evaluate the `` operation.
 */

    let result = 2 + 3 * 4; // Multiplication has higher precedence, so result is 14.
    let resultWithParens = (2 + 3) * 4; // Parentheses change the order, so resultWithParens is 20.
    console.log(resultWithParens)




    let result1 = 5 - 3 - 1; // Left-associative: (5 - 3) - 1, result is 1.
    console.log(result1)




    let a, b;
    a = b = 5; // The rightmost assignment is evaluated first, assigning 5 to both 'a' and 'b'.
    console.log(a,b)


    

    let result2 = 2 + 3 * 4; // Multiplication (*) has higher precedence than addition (+).
    // Steps: 3 * 4 = 12, then 2 + 12 = 14, so 'result' is 14.
    console.log(result2)