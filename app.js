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

    currentPlayer = 'o'
  } else if (ev.target.textContent === '' && currentPlayer === 'o') {
    ev.target.textContent = 'o'
    var i = ev.target.id
    gridArray[i] = 'o'

    currentPlayer = 'x'
  }
  console.log(gridArray);
}

// DOM manipulation
var grids = document.querySelectorAll('div.grid')

for (var i = 0; i < grids.length; i++) {
  grids[i].addEventListener('click', playerMove)
}
