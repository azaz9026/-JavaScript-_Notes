// ---------------------------------------------------------------------Logging into Browser ---------------------------------------------------------------

// console.log & clear Functions

const Name = "Azaz";
const age = 21;

console.log("Hello, World!"); // Log a simple string
console.log("My name is", Name , "and I am", age , "years old."); // Log multiple values


const x = 21;
console.log("The value of x is:", x);

//Inspecting Objects and Arrays: You can inspect the contents of objects and arrays to better understand their structure and content.

const person = { name: "Azaz", age: 21 };
console.log("Person object:", person);

const numbers = [1, 2, 3, 4, 5];
console.log("Numbers array:", numbers);


// Timing: In addition to logging data, you can measure the time it takes for certain operations using console.time() and console.timeEnd() to start and stop timers.


console.time("Timer");
// Some code to measure
console.timeEnd("Timer");


// Conditional Logging: You can conditionally log messages based on specific conditions.


const isError = false;

if (isError){
    console.error("An error occurred!")
}
else{
    console.log("Operation successful.");
}


// Clearing the Console: You can clear the console using console.clear() to remove previous log messages.

console.clear()



//------------------------------------------------------------------------------alert----------------------------------------------------------------------------------


/**In JavaScript, the alert() function is used to display a pop-up dialog box with a message and an "OK" button.
 *  It's a simple way to provide information or notifications to the user */

// alert("This is an alert message!");




//------------------------------------------------------------------------------prompt()----------------------------------------------------------------------------------

/**
 * In JavaScript, the prompt() function is used to display a dialog box that prompts the user to enter input, typically a text value. 
 * It's a way to interact with users and gather information from them
 */

// const input = prompt("Enter Your Name : ")

const userName = prompt("Please enter your name:");

if (userName !== null && userName.trim() !== "") {
  alert(`Hello, ${userName}!`);
} else {
  alert("You didn't enter a valid name.");
}
