// synchronous code run immediately when reached by flow of execution
console.log("Start of script");

// asynchronous code using setTimeout
function delayedMessage() {
    console.log("Message (delayed by 2 or more than 2 seconds)");
}
setTimeout(delayedMessage, 2000);
// other asynchronous code examples are
// event listeners, Promises, async/await, connections etc.

console.log("End of script");
// asychronous code does not block the main thread
// so "End of script" will be logged before the delayed message
// the method to handle asynchronous code is called "callback"
// and event loop handles the asynchronous code execution


{
    // 1. Call Stack: where the synchronous code is executed
    //    it also hanover asynchronous code to browser APIs

    // 2. Web APIs/Browser: where asynchronous code is handled
    //    e.g., setTimeout, DOM events, HTTP requests
    //    after completion, the callback is sent to Callback Queue 
        
    // 3. Callback/task Queue: where the callbacks from asynchronous code are queued

    // 4. Event Loop: checks if Call Stack is empty and 
    //    moves callbacks from Callback Queue to Call Stack
    //    one by one for execution
    {
        // Example to illustrate Call Stack and Callback Queue
        function first() {
            console.log("First function");
        }
        function second() {
            console.log("Second function");
        }
        function third() {
            console.log("Third function");
        }
        first(); // synchronous
        setTimeout(third, 0); // asynchronous
        second(); // synchronous
    }    
}

// what was the need of event loop?
// JavaScript is single-threaded language
// so it can execute only one task at a time
// if a long-running task is executed synchronously
// it will block the main thread so we need event loop
// to handle asynchronous tasks without blocking the main thread