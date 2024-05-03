const gameContainer = document.getElementById('gameContainer');
const tilesContainer = document.getElementById('tilesContainer');
const scoreValue = document.getElementById('scoreValue');

let score = 0;
const pattern = [3, 6, 9, 12]; // Índices de los cuadros negros en el patrón
const numRows = 4; // Número de filas en la cuadrícula
const numCols = 4; // Número de columnas en la cuadrícula

gameContainer.addEventListener('click', handleClick);

function createTile(row, col) {
    const tile = document.createElement('div');
    tile.classList.add('tile');
    tile.style.left = `${(col - 1) * 100}px`; // Calcular posición horizontal
    tile.style.top = `${(row - 1) * 100}px`; // Calcular posición vertical
    tile.dataset.row = row;
    tile.dataset.col = col;
    tile.addEventListener('transitionend', handleTileTransitionEnd);
    
    const isBlack = pattern.includes((row - 1) * numCols + col); // Comprobar si el cuadro debe ser negro
    if (isBlack) {
        tile.classList.add('black');
    }
    
    tilesContainer.appendChild(tile);
}

function handleTileTransitionEnd(event) {
    if (event.propertyName === 'top' && event.target.style.top === '600px') {
        event.target.remove();
        if (!event.target.classList.contains('black')) {
            gameOver();
        } else {
            score++;
            scoreValue.textContent = score;
            if (score === pattern.length) {
                resetGame();
            }
        }
    }
}

function handleClick(event) {
    if (event.target.classList.contains('black')) {
        event.target.remove();
        score++;
        scoreValue.textContent = score;
        if (score === pattern.length) {
            resetGame();
        }
    } else {
        gameOver();
    }
}

function gameOver() {
    alert(`¡Juego terminado! Puntuación final: ${score}`);
    resetGame();
}

function resetGame() {
    score = 0;
    scoreValue.textContent = score;
    tilesContainer.innerHTML = ''; // Limpiar las baldosas
    createGrid(); // Volver a crear la cuadrícula
}

// Crear la cuadrícula de baldosas
function createGrid() {
    for (let i = 1; i <= numRows; i++) {
        for (let j = 1; j <= numCols; j++) {
            createTile(i, j);
        }
    }
}

// Inicializar el juego creando la cuadrícula
createGrid();

// Crear una fila de baldosas en cada intervalo
setInterval(() => {
    for (let j = 1; j <= numCols; j++) {
        createTile(1, j);
    }
}, 1000);
