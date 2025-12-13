// Default Parameters in Functions
function Name(fName = "John", lName = fName.toUpperCase()){
    console.log(fName, lName);
}
Name("Alice", "Smith");
Name("Bob");
Name();



// Can also use objects as default parameters (arrays also)
function solve(value = {age: 25, city: "New York", country: "USA"}){
    console.log("Hello", value)
}
solve(5);
solve();
solve(null);
solve(undefined);



// Functions as default parameters
function getAge(){ return 190 };
function utility(fullName = "Unknown", age = getAge()){
    console.log(fullName, age);
}
utility("Charlie", 30);
utility("David");
utility(undefined, 40);
utility();