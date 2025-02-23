
document.addEventListener("DOMContentLoaded", () => {
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
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6] //diagonals
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
        board.appendChild(cell);
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

// checking for a Winner
function checkWinner(){
    return winningCombinations.some(combination => { //Iterates over winningCombinations and checks if any of them have the same non-empty value.
        const [a, b, c] = combination;
        return gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]; //If a combination matches, the function returns true.
    })
}

//resetting the board
resetButton.addEventListener("click", () => {
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
    gameActive = true;
    statusText.textContent = "Player X's turn";
    createBoard();
});

// initialize the game
createBoard();

});