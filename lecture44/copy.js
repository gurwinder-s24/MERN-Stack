// Reference Copy
const original = {
    name: 'Alice',
    address: { city: 'New York' }    
}
const referenceCopy = original;
referenceCopy.name = 'Bob';
referenceCopy.address.city = 'London';
console.log(original.name); // 'Bob' (affected)
console.log(original.address.city); // 'London' (affected


// Shallow Copy
// creates a new object and copies the values of 
// the original object's top-level properties. 
// However, if any property value is an object itself,
// only its reference (memory address) is copied,
// not the nested object itself.
const original1 = {
  name: 'Alice',
  address: { city: 'New York' }
};
// const shallowCopy = { ...original1 };
const shallowCopy = Object.assign({}, original1);
shallowCopy.name = 'Bob';
shallowCopy.address.city = 'London';

console.log(original1.name); // 'Alice' (unchanged)
console.log(original1.address.city); // 'London' (affected)

// Deep Copy
// creates a new object and recursively copies all
// properties and nested objects from the original object.

const original2 = {
    name: 'Alice',
    address: { city: 'New York' }
};
// const deepCopy = structuredClone(original2);
const deepCopy = JSON.parse(JSON.stringify(original2));
deepCopy.name = 'Bob';
deepCopy.address.city = 'London';

console.log(original2.name); // 'Alice' (unchanged)
console.log(original2.address.city); // 'New York' (unaffected)