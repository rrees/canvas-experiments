import { drawHorizontalLine } from './lines.js';

const canvas = document.querySelector('#canvas');

const ctx = canvas.getContext("2d");

ctx.fillStyle = "black";

ctx.fillRect(1, 1, canvas.width - 1, canvas.height - 1);

drawHorizontalLine(ctx, "white", 20, 2);