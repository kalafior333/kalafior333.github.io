//kontekst canvasu
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext('2d');
// domyślna wielkość obiektu
const box = 20;
let wynik=0;
let snake = [{ x: 9 * box, y: 9 * box }]; // początkowa pozycja
let direction = 'RIGHT'; // początkowy kierunek
//strzałki
document.addEventListener('keydown', changeDirection);
function changeDirection(event) {
    if (event.key === 'ArrowLeft' && direction !== 'RIGHT') direction = 'LEFT';
    else if (event.key === 'ArrowUp' && direction !== 'DOWN') direction = 'UP';
    else if (event.key === 'ArrowRight' && direction !== 'LEFT') direction = 'RIGHT';
    else if (event.key === 'ArrowDown' && direction !== 'UP') direction = 'DOWN';
    console.log(direction);
}
let food = {
    x: Math.floor(Math.random() * (canvas.width / box)) * box,
    y: Math.floor(Math.random() * (canvas.height / box)) * box
};
function collision(head, array) {
    for (let i = 1; i < array.length; i++) {
        if (head.x === array[i].x && head.y === array[i].y) return true;
    }
    return false;
}
function game() {
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

    if (headX<0 || headX>=900 || headY<0 || headY>=600 || collision({ x: headX, y: headY },snake)) {
        snake = [{ x: 9 * box, y: 9 * box }];
        alert("kliknij ok, aby zagrać ponownie");
        wynik=0;
        wynikView();
    } else {
        snake.unshift({ x: headX, y: headY });
        if (headX === food.x && headY === food.y) {
            food = {
                x: Math.floor(Math.random() * (canvas.width / box)) * box,
                y: Math.floor(Math.random() * (canvas.height / box)) * box
            };
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
    console.log("sksks")
}
let loop = setInterval(game, 100);