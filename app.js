gridArray = [ 0, 0, 0,
              0, 0, 0,
              0, 0, 0]

// game logic
var currentPlayer = 'x'

function playerMove (ev) {
  if (currentPlayer === 'x') {
    ev.target.textContent = 'x'

    currentPlayer = 'o'
  } else if (currentPlayer === 'o') {
    ev.target.textContent = 'o'

    currentPlayer = 'x'
  }
}

// DOM manipulation
var grids = document.querySelectorAll('div.grid')

for (var i = 0; i < grids.length; i++) {
  grids[i].addEventListener('click', playerMove)
}
