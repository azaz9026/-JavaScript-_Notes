// JavaScript Objects --------------------------------------------------------------------------------------------------------------------------------

/**
 * You have already learned that JavaScript variables are containers for data values.
  This code assigns a simple value (Fiat) to a variable named car:
 */

  let car = "Fiat";

  let car1 = {type:"Fiat", model:"500", color:"white"}
  console.log(car1)


// Object Definition------------------------------------------------------------------------------------------------------------------------------------
// you define (and create) a JavaScript object with an object literal:

const person = {firstName:"Md", lastName:"Azaz", age:21, eyeColor:"blue"};
console.log(person)

// also that

const person1 = {
    firstName:"Md",
    lastName:"Azaz",
    age:21,
    eyeColor:"blue" 
};
console.log(person1)

// Accessing Object Properties --------------------------------------------------------------------------------------------------------------------------

// You can access object properties in two ways:-

// objectName.propertyName
// objectName["propertyName"]

console.log(person.lastName)
console.log(person["firstName"])

// Object Methods:-

const person2 = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
};

/**
In the example above, this refers to the person object:

this.firstName means the firstName property of person.

this.lastName means the lastName property of person.
 */

// Accessing Object Methods ---------------------------------------------------------------------------------------------------------

console.log(person2.fullName())