import type { AnimContext } from '$lib/core/types';
import {
	getTime,
	getMyInter,
	ellipse,
	rect,
	RAD1,
	RAD2,
	RAD3,
	JUMP,
	FILL_COLOR
} from './animation';
import { hsbToRgb } from '$lib/canvas/canvasUtils';

const MARGIN = 0.5;
const TWO_PI = Math.PI * 2;
const BG_HSB = hsbToRgb(0, 0, 30);

/**
 * Pacman: a pie-chart mouth that opens and closes.
 */
export function drawPacman(a: AnimContext): void {
	const { ctx, position } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);

	const angle = Math.sin(y * Math.PI) * MARGIN;

	// Main body (fill arc)
	ctx.fillStyle = FILL_COLOR;
	ctx.beginPath();
	ctx.moveTo(0, 0);
	ctx.ellipse(0, 0, RAD1 / 2, RAD1 / 2, 0, angle, TWO_PI - angle);
	ctx.closePath();
	ctx.fill();

	// Background "mouth" wedge
	ctx.fillStyle = BG_HSB;
	ctx.beginPath();
	ctx.moveTo(0, 0);
	ctx.ellipse(0, 0, RAD1 / 2, RAD1 / 2, 0, -angle, angle);
	ctx.closePath();
	ctx.fill();

	ctx.restore();
}

/**
 * Flower: five petals in a pentagon arrangement with a breathing center dot.
 */
export function drawFlower(a: AnimContext): void {
	const { ctx, position } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);
	ctx.rotate(y * TWO_PI);

	ctx.fillStyle = FILL_COLOR;

	let dist = MARGIN + Math.sin(Math.PI * y);
	dist *= JUMP;

	let radCen = RAD3;
	radCen *= 0.3 + Math.sin(Math.PI * y);

	const rad18 = (18 * Math.PI) / 180;
	const rad54 = (54 * Math.PI) / 180;
	const rad162 = ((180 - 18) * Math.PI) / 180;
	const rad126 = ((180 - 54) * Math.PI) / 180;

	ellipse(ctx, 0, -dist, RAD3, RAD3);
	ellipse(ctx, -dist * Math.cos(rad162), -dist * Math.sin(rad18), RAD3, RAD3);
	ellipse(ctx, -dist * Math.cos(rad18), -dist * Math.sin(rad18), RAD3, RAD3);
	ellipse(ctx, -dist * Math.cos(rad54), -dist * Math.sin(-rad54), RAD3, RAD3);
	ellipse(ctx, -dist * Math.cos(rad126), -dist * Math.sin(-rad54), RAD3, RAD3);
	ellipse(ctx, 0, 0, radCen, radCen);

	ctx.restore();
}

/**
 * Rectangle: a square that flips in pseudo-3D via X/Y scaling.
 */
export function drawRectangle(a: AnimContext): void {
	const { ctx, position } = a;
	const y = getTime(a);

	const aVal = getMyInter(y, 0, 2);
	const bVal = getMyInter(y, 1, 2);

	ctx.save();
	ctx.translate(position.x, position.y);

	// rotateX -> scale(1, cos(a))  /  rotateY -> scale(cos(a), 1)
	ctx.scale(Math.cos(bVal * Math.PI), Math.cos(aVal * Math.PI));

	ctx.fillStyle = FILL_COLOR;
	rect(ctx, 0, 0, RAD2, RAD2);

	ctx.restore();
}
