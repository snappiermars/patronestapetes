var sequence = [2, 3, 2, 3, 2, 3, 2, 3, 2, 3]; // Secuencia que el jugador debe seguir
var playerSequence = []; // Secuencia que el jugador ha presionado

// Crear la cuadrícula
var grid = document.getElementById('grid');
for (var i = 0; i < 40; i++) {
    var cell = document.createElement('div');
    cell.classList.add('cell');
    cell.addEventListener('click', (function (index) {
        return function () {
            if (this.classList.contains('active')) {
                this.classList.remove('active');
                this.classList.add('desactive');
                playerSequence.pop(index % 4 + 1);
            } else {
                this.classList.add('active');
                playerSequence.push(index % 4 + 1);
            }
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