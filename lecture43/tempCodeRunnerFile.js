function reverseEachWord(s){
    let newArr = [];
    s.split(" ").forEach(element => {
        newArr.push(element.split("").reverse().join(""));
    });
    return newArr.join(" ");
}
function reverseEachWord(s){
    return s.split(" ").map(word => word.split("").reverse().join("")).join(" ");
}