let currentPlayer = 'X';
let cells = document.getElementsByClassName('cell');

function playerMove(cellNumber) {
    let cell = document.getElementById('cell-' + cellNumber);

    if (cell.innerHTML === '') {
        cell.innerHTML = currentPlayer;

        if (checkWin()) {
            alert('Player ' + currentPlayer + ' wins!');
            resetBoard();
            return;
        }

        if (checkDraw()) {
            alert('It\'s a draw!');
            resetBoard();
            return;
        }

        switchPlayer();
        computerMove();
    }
}

function switchPlayer() {
    currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
}

function checkWin() {
    let winningCombos = [
        [1, 2, 3], [4, 5, 6], [7, 8, 9], // Rows
        [1, 4, 7], [2, 5, 8], [3, 6, 9], // Columns
        [1, 5, 9], [3, 5, 7] // Diagonals
    ];

    for (let combo of winningCombos) {
        let [a, b, c] = combo;
        if (
            cells[a - 1].innerHTML === currentPlayer &&
            cells[b - 1].innerHTML === currentPlayer &&
            cells[c - 1].innerHTML === currentPlayer
        ) {
            return true;
        }
    }

    return false;
}

function checkDraw() {
    for (let cell of cells) {
        if (cell.innerHTML === '') {
            return false;
        }
    }
    return true;
}

function resetBoard() {
    for (let cell of cells) {
        cell.innerHTML = '';
    }
    currentPlayer = 'X';
}

function computerMove() {
    let availableCells = [];

    for (let cell of cells) {
        if (cell.innerHTML === '') {
            availableCells.push(cell);
        }
    }

    if (availableCells.length > 0) {
        let randomCell = availableCells[Math.floor(Math.random() * availableCells.length)];
        randomCell.innerHTML = currentPlayer;

        if (checkWin()) {
            alert('Player ' + currentPlayer + ' wins!');
            resetBoard();
            return;
        }

        if (checkDraw()) {
            alert('It\'s a draw!');
            resetBoard();
            return;
        }

        switchPlayer();
    }
}
