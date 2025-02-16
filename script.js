// store gameboard as an array in a Gameboard objec//

function Gameboard() {
    const rows = 3;
    const columns = 3;
    const gameboard = [];

    // Need a 2d array to create the game board for later
    // i = 0 represents topmost row and j = 0 represents top left column
    for(let i = 0; i < rows ; i++){
        gameboard[i] = [];
        for(let j = 0; j < columns ; j++){
            board[i].push(Cell());
        }
    }
}