// Comparison Operators
// ==, ===, !=, !==, >, <, >=, <=
// == compares values after type coercion(converting to same datatype)
// === compares values and types without type coercion
// != and !== are the negations of == and === respectively
// >, <, >=, <= are used for numerical comparisons

// Logical Operators
// AND (&&), OR (||), NOT (!)
// Used to combine or invert boolean values
// If value is not boolean, it is converted to boolean
// Falsy values: false, 0, "", null, undefined, NaN
// Truthy values: All values that are not falsy

console.log(false || "something"); // Outputs: "something"
console.log(false || 10); // Outputs: 10

console.log(false || 20 || 30 || "hello"); // Outputs: 20
// Short-circuiting in logical operators