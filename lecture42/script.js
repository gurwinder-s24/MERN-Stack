console.log("");

// infinite loop
// let i = 0;
// while (true) {
//     console.log(i++);
// }

// backquotes for multi-line strings
let nameCanidates = "\nAlice\nBob\nCharlie\nDavid\n";
console.log(nameCanidates);
let names = `Alice
Bob
Charlie
David
`;
console.log(names);

//creating string object
let strObj = new String("string");
let strObj2 = new String("string2");
// string concatenation
console.log(strObj + strObj2);
console.log(`strObj + strObj2`);
console.log(`${strObj} + ${strObj2}`);
console.log(`${strObj}${strObj2}`);
// 
console.log(strObj.length);
console.log(strObj2.toString().toUpperCase());
console.log(strObj2.substring(2, 6));

let sentence = "This is a time of evening."
let words = sentence.split(" ");
console.log(words);
let sentence2 = words.join(",");
console.log(sentence2);