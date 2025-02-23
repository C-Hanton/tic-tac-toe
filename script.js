
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
]