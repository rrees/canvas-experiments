import { drawHorizontalLine } from './lines.js';

const canvas = document.querySelector('#canvas');

const ctx = canvas.getContext("2d");

ctx.fillStyle = "black";

ctx.fillRect(1, 1, canvas.width - 1, canvas.height - 1);


const stepSize = 20;

for (let i=stepSize; i < canvas.height; i += stepSize) {
	drawHorizontalLine(ctx, "white", i, 2);
}