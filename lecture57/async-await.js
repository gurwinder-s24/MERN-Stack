// Async-await: make async code flow behave like sync code flow.
// It is built on top of promises.

async function Data(){
    setTimeout(() => {
        console.log("Inside setTimeout");
    }, 2000);
}
// async function always returns a promise
let output = Data();
console.log(output);

// await ??

// fetch API: 
async function getData(){
    // marking asyncrhonous operation with await
    // let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    // let response = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');
    // let response = await fetch('https://jsonplaceholder.typicode.com/comments?postId=1');
    let data = await response.json();
    console.log(data);
}
getData();
// scenario:
// prepare url / api endpoint -> sync
// call fetch api -> network call -> async   //(await)
// process data -> sync




async function postData(url, options){
    // let myRequest = new Request(url, options);
    // let response = await fetch(myRequest);
    let response = await fetch(url, options);
    let data = await response.json();
    console.log(data);
}
let url = "https://jsonplaceholder.typicode.com/posts";
let options = {
    method: 'POST',
    body: JSON.stringify({ userName: 'example', userId: 1 }),
    headers: {'Content-type': 'application/json'},
};
// postData(url, options);
async function processData(){
    await postData(url, options);
    await getData(); // not showing newly added data 
    // because website is not maintaining new data
}
processData();
