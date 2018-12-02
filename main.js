const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round'; // połączenie lini
ctx.lineCap = 'round'; // koniec lini
ctx.lineWidth = 10;

let isDrawing = false;
let lastX = 50;
let lastY = 50;
let hue = 0;

function draw(e) {
  if (!isDrawing) return;
  ctx.strokeStyle = `hsl(${hue}, 100% ,50%)`
  ctx.beginPath();
  ctx.moveTo(lastX, lastY); // start rysowania
  ctx.lineTo(e.offsetX, e.offsetY)
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY]; // skrót lastX = e.offsetX
  hue++;
  if (hue > 360) {
    hue = 0;
  };
  ctx.lineWidth++;
  if (ctx.lineWidth > 100) {
    ctx.lineWidth = 10
  }
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mouseup', () => {
  isDrawing = false;
  hue = 0;
});
canvas.addEventListener('mouseout', () => isDrawing = false);