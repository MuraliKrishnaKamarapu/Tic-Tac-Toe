let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newGame = document.querySelector("#new-game");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");



var turnO = true;

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8], 
];

const resetGame = ()=>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}



boxes.forEach((box) =>{

    box.addEventListener("click", ()=>{
       
       if (turnO === true){
        box.style.color = "#e76f51";
        box.innerHTML = "O"
        turnO = false;
       } else {
        box.style.color = "#3a86ff";
        box.innerHTML = "X"
        turnO = true;
       }
       box.disabled = true;
       checkWinner()
    });

});

const disableBoxes = ()=>{
    for(let box of boxes){
    box.disabled = true;
    }
}
const enableBoxes = ()=>{
    for(let box of boxes){
    box.disabled = false;
    box.innerHTML = "";

    }
}
const showWinner = (winner)=>{
    msg.innerHTML=`Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
    
};

const checkWinner = ()=>{
    for(let pattern of winPattern){

        let pos1val = boxes[pattern[0]].innerHTML;
        let pos2val = boxes[pattern[1]].innerHTML;
        let pos3val = boxes[pattern[2]].innerHTML;
        if(pos1val != "" &&  pos2val != "" && pos3val != "" ){
            if(pos1val === pos2val && pos2val === pos3val){
                showWinner(pos1val);

            }

        }
    }
};

newGame.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);

