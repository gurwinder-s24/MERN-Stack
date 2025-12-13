// Functions are called as first-class citizens in JavaScript
// This means that functions can be treated like any other variable
// They can be assigned to variables, passed as arguments to other functions, and returned from other functions



// Example 1: Assigning a function to a variable
const greet = function() {
    console.log("Hello!");
}



// Example 2: Passing a function as an argument
function greetMe(greet, name) {
    greet();
    console.log("Nice to meet you, " + name);
}
greetMe(greet, "Alice");



// Example 3: Returning a function from another function
function solve(number){
    return function(number){
        return number * number;
    }
}
let ans = solve(5);
console.log(ans(10));
// console.log(solve()(5));



// Example 4: Storing functions in an array3
const arr = [
    function(a,b){ return a + b; },
    function(a,b){ return a - b; },
    function(a,b){ return a * b; },
    function(a,b){ return a / b; }
]
console.log(arr[0](10, 5));
console.log(arr[1](10, 5));
console.log(arr[2](10, 5));
console.log(arr[3](10, 5));



// Example 5: Storing functions in an object
let obj = {
    name: "someone",
    age: 18,
    greet: () => {
        console.log("Hello!", this.name);
    },
    greet2: function() {
        console.log("Hello!", this.name);
    },
    greet3(){
        console.log("Hello!", this.name);
    }
}
obj.greet();
// not recomended to use arrow functions as top level object methods
// because 'this' will not refer to the object itself
// instead it will refer to the this of surrounding scope
// recomended inside a callback or when nesting inside another method
obj.greet2();
obj.greet3();


