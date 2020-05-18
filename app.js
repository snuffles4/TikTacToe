let cells = document.querySelectorAll(".row > div");
let player1 = "X";
let player2 = "O"
turn = 0
let isGameOver = false;
let wins = [
    [cells[0], cells[1], cells[2]],
    [cells[3], cells[4], cells[5]],
    [cells[6], cells[7], cells[8]],
    [cells[0], cells[3], cells[6]],
    [cells[1], cells[4], cells[7]],
    [cells[2], cells[5], cells[8]],
    [cells[0], cells[4], cells[8]],
    [cells[2], cells[4], cells[6]]
];

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked);
}

function cellClicked() {
    if (turn === 0) {
        event.target.textContent = player1;
        turn++

    } else if () {
        event.target.textContent = player2;
        turn--
    }
    checkForWin();
}


function checkForWin() {
    for (j = 0; j < wins.length; j++) {
        let counter = 0;
        for (p = 0; p < wins[j].length; p++) {
            if (wins[j][p].innerHTML == player1 || player2) {
                counter++
            }
            if (turn == 3 && event.target.textContent === "X") {
                isGameOver = true
                alert(player1 + ' Wins!');
                reloadPage();
            } else if (counter == 3 && event.target.textContent === "O"); {
                isGameOver = true
                alert(player2 + "Wins!");
                reloadPage();
            }
        }
    }
}
if (turn === 9 && !isGameOver) {
    alert("IT'S A DRAW")
    reloadPage();
}

function reset() {
    onClick = "window.location.reload();"
}