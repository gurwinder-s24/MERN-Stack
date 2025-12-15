// inline css manipulation 
{
// using .style property
let element = document.getElementById("spara");
element.style.backgroundColor = "skyblue";
spara.style.color = "white"; // or directly by id

// using .style.cssText property for multiple inline styles
console.log(sdiv.style.cssText);
sdiv.style.cssText = "background-color: lightyellow; border: 2px solid green;";
// but note here we lost previous inline styles that we have not even changed

// using .setAttribute() method
sdiv.setAttribute("style", "background-color: lightgreen; border: 4px solid red; padding: 1rem;");
}




// changing attributes
{
// using .setAttribute() method
// this also lost previous values of the attribute that we are changing
fdiv.setAttribute("id","firstDiv");
console.log(firstDiv);
firstDiv.setAttribute("class","c1");
console.log(firstDiv);

// using direct property access
firstDiv.id = "mainDiv";
console.log(mainDiv.className);
console.log(mainDiv.classList);
mainDiv.className = "c1 c2";
console.log(mainDiv.className);
console.log(mainDiv.classList);


// using .classList property methods
mainDiv.classList.add("c3","c4");
console.log(mainDiv.className);

mainDiv.classList.remove("c2");
console.log(mainDiv.className);
// toggle means if class is present then remove it otherwise add it
mainDiv.classList.toggle("c4"); // removes c4
console.log(mainDiv.className);
mainDiv.classList.toggle("c4"); // adds c4
console.log(mainDiv.className);

mainDiv.classList.replace("c4","c6");
console.log(mainDiv.className);

let contain = mainDiv.classList.contains("c1");
console.log(contain); // true
}




// internal css manipulation
{
// to add a rule
let styleElement = document.getElementById("mystyle");
console.log(styleElement.sheet.cssRules);
styleElement.sheet.insertRule(".container { background-color: lightgrey; }", styleElement.sheet.cssRules.length);
styleElement.sheet.insertRule("#spara { font-size: 1.5rem; color: darkblue; }", styleElement.sheet.cssRules.length);

// to delete a rule
console.log(styleElement.sheet.cssRules);
styleElement.sheet.deleteRule(1); // deletes seond rule
console.log(styleElement.sheet.cssRules);
styleElement.sheet.deleteRule(0); // deletes first rule
console.log(styleElement.sheet.cssRules);

}




// external css manipulation
{
console.log(document.styleSheets);
let externalStyleSheet = document.styleSheets[0]; // first stylesheet
// now similarly as we did in internal style sheet manipulation

// complex
console.log(externalStyleSheet.cssRules);
externalStyleSheet.cssRules[1].style.border = "5px solid purple"; // changes border of .container rule
// etc.
}