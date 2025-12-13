// let obj = {
//     name: "Gurwinder", 
// };
// let obj2 = {
//     "name": "Gurwinder", 
// };

// console.log(obj);
// console.log(obj2);
// console.log(obj.name);
// console.log(obj2.name);
// console.log(obj["name"]);
// console.log(obj2["name"]);

let obj = {
    name: "Gurwinder",
    age: 19,
    weight: 67,
    isAdmin: true,
    greet: function(){
        console.log("Hello World");
    },
    greet2: () => {console.log("Hello World 2");}
};
console.log(obj);
obj.greet();
obj.greet2();

