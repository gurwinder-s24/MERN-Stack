// sayMyName("someone");
// will give error because hoisting 
// only works with the containing scope
// here the function is inside a block scope

{
// Function Hoisting : Mechanism in JavaScript 
// where function declarations along with definitions 
// are moved to the top of their containing scope
// during the compile phase. This allows functions to 
// be called before they are defined in the code. 
sayMyName("someone");
function sayMyName(name) {
    console.log(name);
}

// However, function expressions are not hoisted.
// sayMyNameExp("someone"); // ReferenceError
let sayMyNameExp = function(name) {
    console.log(name);
}

// Trick to achieve hoisting with function expressions
// sayMyNameVar("someone"); // Error
console.log(sayMyNameVar); // undefined
var sayMyNameVar = function(name) {
    console.log(name);
};



// Variable Hoisting : In JavaScript, variable
// declarations (using var) are hoisted to the top
// of their containing scope. However, only the 
// declaration is hoisted, not the initialization.

console.log(age); // undefined
var age = 19;
console.log(age); // 19

// Note: let and const do not hoist in the same way
// console.log(city); // ReferenceError: Cannot access 'city' before initialization
// let city = "New York";
// console.log(city); // New York



// Class level Hoisting also not possible
// const obj1 = new Person();
class Person{
  
}

}