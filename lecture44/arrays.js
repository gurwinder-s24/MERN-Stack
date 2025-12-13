// let arr = [1, 2, 3, 4, 5];
// console.log(arr);

// let arr2 = new Array(10).fill(0);
// console.log(arr2);

// let arr3 = new Array("hello", 1, true);
// console.log(arr3);
// console.log(arr3.indexOf("hello"));
// console.log(arr3.find( (e) => e>0 ));

// arr3.push("new item");
// console.log(arr3);
// let lastItem = arr3.pop();
// console.log("Popped item: [" + lastItem + "]");
// console.log(arr3);

// arr3.unshift("new item");
// console.log(arr3);
// let firstItem = arr3.shift();
// console.log("Shifted item: [" + firstItem + "]");
// console.log(arr3);


// let arr4 = [10, 20, 30, 40, 50, true];
// let brr4 = arr4.slice(2,4);
// console.log("arr4:", arr4);
// console.log("brr4:", brr4);


// let arr5 = [10, 20, 30, 40, 50, true];
// arr5.splice(1, 2, "a", 99, "c");
// // at index 1 removes 2 elements and add "a", 99, "c"
// console.log(arr5);
// arr5.splice(4, 0,"999");
// console.log(arr5);


// let arr6 = [10, 20, 30, 40,];
// let brr6 = arr6.map((number) => {
//     return number*number;
// });
// console.log(brr6); 
// arr6.map((n) => console.log(n*2));


// let arr7 = [5, 10, 15, 20, 25];
// let brr7 = arr7.filter((e) => {
//     return !(e%2);
// })
// console.log(brr7);
// arr7.push("a", true);
// brr7 = arr7.filter((e) => {
//     // return typeof e === "string";
//     return !(e%2) && typeof e === "number";
// })
// console.log(brr7);


// let arr8 = [1, 2, 3, 4];
// let brr8 = arr8.reduce((acc,curr) => {
//     return acc + curr;
// }); //by default accumulator starts from arr[0] and curr from arr[1]
// console.log(brr8);
// brr8 = arr8.reduce((acc,curr) => {
//     return acc + curr;
// }, 100); //accumulator starts from 100 and curr from arr[0]
// console.log(brr8);


// let arr9 = [3, 1, 11, 7, 2, 9];
// arr9.sort((a,b) => a-b); //ascending order
// // arr9.sort(); //ascending order (by default)
// // but this will work incorrectly for numbers
// // because it converts them to strings and compares lexicographically
// console.log(arr9);
// arr9.sort((a,b) => b-a); //descending order
// // arr9.sort().reverse(); //descending order
// // similarly this will also not work correctly for numbers
// console.log(arr9);


arr10 = [1, 2, 3];
arr10.forEach((val, index) => {
    console.log("Index:", index, "Value:", val);
})

let arr11 = [10, 20, 30, 40];
for ( let v of arr11 ){
    console.log(v);
}
let str = "Hello";
for ( let ch of str ){
    console.log(ch);
}

let obj ={
    name: "Alice",
    age: 25,
    city: "New York"
}
for (let key in obj){
    console.log(key,"",obj[key]);
}

// diff between forEach and for...of is 
// forEach cannot be broken using break statement
// for...of can be broken using break statement
// and forEach only works on arrays as it is an array method
// but for...of works on any iterable as it is general loop 


// diff between for...in and for...of is
// for...in works on objects to iterate over keys
// for...of works on iterables to iterate over values
// Also, for...in iterates over all enumerable properties including inherited ones

// diff between forEach and map is
// forEach does not return anything i.e. it returns undefined
// map returns a new array after applying the function to each element
