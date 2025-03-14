
const canvas = document.querySelector('#canvas');

const ctx = canvas.getContext("2d");

ctx.fillStyle = "black";

ctx.fillRect(1, 1, canvas.width - 1, canvas.height - 1);

ctx.beginPath();

ctx.strokeStyle = "white";
ctx.lineWidth = 2;

ctx.moveTo(20, 1);
ctx.lineTo(20, canvas.height - 1);
ctx.stroke();