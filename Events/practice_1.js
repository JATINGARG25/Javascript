let modebtn = document.querySelector("button");
let body = document.querySelector("body");

let currMode = "light";
let changeMode = ()=>{
    if(currMode === "light"){
        currMode = "dark";
        body.style.backgroundColor = "black";
    } else{
        currMode = "light";
        body.style.backgroundColor = "white";
    }
}

modebtn.addEventListener("click",changeMode);