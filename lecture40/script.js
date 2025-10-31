// Variables and Data Types in JavaScript
var age = 10;
if(true){
    console.log();
    console.log(age);
}
// var is available as global variable

function print(){
    var num = 20;
    console.log(num);
}
print();
// console.log(num);
// will give error because 
// here var is function scoped

var a = 30;
console.log(a);
var a = 40;
console.log(a);
// declaration of var multiple times is 
// possible but not recommended 
// as it can lead to debugging issues




let b = 50;
console.log(b);

{
    let c = 50;
}
// console.log(c);
// will give error because
// let is block scoped

// let b = 55;
// will give error
// re-declaration not possible

let d = 60;
d = "name";
d = true;
d = null;
console.log(d);
// # dynamic typed language




const pi = 3.14;
console.log(pi);
// block scoped like let

// pi = 3.145;
// re-assignment not possible

// const pi;
// re-declaration not possible

// const pi = 3.145;
// re-definition not possible





// DATA TYPES
// Primitive data types
// number
// string
// boolean
// null
// undefined
// symbol
// bigint

// Non-primitive data types
// object
// array
// function
// date
// etc.