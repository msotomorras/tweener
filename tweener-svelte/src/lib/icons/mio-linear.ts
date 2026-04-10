import type { AnimContext } from '$lib/core/types';
import {
	getTime,
	getMyInter,
	getPosition,
	ellipse,
	ellipseStroke,
	arcStroke,
	rect,
	rectStroke,
	RAD1,
	RAD2,
	RAD3,
	THICK1,
	SIZE_GRID,
	FILL_COLOR
} from './animation';
import { hsbToRgb } from '$lib/canvas/canvasUtils';

const TWO_PI = Math.PI * 2;
const BG_HSB = hsbToRgb(0, 0, 30);
const DARK_BG = hsbToRgb(0, 0, 20);
const RAD_CORNER = SIZE_GRID / 20;

/**
 * Mio1: dots marching horizontally with opacity based on position.
 */
export function drawMio1(a: AnimContext): void {
	const { ctx, position, numEl } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);

	const dist = Math.sin((Math.PI / 2) * y);
	const sizeL = RAD3;

	for (let i = 0; i < numEl; i++) {
		let move = i / numEl;
		move += dist;
		move = move % 1;
		// map(move, 0, 1, -sizeGrid/2, sizeGrid/2)
		const positionX = move * SIZE_GRID - SIZE_GRID / 2;
		// abs(map(move, 0, 1, -1, 1))
		const rise = Math.abs(move * 2 - 1);

		ctx.fillStyle = hsbToRgb(0, 0, 255, (1 - rise) * 255);
		ellipse(ctx, positionX, 0, sizeL, sizeL);
	}

	ctx.restore();
}

/**
 * Mio2: a stroked circle with a dot orbiting around it.
 */
export function drawMio2(a: AnimContext): void {
	const { ctx, position } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);

	// Stroked outer circle
	ctx.strokeStyle = FILL_COLOR;
	ellipseStroke(ctx, 0, 0, RAD1, RAD1);

	// Orbiting filled dot
	ctx.save();
	ctx.rotate(y * TWO_PI);
	ctx.fillStyle = FILL_COLOR;
	ellipse(ctx, 0, RAD1 / 2, RAD3, RAD3);
	ctx.restore();

	ctx.restore();
}

/**
 * Mio3: a row of squares that alternately grow and shrink.
 */
export function drawMio3(a: AnimContext): void {
	const { ctx, position, numEl } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);

	const val = Math.sin(TWO_PI * y);

	ctx.fillStyle = FILL_COLOR;
	for (let i = 0; i < numEl; i++) {
		let mult = 1;
		if (i % 2 === 1) mult *= -1;

		const positionX = getPosition(i, numEl);
		let sizeL = RAD3;
		sizeL -= RAD3 * val * mult;
		rect(ctx, positionX, 0, sizeL, sizeL);
	}

	ctx.restore();
}

/**
 * Mio4: two filled pie arcs animating sequentially (fill + dark overlay).
 */
export function drawMio4(a: AnimContext): void {
	const { ctx, position } = a;
	const y = getTime(a);

	const aVal = getMyInter(y, 0, 2);
	const bVal = getMyInter(y, 1, 2);

	ctx.save();
	ctx.translate(position.x, position.y);

	const angle1 = Math.PI * 2 * aVal;
	const angle2 = Math.PI * 2 * bVal;

	// First pie: fill color
	ctx.fillStyle = FILL_COLOR;
	ctx.beginPath();
	ctx.moveTo(0, 0);
	ctx.ellipse(0, 0, RAD1 / 2, RAD1 / 2, 0, 0, angle1);
	ctx.closePath();
	ctx.fill();

	// Second pie: dark background overlay
	ctx.fillStyle = DARK_BG;
	ctx.beginPath();
	ctx.moveTo(0, 0);
	ctx.ellipse(0, 0, RAD1 / 2, RAD1 / 2, 0, 0, angle2);
	ctx.closePath();
	ctx.fill();

	ctx.restore();
}

/**
 * Mio5: two arc strokes animating sequentially (fill + dark).
 */
export function drawMio5(a: AnimContext): void {
	const { ctx, position } = a;
	const y = getTime(a);

	const strokeW = THICK1;
	const aVal = getMyInter(y, 0, 2);
	const bVal = getMyInter(y, 1, 2);

	ctx.save();
	ctx.translate(position.x, position.y);

	const angle = aVal * Math.PI * 2;
	const angle2 = bVal * Math.PI * 2;

	ctx.lineWidth = strokeW;

	ctx.strokeStyle = FILL_COLOR;
	arcStroke(ctx, 0, 0, RAD1, RAD1, 0, angle);

	ctx.strokeStyle = DARK_BG;
	arcStroke(ctx, 0, 0, RAD1, RAD1, 0, angle2);

	ctx.restore();
}

/**
 * Mio6: a rectangle whose width and height are driven by four interleaved phases.
 */
export function drawMio6(a: AnimContext): void {
	const { ctx, position } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);

	ctx.fillStyle = FILL_COLOR;

	const mult = RAD2;

	const aVal = getMyInter(y, 0, 8);
	const cVal = getMyInter(y, 2, 8);
	const eVal = getMyInter(y, 4, 8);
	const gVal = getMyInter(y, 6, 8);

	const sizeG = aVal * mult;
	const sizeW = cVal * mult;
	const sizeH = eVal * mult;
	const sizeD = gVal * mult;

	const sizeX = sizeG + sizeW - sizeD * 2;
	const sizeY = sizeG + sizeH - sizeD * 2;

	rect(ctx, 0, 0, sizeX, sizeY);

	ctx.restore();
}

