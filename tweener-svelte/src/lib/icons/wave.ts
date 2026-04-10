import type { AnimContext } from '$lib/core/types';
import {
	getTime,
	getMyInter,
	getMyInter2,
	getPosition,
	getColorVar,
	ellipse,
	RAD1,
	RAD3,
	JUMP,
	SIZE_GRID,
	FILL_COLOR
} from './animation';
import { hsbToRgb } from '$lib/canvas/canvasUtils';

const BG_HSB = hsbToRgb(0, 0, 30);

/**
 * Warm: a row of dots that wave up and down sequentially.
 */
export function drawWarm(a: AnimContext): void {
	const { ctx, position, numEl } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);

	ctx.fillStyle = FILL_COLOR;
	const sizeL = RAD3;

	for (let i = 0; i < numEl; i++) {
		let displace = getMyInter2(y, i, numEl);
		displace = Math.sin(Math.PI * displace);
		// map(displace, 0, 1, 20, 35)
		displace = 20 + displace * 15;

		const positionX = getPosition(i, numEl);
		const positionY = JUMP - displace;
		ellipse(ctx, positionX, positionY, sizeL, sizeL);
	}

	ctx.restore();
}

/**
 * Warm2: a row of dots that pulse in size sequentially.
 */
export function drawWarm2(a: AnimContext): void {
	const { ctx, position, numEl } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);

	ctx.fillStyle = FILL_COLOR;

	for (let i = 0; i < numEl; i++) {
		let val = getMyInter2(y, i, numEl);
		val = Math.sin(Math.PI * val);
		// map(val, 0, 1, .7, 1.2)
		val = 0.7 + val * 0.5;

		const positionX = getPosition(i, numEl);
		ellipse(ctx, positionX, 0, RAD3 * val, RAD3 * val);
	}

	ctx.restore();
}

/**
 * Eight: two mirrored dots that trace a figure-eight path.
 */
export function drawEight(a: AnimContext): void {
	const { ctx, position, numEl } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);

	ctx.fillStyle = FILL_COLOR;

	let dist = Math.sin(Math.PI * y);
	dist *= JUMP;

	const aVal = getMyInter(y, 0, 3);
	const bVal = getMyInter(y, 1, 3);

	for (let i = 0; i < numEl; i++) {
		let positionX = 0;
		let positionY = 0;
		let mult = 1;
		if (i % 2 === 1) mult *= -1;

		positionX += dist * aVal;
		positionY += dist * aVal;
		positionX -= dist * bVal * 2;

		ellipse(ctx, positionX * mult, positionY * mult, RAD3, RAD3);
	}

	ctx.restore();
}

/**
 * Seven: a dot that grows/fades with phased opacity.
 */
export function drawSeven(a: AnimContext): void {
	const { ctx, position, numEl } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);

	const aVal = getMyInter(y, 0, 3);
	const bVal = getMyInter(y, 1, 2);

	const sizeL = aVal * RAD3;

	for (let i = 0; i < numEl; i++) {
		ctx.save();

		let colorVar = 0;
		if (aVal > 0) colorVar = 255;
		if (bVal > 0) colorVar = 255 - getColorVar(bVal, Math.PI / 2);

		ctx.fillStyle = hsbToRgb(0, 0, 255, colorVar);

		ellipse(ctx, 0, sizeL * 4, RAD3, RAD3);

		ctx.restore();
	}

	ctx.restore();
}

/**
 * Six: two concentric circles (fill + bg) that scale independently.
 */
export function drawSix(a: AnimContext): void {
	const { ctx, position } = a;
	const y = getTime(a);

	const dist = Math.sin((Math.PI / 2) * y);

	const aVal = getMyInter(y, 0, 2);
	const bVal = getMyInter(y, 1, 2);

	ctx.save();
	ctx.translate(position.x, position.y);

	const size1 = dist * RAD1 * aVal;
	const size2 = dist * RAD1 * bVal;

	ctx.fillStyle = FILL_COLOR;
	ellipse(ctx, 0, 0, size1, size1);

	ctx.fillStyle = BG_HSB;
	ellipse(ctx, 0, 0, size2, size2);

	ctx.restore();
}

/**
 * Five: mirrored dots that walk diagonally in opposing pairs.
 */
export function drawFive(a: AnimContext): void {
	const { ctx, position, numEl } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);

	ctx.fillStyle = FILL_COLOR;

	let dist = Math.sin(Math.PI * y);
	dist *= JUMP;
	let positionX = SIZE_GRID / 2;
	let positionY = SIZE_GRID / 4;

	const aVal = getMyInter(y, 0, 2);
	const bVal = getMyInter(y, 1, 2);

	for (let i = 0; i < numEl; i++) {
		let mult = 1;
		if (i % 2 === 1) mult *= -1;

		positionX -= dist * aVal * SIZE_GRID * 0.05;
		positionY -= dist * bVal * SIZE_GRID * 0.11;

		ellipse(ctx, positionX * mult, positionY * mult, RAD3, RAD3);
		ellipse(ctx, -positionX, -positionY, RAD3, RAD3);
	}

	ctx.restore();
}
