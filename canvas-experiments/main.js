
const canvas = document.querySelector('#canvas');

const ctx = canvas.getContext("2d");

ctx.fillStyle = "red";
ctx.fillRect(100, 100, 100, 100);

ctx.strokeRect(1, 1, canvas.width - 1, canvas.height - 1);