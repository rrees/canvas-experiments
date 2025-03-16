
const canvas = document.querySelector('#canvas');

const ctx = canvas.getContext("2d");

function drawHorizontalLine(context, colour, depth, thickness) {
	const ctx = context;

	ctx.beginPath();

	ctx.strokeStyle = colour;
	ctx.lineWidth = thickness;

	ctx.moveTo(1, depth);
	ctx.lineTo(canvas.width - 1, depth);
	ctx.stroke();
}

ctx.fillStyle = "black";

ctx.fillRect(1, 1, canvas.width - 1, canvas.height - 1);


const stepSize = 20;

for (let i=stepSize; i < canvas.height; i += stepSize) {
	drawHorizontalLine(ctx, "white", i, 2);
}