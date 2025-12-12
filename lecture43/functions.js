// function multiply(a, b){
//     return a * b;
// }
// const r = function mul(a, b){
//     return a * b;
// }
// const s = function(a, b){
//     return a * b;
// }
// const t = (a, b) => a * b
// console.log(multiply(1,10));
// console.log(r(2,10));
// console.log(s(4,10));
// console.log(t(8,10));

// const power = (a,b) => {
//     let result = a**b;
//     return result;
// }
// console.log(power(2,10));
// console.log( ((a,b) => a**b)(2,10) );

// let a = 5;
// console.log("Number:", a);
// console.log("Number: "+ a);

// function printCounting(n = 10){
//     for(let i = 1; i<n; i++){
//         console.log(i);
//     }
// }

// printCounting(100);
// printCounting();



// const str = "Hello World";
// function reverseString(s){
//     let revStr = "";
//     for(let i = s.length - 1; i >= 0; i--){
//         revStr += s[i];
//     }
//     return revStr;
// }
// function reverseString(s){
//     return s.split("").reverse().join("");
// }

// function reverseWords(s){
//     return s.split(" ").reverse().join(" ");
// }

// function reverseEachWord(s){
//     let newArr = [];
//     s.split(" ").forEach(element => {
//         newArr.push(element.split("").reverse().join(""));
//     });
//     return newArr.join(" ");
// }
// function reverseEachWord(s){
//     return s.split(" ").map(word => word.split("").reverse().join("")).join(" ");
// }
// console.log(str);
// console.log(reverseString(str));
// console.log(reverseWords(str));
// console.log(reverseEachWord(str));


