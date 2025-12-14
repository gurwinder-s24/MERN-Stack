// when HTML/XML file is parsed into a JS object,
// that object is called as document

// DOM : Document Object Model
// Programming interface that represents a 
// web page (the "document") as a tree of objects, 
// allowing scripts (like JavaScript) to dynamically 
// manipulate the content, structure, and style of page. 
// making webpages interactive without full reloads.

// BOM : Browser Object Model
// The BOM is a set of JavaScript objects 
// that allow scripts to interact with 
// the web browser itself, rather than 
// the content of the page.
// examples: window, navigator, screen, location, history etc.




// DOM manipulation (run this code in browser console)
// ACCESS
{
document;
document.title;
document.body;
document.URL;
document.domain;
document.getElementById("fpara");
document.getElementsByClassName("text");
document.getElementsByTagName("h1");
document.querySelector("#fpara");
document.querySelector(".text"); // selects the first element with class "text"
document.querySelector("p"); // selects the first <p> element
document.querySelectorAll(".text");
document.querySelectorAll("p");

// $0 method in browser console
// first selected element in Elements tab
// (or by pointer) then run
$0 // in console will return that element
// or
let elem = $0;
elem;
elem.innerHTML;
elem.innerText;

let elem2 = document.querySelector("#fdiv");
elem2.innerText;
// will return 
// 'This is my First Text.'
// only because display of second line is none
// implies innerText returns whatever is going 
// to be rendered on screen as it is.

elem2.textContent;
// will return
// '\n            \n                This is my First\n                \n                    Text.\n                \n            \n            \n                This is my Second para.\n            \n        '
// implies textContent returns every text node 
// inside the element(element's code) including tabs or
// \n of formatting and hidden text nodes as well.
}





// MODIFY
{
// Change/Update
// innerHTML property gets or sets only the content 
// inside an element's tags, while the outerHTML 
// property gets or sets the entire element, 
// including its own opening and closing tags. 
document.getElementById("headingContainer").innerHTML = "<h1> Modified Heading </h1>";
document.getElementById("headingContainer").outerHTML = "<div id='headingContainer'><h1> Modified Heading </h1></div>";
// etc using innerText, textContent

// change styles
document.getElementById("fpara").style.color = "blue";

// add element at the end
let newElem = document.createElement("h1");
newElem.textContent = "New Heading Added";
document.body.appendChild(newElem);

// add element at specific position(before-begin, after-begin, before-end, after-end)
let anotherElem = document.createElement("h1");
anotherElem.textContent = "Another Heading Added at specific position";
mydiv.insertAdjacentElement("beforebegin",anotherElem); // position , html content

// remove element
// parent , element to be removed
// can find parent using element.parentNode or element.parentElement
let elemToBeRemoved = document.getElementById("headingContainer");
elemToBeRemoved.parentNode.removeChild(elemToBeRemoved);
// or  document.querySelector("#top").removeChild(elemToBeRemoved);


}