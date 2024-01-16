let boxes = document.querySelectorAll(".box");
let newGame = document.querySelector(".new-game");
let resetBtn = document.querySelector(".reset-btn");
let messageContainer = document.querySelector(".message-container");

let turnO = true;

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

const disableBoxes = () => {
  for (const box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (const box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const resetGame = () => {
  turnO = true;
  enableBoxes();
  messageContainer.innerText = "";
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box clicked");
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const checkWinner = () => {
  for (const pattern of winPattern) {
    let pos1Value = boxes[pattern[0]].innerText;
    let pos2Value = boxes[pattern[1]].innerText;
    let pos3Value = boxes[pattern[2]].innerText;

    if (pos1Value != "" && pos2Value != "" && pos3Value != "") {
      if (pos1Value === pos2Value && pos2Value === pos3Value) {
        messageContainer.innerText = `The winner is ${pos1Value}`;
        disableBoxes();
      }
    }
  }
};

newGame.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