/**
 * Mio7: a stroked ellipse that flips in pseudo-3D via X/Y scaling.
 */
export function drawMio7(a: AnimContext): void {
	const { ctx, position } = a;
	const y = getTime(a);

	const aVal = getMyInter(y, 0, 2);
	const bVal = getMyInter(y, 1, 2);

	ctx.save();
	ctx.translate(position.x, position.y);

	// rotateX -> scale(1, cos(a)), rotateY -> scale(cos(a), 1)
	ctx.scale(Math.cos(bVal * Math.PI), Math.cos(aVal * Math.PI));

	ctx.strokeStyle = FILL_COLOR;
	ellipseStroke(ctx, 0, 0, RAD1, RAD1);

	ctx.restore();
}

/**
 * Mio8: a pacman-like shape with two mouth cuts and marching dots.
 */
export function drawMio8(a: AnimContext): void {
	const { ctx, position, numEl } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);

	const aVal = getMyInter(y, 0, 2);
	const bVal = getMyInter(y, 1, 2);

	const angle = Math.sin(aVal * Math.PI) * 0.5;
	const angle2 = Math.sin(bVal * Math.PI) * 0.5;

	// Main body
	ctx.fillStyle = FILL_COLOR;
	ctx.beginPath();
	ctx.moveTo(0, 0);
	ctx.ellipse(0, 0, RAD1 / 2, RAD1 / 2, 0, angle, TWO_PI - angle);
	ctx.closePath();
	ctx.fill();

	// Front mouth (top)
	ctx.fillStyle = BG_HSB;
	ctx.beginPath();
	ctx.moveTo(0, 0);
	ctx.ellipse(0, 0, RAD1 / 2, RAD1 / 2, 0, -angle, angle);
	ctx.closePath();
	ctx.fill();

	// Back mouth (rotated PI)
	ctx.save();
	ctx.rotate(Math.PI);

	ctx.fillStyle = BG_HSB;
	ctx.beginPath();
	ctx.moveTo(0, 0);
	ctx.ellipse(0, 0, RAD1 / 2, RAD1 / 2, 0, -angle2, angle2);
	ctx.closePath();
	ctx.fill();

	ctx.restore();

	// Marching dots
	const dist = Math.sin((Math.PI / 2) * y);

	for (let i = 0; i < numEl; i++) {
		let move = i / numEl;
		move += dist;
		move = move % 1;
		// map(move, 0, 1, -20, 20)
		const positionX = move * 40 - 20;
		// abs(map(move, 0, 1, 1, -1))
		const rise = Math.abs(1 - move * 2);

		ctx.fillStyle = hsbToRgb(0, 0, 255, (1 - rise) * 255);
		ellipse(ctx, positionX, 0, RAD3 / 2, RAD3 / 2);
	}

	ctx.restore();
}

/**
 * Mio9: a center dot with radiating arms (CORNER-mode rects) that rotate and scale.
 */
export function drawMio9(a: AnimContext): void {
	const { ctx, position, numEl } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);

	ctx.fillStyle = FILL_COLOR;

	const aVal = getMyInter(y, 0, 2);
	const bVal = getMyInter(y, 1, 2);

	let sizeL = RAD3 * aVal;
	const sizeD = 1 - bVal;
	if (bVal > 0) sizeL = RAD3 * sizeD;

	const angleStep = TWO_PI / numEl;
	const angle2 = bVal * Math.PI * 2;

	// Center dot
	ellipse(ctx, 0, 0, sizeL, sizeL);

	// Radiating arms
	for (let i = 0; i < numEl; i++) {
		ctx.save();
		ctx.rotate(angleStep * i);
		ctx.rotate(angle2);
		// rectMode(CORNER): rect(rad3, 0, sizeL, thick1)
		ctx.fillRect(RAD3, 0, sizeL, THICK1);
		ctx.restore();
	}

	ctx.restore();
}

/**
 * Mio10: radiating centered bars (fill + bg overlay) that rotate and scale.
 */
export function drawMio10(a: AnimContext): void {
	const { ctx, position, numEl } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);

	const aVal = getMyInter(y, 0, 2);
	const bVal = getMyInter(y, 1, 2);

	let sizeL = RAD3 * aVal;
	const sizeL2 = RAD3 * bVal;

	const angleStep = TWO_PI / numEl;
	const angle2 = bVal * Math.PI * 2;

	// In Processing: if (a == 0) sizeL = size; where size defaults to 0
	if (aVal === 0) sizeL = 0;

	for (let i = 0; i < numEl; i++) {
		ctx.save();
		ctx.rotate(angleStep * i);
		ctx.rotate(angle2);

		// Fill bar
		ctx.fillStyle = FILL_COLOR;
		rect(ctx, 0, 0, sizeL * 4, THICK1);

		// Background overlay bar
		ctx.fillStyle = BG_HSB;
		rect(ctx, 0, 0, sizeL2 * 4, THICK1);

		ctx.restore();
	}

	ctx.restore();
}

/**
 * Mio11: nested rectangles (stroked) that breathe in size, rotated 45 degrees.
 */
export function drawMio11(a: AnimContext): void {
	const { ctx, position, numEl } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);
	ctx.rotate(Math.PI / 4);

	ctx.strokeStyle = FILL_COLOR;

	let sizeL = RAD3 * 2;
	const div = sizeL / numEl;
	const mult = Math.sin(y * TWO_PI);

	for (let i = 0; i < numEl; i++) {
		const val = i / numEl;
		sizeL += mult * div * val * 3;
		rectStroke(ctx, 0, 0, sizeL, sizeL);
	}

	ctx.restore();
}
