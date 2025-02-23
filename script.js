
// select the necessary html elements
const board = document.getElementById("board");
const statusText = document.getElementById("status");
const resetButton = document.getElementById("reset");

//set up games essential variables
let currentPlayer = "X";
let gameState = ["", "", "", "", "", "", "", "", ""]
let gameActive = "true";