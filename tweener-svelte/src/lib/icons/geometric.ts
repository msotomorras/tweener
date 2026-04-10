import type { AnimContext } from '$lib/core/types';
import {
	getTime,
	getColorVar,
	ellipse,
	arcStroke,
	RAD1,
	RAD2,
	RAD3,
	JUMP,
	JUMP2,
	SIZE_GRID,
	FILL_COLOR
} from './animation';
import { hsbToRgb } from '$lib/canvas/canvasUtils';

const MARGIN = 0.5;
const TWO_PI = Math.PI * 2;
const HALF_PI = Math.PI / 2;

/**
 * Triangle: three dots rotating in a triangle pattern that breathes in/out.
 */
export function drawTriangle(a: AnimContext): void {
	const { ctx, position } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);
	ctx.rotate(y * TWO_PI);

	ctx.fillStyle = FILL_COLOR;

	let dist = MARGIN + Math.sin(Math.PI * y);
	dist *= JUMP;

	ellipse(ctx, 0, dist, RAD3, RAD3);
	ellipse(
		ctx,
		-dist * Math.cos((30 * Math.PI) / 180),
		-dist * Math.sin((30 * Math.PI) / 180),
		RAD3,
		RAD3
	);
	ellipse(
		ctx,
		dist * Math.cos((30 * Math.PI) / 180),
		-dist * Math.sin((30 * Math.PI) / 180),
		RAD3,
		RAD3
	);

	ctx.restore();
}

/**
 * Arc: a single rotating arc stroke (270 degrees).
 */
export function drawArc(a: AnimContext): void {
	const { ctx, position } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);
	ctx.rotate(y * TWO_PI);

	ctx.strokeStyle = FILL_COLOR;

	arcStroke(ctx, 0, 0, RAD1, RAD1, 0, 3 * HALF_PI);

	ctx.restore();
}

/**
 * Circles: a single pulsing circle with variable opacity.
 */
export function drawCircles(a: AnimContext): void {
	const { ctx, position } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);

	const colorVar = getColorVar(y, Math.PI);
	ctx.fillStyle = hsbToRgb(0, 0, 255, 255 - colorVar);

	ellipse(ctx, 0, 0, RAD1, RAD1);

	ctx.restore();
}

/**
 * ArcsBall: a filled circle with two small arc strokes, all breathing in size.
 */
export function drawArcsBall(a: AnimContext): void {
	const { ctx, position } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);
	ctx.rotate(y * TWO_PI);

	let radL = RAD2;
	let rad1L = RAD1;
	radL *= 1 + Math.sin(y * Math.PI) * JUMP2;
	rad1L *= 1 + Math.sin(y * Math.PI) * JUMP2;

	// Filled circle
	ctx.fillStyle = FILL_COLOR;
	ellipse(ctx, 0, 0, radL, radL);

	// Arc strokes
	ctx.strokeStyle = FILL_COLOR;
	arcStroke(ctx, 0, 0, rad1L, rad1L, 0, Math.PI / 3);
	arcStroke(ctx, 0, 0, rad1L, rad1L, Math.PI, Math.PI + Math.PI / 3);

	ctx.restore();
}

/**
 * Balls: two orbiting dots and a breathing center dot.
 */
export function drawBalls(a: AnimContext): void {
	const { ctx, position } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);
	ctx.rotate(y * TWO_PI);

	let radCenter = Math.sin(y * Math.PI) + MARGIN;
	radCenter *= JUMP;

	ctx.fillStyle = FILL_COLOR;
	ellipse(ctx, SIZE_GRID * 0.625, 0, RAD3, RAD3);
	ellipse(ctx, -SIZE_GRID * 0.625, 0, RAD3, RAD3);
	ellipse(ctx, 0, 0, radCenter, radCenter);

	ctx.restore();
}

/**
 * Arcs: four arc strokes forming a rotating, breathing pattern.
 */
export function drawArcs(a: AnimContext): void {
	const { ctx, position } = a;
	const y = getTime(a);

	ctx.save();

	let rad1L = RAD1;
	let rad2L = RAD2;
	rad1L *= 1 + Math.sin(y * Math.PI) * JUMP2;
	rad2L *= 1 + Math.sin(y * Math.PI) * JUMP2;

	ctx.translate(position.x, position.y);
	ctx.rotate(y * TWO_PI);

	ctx.strokeStyle = FILL_COLOR;

	arcStroke(ctx, 0, 0, rad1L, rad1L, 0, Math.PI / 2);
	arcStroke(ctx, 0, 0, rad1L, rad1L, Math.PI, (3 * Math.PI) / 2);
	arcStroke(ctx, 0, 0, rad2L, rad2L, Math.PI / 2, Math.PI);
	arcStroke(ctx, 0, 0, rad2L, rad2L, (3 * Math.PI) / 2, 2 * Math.PI);

	ctx.restore();
}
