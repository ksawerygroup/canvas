const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round'; // połączenie lini
ctx.lineCap = 'round'; // koniec lini

let isDrawing = false;
let lastX = 50;
let lastY = 50;

function draw(e) {
  if (!isDrawing) return;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY); // start rysowania
  ctx.lineTo(e.offsetX, e.offsetY)
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY]; // skrót lastX = e.offsetX
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', () => isDrawing = true);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);