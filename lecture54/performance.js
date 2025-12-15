document.addEventListener("DOMContentLoaded", () => {
// Code1 (slower)
    const t1 = performance.now();
    let container = document.getElementsByClassName("container")[0];
    for (let i = 1; i <= 100; i++) {
        let para = document.createElement("p");
        para.textContent = 'This is paragraph ' + i;
        container.appendChild(para);
        // document.body.appendChild(para);
    }
    const t2 = performance.now();
    console.log(`Time for Code1: ${t2 - t1} ms`);
    // no of reflows and repaints = 100
    
    
    
// Code2 (faster)
    const t3 = performance.now();
    let mydiv = document.createElement("div");
    for(let i = 1; i <= 100; i++){
        let para = document.createElement("p");
        para.textContent = 'This is paragraph ' + i;
        mydiv.appendChild(para);        
    }
    document.body.appendChild(mydiv);
    const t4 = performance.now();
    console.log(`Time for Code2: ${t4 - t3} ms`);
    // no of reflows and repaints = 1
    mydiv.style.backgroundColor = "lightblue";


// Code3 (similar to Code2 but no need to create extra div)
    const t5 = performance.now();
    let fragment = document.createDocumentFragment();
    for(let i = 1; i <= 100; i++){
        let para = document.createElement("p");
        para.textContent = 'This is paragraph ' + i;
        fragment.appendChild(para);
    }
    document.body.appendChild(fragment);
    const t6 = performance.now();
    console.log(`Time for Code3: ${t6 - t5} ms`);
    // no of reflows and repaints = 1



});

// Reflow (Computationally intensive task)
// Process of calculating position/dimensions (layout) of elements
// Repaint (faster than reflow)
// Process of displaying content/elements pixel by pixel on screen

// Document Fragment (light weight document object)
// A lightweight container to hold DOM nodes temporarily
// takes 0 reflow and repaint until appended to the main DOM