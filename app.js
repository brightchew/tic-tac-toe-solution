gridArray = [ 0, 0, 0,
              0, 0, 0,
              0, 0, 0]

// game logic
var currentPlayer = 'x'

function playerMove (ev) {
  if (ev.target.textContent === '' && currentPlayer === 'x') {
    ev.target.textContent = 'x'
    var i = ev.target.id
    gridArray[i] = 'x'
    checkWinner()
    isGameOver()

    currentPlayer = 'o'
  } else if (ev.target.textContent === '' && currentPlayer === 'o') {
    ev.target.textContent = 'o'
    var i = ev.target.id
    gridArray[i] = 'o'
    checkWinner()
    isGameOver()

    currentPlayer = 'x'
  }
  console.log(gridArray);
}

function checkWinner() {
  if        (gridArray[0] === gridArray[1] && gridArray[1] === gridArray[2]) {
    winner = gridArray[0]
  } else if (gridArray[3] === gridArray[4] && gridArray[4] === gridArray[5]) {
    winner = gridArray[3]
  } else if (gridArray[6] === gridArray[7] && gridArray[7] === gridArray[8]) {
    winner = gridArray[6]
  } else if (gridArray[0] === gridArray[3] && gridArray[3] === gridArray[6]) {
    winner = gridArray[0]
  } else if (gridArray[1] === gridArray[4] && gridArray[4] === gridArray[7]) {
    winner = gridArray[1]
  } else if (gridArray[2] === gridArray[5] && gridArray[5] === gridArray[8]) {
    winner = gridArray[2]
  } else if (gridArray[0] === gridArray[4] && gridArray[4] === gridArray[8]) {
    winner = gridArray[0]
  } else if (gridArray[2] === gridArray[4] && gridArray[4] === gridArray[6]) {
    winner = gridArray[2]
  } else {
    winner = 'it\'s a draw'
  }
}

function isGameOver() {
  if (winner === "x" || winner === "o") {
    document.getElementById('messageBox').innerHTML = 'winner is: ' + winner
  } else if (!gridArray.includes(0)){
    document.getElementById('messageBox').innerHTML = 'it\'s a draw!'
  }
}

// DOM manipulation
var grids = document.querySelectorAll('div.grid')

for (var i = 0; i < grids.length; i++) {
  grids[i].addEventListener('click', playerMove)
}
