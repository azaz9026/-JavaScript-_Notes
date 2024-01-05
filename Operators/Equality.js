// Equality -----------------------------------------------------------------------------------------------------------------------------------

// Equality Operators:

// Equality (==): Checks if two values are equal, performing type coercion if necessary. It converts the values to a common type before comparison.
    let a1 = 5;
    let b1 = "5";
    console.log(a1 == b1); // true (type coercion)


I// nequality (!=): Checks if two values are not equal. Like the equality operator, it performs type coercion.
    let a2 = 5;
    let b2 = "5";
    console.log(a2 != b2); // false (type coercion)


// Strict Equality (===): Checks if two values are equal without type coercion. It returns true only if both the values and their types are the same.
    let a3 = 5;
    let b3 = "5";
    console.log(a3 === b3); // false (strict comparison)


// Strict Inequality (!==): Checks if two values are not equal without type coercion. It returns true if either the values or their types are different.
    let a4 = 5;
    let b4 = "5";
    console.log(a4 !== b4); // true (strict comparison)