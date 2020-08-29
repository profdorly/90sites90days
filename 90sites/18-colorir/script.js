const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.heigth = window.innerHeight;
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

// ctx.font = "3rem Arial";
// ctx.fillText("Jogue sua criatividade aqui!😄", window.innerWidth / 3.5, window.innerHeight / 2);
// ctx.font = "1.5rem Arial";
// ctx.fillText("(Apenas com mouse, por enquanto 🐭)", (window.innerWidth / 2.9) + 20, (window.innerHeight / 2) + 50);

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e) {
    if (!isDrawing) return;
    console.log(e);
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
    hue++;
    if (hue > 360) {
        hue = 0;
    }
    if (ctx.lineWidth >= 150 || ctx.lineWidth <= 1) {
        direction = !direction
    }
    if (direction) {
        ctx.lineWidth++;
    } else {
        ctx.lineWidth--;

    }
}

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);


const body = document.querySelector('body')
const hide = document.getElementById('start')

body.addEventListener('click', function () {
    hide.style.display="none"
})