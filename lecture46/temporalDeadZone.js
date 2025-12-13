// Temporal Dead Zone (TDZ) in case of let and const
// Period of time from the beginning of 
// a variable's scope until the point in the code 
// where that variable is declared and initialized. 

// During the TDZ, the variable exists in memory
// but cannot be accessed. Attempting to access
// results in a ReferenceError.

{
  // TDZ starts here for 'myVar'
  console.log(myVar); // ReferenceError
  
  let myVar = "Hello"; // End of TDZ for 'myVar'
  console.log(myVar); // Output: Hello
}
