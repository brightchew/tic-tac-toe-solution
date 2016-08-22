gridArray =  [0, 0, 0,
              0, 0, 0,
              0, 0, 0]

// game logic
var currentPlayer = 'x'

function playerMove (ev) {
  ev.target.textContent = 'x'
}

// DOM manipulation
var grids = document.querySelectorAll('div.grid')

for (var i = 0; i < grids.length; i++) {
  grids[i].addEventListener('click', playerMove)
}
