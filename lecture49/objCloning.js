// Objects are dynamic in nature; 
// we can add or remove properties at run time.
// let obj = {
//     age: 12,
//     wt: 40,
//     ht: 160,
// };

// console.log(obj);
// obj.color = "white";
// console.log(obj);
// delete obj.wt;
// console.log(obj);




// Cloning Objects
let src = {
    age: 12,
    wt: 40,
    ht: 160,
};
// Shallow Cloning
// let dest = {...src}; // 1
// let dest2 = Object.assign({}, src); // 2
// console.log(dest);
// console.log(src);
// console.log(dest2);

// let src2 = { fName: "John", lName: "Doe" };
// let dest3 = {...src, ...src2};
// let dest4 = Object.assign({}, src, src2);
// console.log(dest3);
// console.log(dest4);

// let destIteration = {}; // 3
// for (let key in src){
//     destIteration[key] = src[key];
//     // using dynamic nature of objects to insert
// }
// console.log(destIteration);

// Deep Cloning
// Method-4 ---- JSON.parse and JSON.stringify
// Method-5 ---- structuredClone (new in JS)