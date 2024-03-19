let boxes = document.querySelectorAll(".box");
let rstbtn = document.querySelector(".resetbtn");
let container = document.querySelector(".container");
let game = document.querySelector(".game");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let newbtn = document.querySelector(".newbtn");

let turnO = true;

const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = ()=>{
    turnO = true;
    enabledBoxes();
    msgcontainer.classList.add("hide");
}

const disabledBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enabledBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner)=>{
    msg.innerText = `Congratulations, Winner is ${winner}.`
    msgcontainer.classList.remove("hide");
    disabledBoxes();
}

const checkWinner = ()=>{
    for(let pattern of winPattern){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val && pos3val === pos1val){
                showWinner(pos1val);
            }
        } 
    }
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO == true){
            box.innerText = "O";
            turnO = false;
            box.classList.remove("changeColor");
        } else{
            box.innerText = "X";
            turnO = true;
            box.classList.add("changeColor");
        }
        box.disabled = true;
        checkWinner();
    });
});

rstbtn.addEventListener("click",resetGame);
newbtn.addEventListener("click",resetGame);



