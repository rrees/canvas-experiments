

export function drawHorizontalLine(context, colour, depth, thickness) {
	const ctx = context;

	ctx.beginPath();

	ctx.strokeStyle = colour;
	ctx.lineWidth = thickness;

	ctx.moveTo(1, depth);
	ctx.lineTo(canvas.width - 1, depth);
	ctx.stroke();
}
