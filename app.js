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

    currentPlayer = 'o'
  } else if (ev.target.textContent === '' && currentPlayer === 'o') {
    ev.target.textContent = 'o'
    var i = ev.target.id
    gridArray[i] = 'o'
    checkWinner()

    currentPlayer = 'x'
  }
}

function checkWinner() {
  if        (gridArray[0] === gridArray[1] && gridArray[1] === gridArray[2]) {
    var winner = gridArray[0]
    console.log('winner is: ' + winner)
  }

}

// DOM manipulation
var grids = document.querySelectorAll('div.grid')

for (var i = 0; i < grids.length; i++) {
  grids[i].addEventListener('click', playerMove)
}
