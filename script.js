var sequence = [1, 2, 3, 4]; // Secuencia que el jugador debe seguir
var playerSequence = []; // Secuencia que el jugador ha presionado

// Crear la cuadrícula
var grid = document.getElementById('grid');
for (var i = 0; i < 40; i++) {
    var cell = document.createElement('div');
    cell.classList.add('cell');
    cell.addEventListener('click', (function (index) {
        return function () {
            this.classList.add('active');
            playerSequence.push(index % 4 + 1);
        }
    })(i));
    grid.appendChild(cell);
}

// Verificar la secuencia
function checkSequence() {
    if (JSON.stringify(sequence) === JSON.stringify(playerSequence)) {
        alert('¡Has ganado!');
    } else {
        alert('Has perdido. Intenta de nuevo.');
    }
    playerSequence = [];
    var cells = document.getElementsByClassName('cell');
    for (var i = 0; i < cells.length; i++) {
        cells[i].classList.remove('active');
    }
}