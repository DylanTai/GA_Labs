/*-------------------------------- Constants --------------------------------*/
//5) Define the required constants.
const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

/*---------------------------- Variables (state) ----------------------------*/
//1) Define the required variables used to track the state of the game.
let boardArr = new Array(9).fill("");
let msg = "";

/*------------------------ Cached Element References ------------------------*/
//2) Store cached element references.
const buttonEl = Array.from(document.querySelectorAll(".sqr"));
const h2El = document.querySelector("#message");
const resetEl = document.querySelector("#reset");

/*-------------------------------- Functions --------------------------------*/
//4) The state of the game should be rendered to the user.
const render = () => {
  h2El.textContent = msg;
  let itr = 0;
  buttonEl.forEach((button) => {
    button.textContent = boardArr[itr++];
  });
};

//check to see if the player or computer won
const checkWin = () => {
  winCombos.forEach((combo) => {
    if (
      boardArr[combo[0]] != "" &&
      boardArr[combo[0]] === boardArr[combo[1]] &&
      boardArr[combo[1]] === boardArr[combo[2]]
    ) {
      if (boardArr[combo[0]] === "X") msg = "You win!";
      else if (boardArr[combo[0]] === "O") msg = "You lose!";
      return;
    }
  });
  if (msg === "") return false;
  return true;
};

//check if the board is full or not (if it's full it's a tie)
const boardFull = () => {
  for (let itr = 0; itr < boardArr.length; itr++)
    if (boardArr[itr] === "") return false;
  msg = "It's a tie!";
  return true;
};

//6) Handle a player clicking a square with a `handleClick` function.
const handleClick = (input) => {
  if (msg === "" && boardArr[parseInt(input.target.id)] === "") {
    boardArr[parseInt(input.target.id)] = "X";
    if (!boardFull() && !checkWin()) {
      while (true) {
        const randomPlacement = Math.floor(Math.random() * 9);
        if (boardArr[randomPlacement] === "") {
          boardArr[randomPlacement] = "O";
          break;
        }
      }
    }
    checkWin();
    render();
  }
};

//7) Create Reset functionality.
const reset = () => {
  boardArr = new Array(9).fill("");
  msg = "";
  render();
};

/*----------------------------- Event Listeners -----------------------------*/
//3) Upon loading, the game state should be initialized, and a function should
//   be called to render this game state.
render();

buttonEl.forEach((button) => {
  button.addEventListener("click", handleClick);
});

//7) Create Reset functionality.
resetEl.addEventListener("click", reset);
