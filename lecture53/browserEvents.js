// Events: scroll, pointer events, touch events, wheel events
// view in browser console using
// moniorEvents(document);
// unmonitorEvents(document); //for stopping

// Event Target: Entity on which event occurred
// Event Listener: Function that runs when event occurs
// Event Object: Object passed to event listener 
// that contains info about event

// Syntax : <event-target>.addEventListener(<event-type>, <function/action>, <useCapture>);
{
    let fparaReference = document.getElementById("fpara");
    fparaReference.textContent = "Welcome to web-applications!";

    function changeTextOnClick(){
        fparaReference.textContent = "You clicked on the text!";
    }

    fparaReference.addEventListener("click",changeTextOnClick);
    // or directly define function inside addEventListener
    // fparaReference.addEventListener("click", function(){
    //     fparaReference.textContent = "You clicked on the text!";
    // }); // NOT RECOMENDED
}

// Removing Event Listener
{
    // as fpara is id we can directly use it without storing in reference
    fpara.removeEventListener("click", changeTextOnClick);
    // NOT RECOMENDED to use id directly
}





// Phases of Event Propagation
// 1. Capturing Phase
// 2. At Target Phase
// 3. Bubbling Phase (default)

// addEventListener() by default apply on Bubbling Phase
// cant apply on target phase alone
// To apply on Capturing Phase, pass third parameter(useCapture) as true
{
    let fdivReference = document.getElementById("fdiv");
    function changeDivBgOnClick(event){
        console.log(fdivReference.classList);
        fdivReference.classList.add("changeColor");
        console.log(fdivReference.classList);
        console.log(event); // Event Object
    }
    fdivReference.addEventListener("click", changeDivBgOnClick, true);
}





// changing Default Actions of Elements
// e.g. clicking on an anchor tag element opens the link
{
    let anchorReference = document.getElementById("fanchor");
    function preventDefaultAction(event){
        event.preventDefault();
        anchorReference.textContent = "Clicked.";
    }
    anchorReference.addEventListener("click", preventDefaultAction);
    // when we write eventListner(<type>,function)
    // event object is passed to the function implicitly
    // i.e. it is equivalent to eventListner(<type>, e => function(e))
}





// too many event listeners
{
    let paras = document.querySelectorAll(".p");
    function printTextOnClick(e, count){
        alert("You have clicked on: " + e.target.textContent);
        // console.log("You have clicked on paragraph no " + (count + 1));
    }
    paras.forEach(para => { para.addEventListener("click", printTextOnClick) });
    // event listenner is 1 but mappings are 4

    paras.forEach((para, index) => {
        para.addEventListener("click", e => printTextOnClick(e, index));
        // cant pass printTextOnClick(e, index) directly 
        // because eventListner() accept function as argument
        // and it is a function call not function
    });
    // event listenners are 4 which then calling nested listner 
}

// Solution: Event Delegation (avoiding too many event listeners)
{
    let wrapperdiv = document.getElementById("sdiv");
    function printTextUsingDelegation(event){
        // alert(event.target.textContent);
        // if we want it to run only for span not for entire paragraph
        if(event.target.nodeName === "SPAN"){
            alert(event.target.textContent);
        }
    }
    wrapperdiv.addEventListener("click", printTextUsingDelegation);
    // only 1 event listener on wrapper div
    // as target contains the actual element clicked not the wrapperdiv
    // [event.target] is not same as keyword [this]
}