let boxes = document.querySelectorAll(".box");
let resetbutton = document.querySelector("#reset-button");
let NewGameButton= document.querySelector("#New-button");
let message_container = document.querySelector(".message-container");
let msg=document.querySelector("#message");

let turnO = true;
// here now we store the winning patterns
const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const resetgame = ()=>{
    turnO=true;
    enableboxes();
    message_container.classList.add("hide");
}

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;

    checkwinner();
  });
});
const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const showWinner=(winner)=>{
    msg.innerText=`CONGRATULATIONS, WINNER IS ${winner}`;
    message_container.classList.remove("hide");
    disableboxes();

};

const checkwinner = () => {
  for (let pattern of winPatterns) {
    let pos1Value = boxes[pattern[0]].innerText;
    let pos2Value = boxes[pattern[1]].innerText;
    let pos3Value = boxes[pattern[2]].innerText;

    if (pos1Value != "" && pos2Value != "" && pos3Value != "") {
      if (pos1Value === pos2Value && pos2Value === pos3Value) {
        console.log("Winner",pos1Value);

        showWinner(pos1Value);
      }
    }
  }
};

NewGameButton.addEventListener("click",resetgame);
resetbutton.addEventListener("click",resetgame);
