let divs = document.querySelectorAll(".box");

// divs[0].innerText = "I am first div";
// divs[1].innerText = "I am Second div";
// divs[2].innerText = "I am Third div";
let idx = 1;
for(let div of divs){
    div.innerText += `I am div ${idx}.`;
    idx++
}

