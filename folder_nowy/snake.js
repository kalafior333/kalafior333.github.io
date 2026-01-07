//kontekst canvasu
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext('2d');
// domyślna wielkość obiektu
const box = 20;
let wynik=0;
let snake = [{ x: 9 * box, y: 9 * box }]; // początkowa pozycja
let direction = 'RIGHT'; // początkowy kierunek
let nextDirection = 'RIGHT';
let intervalId = null;
let speed = 300;
let food;
//strzałki
function adjustCanvas() {
    generateFood();
    const centerBar = document.getElementById("center-bar");
    // Pobieramy szerokość rodzica (center-bar)
    let parentWidth = centerBar.clientWidth;
    // Wysokość możemy zostawić zależną od okna lub też od rodzica
    let mw = parentWidth * 0.95;
    let mh = window.innerHeight * 0.7; // Wysokość na ok. 50% ekranu
    //let widthPix = window.innerWidth;
    //let heightPix = window.innerHeight;


    // Ograniczamy maksymalny rozmiar, żeby gra nie była za wielka na monitorach
    if (mw > 2000) mw = 2000;
    //if (mh > 800) mh = 800;

    // KLUCZOWE: Zaokrąglamy w dół do najbliższej wielokrotności 'box'
    canvas.width = Math.floor(mw / box) * box;
    canvas.height = Math.floor(mh / box) * box;
   // resetGame();
}
adjustCanvas();
// Reagujemy na zmianę rozmiaru okna (opcjonalne, zresetuje grę przy obrocie ekranu)
window.addEventListener('resize', () => {
    adjustCanvas(); 
});
document.addEventListener('keydown', changeDirection);
function changeDirection(event) {
   if (event.key === 'ArrowLeft' && direction !== 'RIGHT') nextDirection = 'LEFT';
    else if (event.key === 'ArrowUp' && direction !== 'DOWN') nextDirection = 'UP';
    else if (event.key === 'ArrowRight' && direction !== 'LEFT') nextDirection = 'RIGHT';
    else if (event.key === 'ArrowDown' && direction !== 'UP') nextDirection = 'DOWN';
}
function init() {
    wynikView();
    generateFood();
}
function generateFood() {
    food = {
    x: Math.floor(Math.random() * (canvas.width / box)) * box,
    y: Math.floor(Math.random() * (canvas.height / box)) * box
    };
}
function resetGame() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        snake = [{ x: 9 * box, y: 9 * box }];
        stopGame();
        direction = 'RIGHT';
        wynik=0;
        wynikView();
        food = {};
        generateFood();
        alert("przegrałeś lub zresetowałeś grę -> naciśnij ok");
}
function collision(head, array) {
    for (let i = 1; i < array.length; i++) {
        if (head.x === array[i].x && head.y === array[i].y) return true;
    }
    return false;
}
function game() {
    direction = nextDirection;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'red';
    ctx.fillRect(food.x, food.y, box, box);
    // pozycja głowy
    let headX = snake[0].x;
    let headY = snake[0].y;

    if (direction === 'RIGHT') headX += box;
    if (direction === 'LEFT') headX -= box;
    if (direction === 'UP') headY -= box;
    if (direction === 'DOWN') headY += box;

    if (headX < 0 || headX >= canvas.width || headY < 0 || headY >= canvas.height || collision({ x: headX, y: headY }, snake)) {
        resetGame();
    } else {
        snake.unshift({ x: headX, y: headY });
        if (headX === food.x && headY === food.y) {
            generateFood();
            wynik++;
            wynikView();
            // nie usuwamy ogona -> wąż rośnie
        } else {
            snake.pop(); // usuwa ostatni segment
        }
        // rysowanie
        for (let i = 0; i < snake.length; i++) {
            ctx.fillStyle = 'blue';
            ctx.strokeStyle = 'black';
            ctx.fillRect(snake[i].x, snake[i].y, box, box);
            ctx.strokeRect(snake[i].x, snake[i].y, box, box);
        }
    }
}
function wynikView() {
    document.getElementById("score").textContent = "Wynik: " + wynik;
}
// let loop = setInterval(game, 100);
function startGame() {
    document.getElementById("dificult").classList.add("opacity");
    if (intervalId) return;
    intervalId = setInterval(game, speed);
}
// zatrzymanie gry
function stopGame() {
    document.getElementById("dificult").classList.remove("opacity");
    clearInterval(intervalId);
    intervalId = null;
}
document.addEventListener("click", function (e) {
    if (e.target.classList.contains("dif")) {
        selectDif(e.target.id);
    }
});
function selectDif(id) {
    document.querySelectorAll(".dif").forEach(el => el.classList.remove("active"));
    document.getElementById(id).classList.add("active");
    switch (id) {
        case "easy": speed = 300; break;
        case "medium": speed = 200; break;
        case "hard": speed = 100; break;
        case "master": speed = 75; break;
    }
    resetGame();
}
// Obsługa dotyku dla telefonów
let touchStartX = 0;
let touchStartY = 0;
let touchEndX = 0;
let touchEndY = 0;

canvas.addEventListener("touchstart", function (e) {
    const touch = e.touches[0];
    touchStartX = touch.clientX;
    touchStartY = touch.clientY;
}, false);

canvas.addEventListener("touchmove", function (e) {
    e.preventDefault(); // zapobiega przewijaniu strony podczas przeciągania
    const touch = e.touches[0];
    touchEndX = touch.clientX;
    touchEndY = touch.clientY;
}, false);

canvas.addEventListener("touchend", function (e) {
    const dx = touchEndX - touchStartX;
    const dy = touchEndY - touchStartY;

    if (Math.abs(dx) > Math.abs(dy)) {
        // poziome przesunięcie
        if (dx > 0 && direction !== 'LEFT') nextDirection = 'RIGHT';
        else if (dx < 0 && direction !== 'RIGHT') nextDirection = 'LEFT';
    } else {
        // pionowe przesunięcie
        if (dy > 0 && direction !== 'UP') nextDirection = 'DOWN';
        else if (dy < 0 && direction !== 'DOWN') nextDirection = 'UP';
    }

    // resetujemy współrzędne po dotknięciu
    touchStartX = 0;
    touchStartY = 0;
    touchEndX = 0;
    touchEndY = 0;
}, false);