// Closure: combination of a function bundled together with 
// references to its surrounding state/required data/lexical environment.
// created every time a function is created, at function creation time.

// case 1: 
function init(){
    let name = 'Mozilla'; // let is block scoped
    function displayName(){
        console.log(name); // can use variables declared in lexical scope
    }
    displayName();
}
init();



// case 2: 
function init2(){
    let name = 'Brave';

    function displayName(){
        console.log(name);
    }
    return displayName; // returning inner function's reference
}
let disp = init2();
disp(); // Brave // not an error

// as we know after a function is returned, 
// its variables memory get cleaned up
// but here it is still printing Brave instead of error
// because inner function got binded with its 
// required data and form a closure.

// Note: no new memory is created for variable 'name',
// and not any copy of data is created only the 
// reference of variable 'name' is being stored in closure