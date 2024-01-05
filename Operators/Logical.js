// Logical-------------------------------------------------------------------------------------------------------------------------------------------------

/**
 * Logical AND (&&):
The logical AND operator returns true if both operands are true. If either operand is false, it returns false.
 */

let isAdult = true;
let hasLicense = true;

let canDrive = isAdult && hasLicense; // true
console.log(canDrive)


/**
 * Logical OR (||):
The logical OR operator returns true if at least one of the operands is true. If both operands are false, it returns false.
 */
let hasCreditCard = false;
let hasPayPalAccount = true;

let canPurchase = hasCreditCard || hasPayPalAccount; // true
console.log(canPurchase)


/**
 * Logical NOT (!):
The logical NOT operator negates the Boolean value of its operand. If the operand is true, it returns false, and if the operand is false, it returns true.
 */
let isStudent = true;

let isNotStudent = !isStudent; // false
console.log(isNotStudent)



//---------------------------------------------------------------Examples of Combined Logical Operators:-----------------------------------------------------------------


// Combining AND and OR: 

let isWeekend = true;
let isSunny = false;

let canGoToBeach = isWeekend && isSunny; 
let canGoToBeach1 = isWeekend || isSunny;// false (both conditions must be met)
console.log(canGoToBeach)
console.log(canGoToBeach1)



// Negating Conditions:

let isLoggedIn = false;

if (!isLoggedIn == true) {
  // Execute code if not logged in
    console.log("Yes it was Login")
}else{
    console.log("No it was Not Login")
}


// Using Parentheses for Priority:

let a = true;
let b = false;
let c = true;

let result = (a && b) || c; // true (logical AND has higher priority)
console.log(result)


