// Promise: Object representing the eventual completion or 
// failure of an asynchronous operation and its resulting value.
// lets asynchronous methods to return values like synchronous methods
// pending, fulfilled, rejected 

{
    try{
        let promise = new Promise((resolve, reject) => {
            // reject(new Error("Something went wrong"));
        });
    } catch(err){ console.log(err);}

    // try...catch block only catches synchronous errors
    // correct way to catch promise errors is to use .catch() method
    let promise = new Promise((resolve, reject) => {
        console.log("Promise is created");
        // resolve(1001);
        reject(new Error("Something went wrong"));
    });
    promise
        .then((value) => {
            console.log("Promise is resolved with value: " + value);
        })
        .catch((err) => {
            console.log("Promise is rejected with error: " + err.message);
        })
        .finally(() => {
            console.log("Promise is settled (either fulfilled or rejected)");
        });
}




// async code using Promises
{
    let promise = new Promise((done,notdone) => {
        function Done(){ 
            done(1);
            console.log("Async task is completed");
        }
        function Notdone(){
            notdone(new Error("Async task is failed"));
        }
        // setTimeout(Done, 2000);
        // setTimeout(Notdone, 2000);
        // or directly
        // setTimeout(done(1), 2000);
        setTimeout(done, 2000, 1); //equivalent statement
        
        
    });
    promise.catch((err) => { console.log(err); });
    setTimeout(() => console.log(promise), 1000);
    setTimeout(() => console.log(promise), 3000);
    
}



// chaining Promises using multiple .then() calls
{
    function multipleThens(){
        let promise = new Promise((d, u) => d(2));
        promise.then(v => {return v * 2;}).then(v => v + 6)
        .then(v => console.log(v));
    }

    setTimeout(multipleThens, 4000);
}



// Promise.all() all Promises must be resolved, 
// else the first rejected Promise's error is returned
{
    let p1 = new Promise((d, u) => setTimeout(d, 5000, "P1 done"));
    let p2 = new Promise((d, u) => setTimeout(d, 5001, "P2 done"));
    // let p3 = new Promise((d, u) => setTimeout(d, 7000, "P3 done"));
    let p3 = new Promise((d, u) => setTimeout(u, 5002, new Error("P3 failed")));

    Promise.all([p1, p2, p3])
    .then(values => console.log(values))
    .catch(err => console.log(err));
}