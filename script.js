
// select the necessary html elements
const board = document.getElementById("board");
const statusText = document.getElementById("status");
const resetButton = document.getElementById("reset");

//set up games essential variables
let currentPlayer = "X";
let gameState = ["", "", "", "", "", "", "", "", ""]
let gameActive = "true";

// add winning combinations
const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], //rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8] // columns
    [0, 4, 8], [2, 4, 7] //diagonals
];
//create the board
function createBoard(){
    board.innerHTML = ""; //clears the board
    gameState.forEach((value, index) => {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        if(value) cell.classList.add("taken");
        cell.dataset.index = index;
        cell.textContent = value;
        cell.addEventListener("click", handleCellClick);
        board.appendChile(cell);
    })
}

// handling user clicks
function handleCellClick(event){
    const index = event.target.dataset.index;
    if(gameState(index) || !gameActive)
        return;

    gameState[index] = currentPlayer;
    event.target.textContent = currentPlayer;
    event.target.classList.add("taken");

    if(checkWinner()){
        statusText.textContent = `Player ${currentPlayer} wins!`;
        gameActive = false;
        return;
    }

    if(gameState.includes("")){
        statusText.textContent = "It's a draw!"
        gameActive = false;
        return
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusText.textContent = `${currentPlayer}'s turn!`
}