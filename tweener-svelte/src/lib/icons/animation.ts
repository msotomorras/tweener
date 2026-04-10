import type { AnimContext } from '$lib/core/types';
import { hsbToRgb } from '$lib/canvas/canvasUtils';

export const SIZE_GRID = 30;
export const ICON_MARGIN = SIZE_GRID * 2.7;

export function getTime(ctx: AnimContext): number {
	const x = (ctx.timeMs / 1200) % 1;
	return ctx.polyFn(x);
}

/** Subdivides the animation cycle into `num` phases, returns progress [0,1] in phase `myID` */
export function getMyInter(interval: number, myID: number, num: number): number {
	const size = 1 / num;
	const result = (interval - myID * size) / size;
	return Math.min(1, Math.max(0, result));
}

/** Distance-based wave timing: returns distance from element's assigned phase position */
export function getMyInter2(interval: number, myID: number, num: number): number {
	const size = 1 / num;
	const pos = size * myID;
	const result = Math.abs(pos - interval);
	return Math.min(1, Math.max(0, result));
}

/** Map element index to position in range [-sizeGrid/2, sizeGrid/2] */
export function getPosition(i: number, numEl: number): number {
	if (numEl <= 1) return 0;
	const move = i / (numEl - 1);
	return move * SIZE_GRID - SIZE_GRID / 2;
}

/** Calculate element size for circular arrangement */
export function getSizeCircular(numEl: number, rad: number): number {
	if (numEl <= 0) return 0;
	const circ = Math.PI * 2 * rad;
	return (circ / numEl) * 0.4;
}

/** Sin-based color/opacity variation */
export function getColorVar(y: number, angle: number): number {
	return ((Math.sin(angle * y) + 1) / 2) * 255;
}

// Size constants derived from sizeGrid
export const RAD1 = SIZE_GRID;
export const RAD2 = SIZE_GRID / 2;
export const RAD3 = SIZE_GRID / 5;
export const RAD4 = SIZE_GRID / 25;
export const THICK1 = SIZE_GRID / 8;
export const THICK2 = SIZE_GRID / 10;
export const JUMP = SIZE_GRID * 0.375;
export const JUMP2 = SIZE_GRID * 0.0075;
export const JUMP3 = SIZE_GRID * 0.075;

/** Default fill color: light on dark background */
export const FILL_COLOR = hsbToRgb(0, 0, 255);
export const BG_COLOR = 30; // dark background brightness

/** Get grid position for icon at given index */
export function getGridPosition(
	index: number,
	elementsPerRow: number
): { x: number; y: number } {
	const startX = 50;
	const startY = 50;
	const ix = index % elementsPerRow;
	const iy = Math.floor(index / elementsPerRow);
	return {
		x: startX + ix * SIZE_GRID * 2.5,
		y: startY + iy * 10 * SIZE_GRID / 4
	};
}

// Canvas drawing helpers that match Processing's API

export function ellipse(
	ctx: CanvasRenderingContext2D,
	x: number,
	y: number,
	w: number,
	h?: number
): void {
	const rh = h ?? w;
	ctx.beginPath();
	ctx.ellipse(x, y, w / 2, rh / 2, 0, 0, Math.PI * 2);
	ctx.fill();
}

export function ellipseStroke(
	ctx: CanvasRenderingContext2D,
	x: number,
	y: number,
	w: number,
	h?: number
): void {
	const rh = h ?? w;
	ctx.beginPath();
	ctx.ellipse(x, y, w / 2, rh / 2, 0, 0, Math.PI * 2);
	ctx.stroke();
}

export function rect(
	ctx: CanvasRenderingContext2D,
	x: number,
	y: number,
	w: number,
	h?: number
): void {
	const rh = h ?? w;
	ctx.fillRect(x - w / 2, y - rh / 2, w, rh);
}

export function rectStroke(
	ctx: CanvasRenderingContext2D,
	x: number,
	y: number,
	w: number,
	h?: number
): void {
	const rh = h ?? w;
	ctx.strokeRect(x - w / 2, y - rh / 2, w, rh);
}

export function arc(
	ctx: CanvasRenderingContext2D,
	x: number,
	y: number,
	w: number,
	h: number,
	start: number,
	stop: number
): void {
	ctx.beginPath();
	ctx.ellipse(x, y, w / 2, h / 2, 0, start, stop);
	ctx.fill();
}

export function arcStroke(
	ctx: CanvasRenderingContext2D,
	x: number,
	y: number,
	w: number,
	h: number,
	start: number,
	stop: number
): void {
	ctx.beginPath();
	ctx.ellipse(x, y, w / 2, h / 2, 0, start, stop);
	ctx.stroke();
}

export function line(
	ctx: CanvasRenderingContext2D,
	x1: number,
	y1: number,
	x2: number,
	y2: number
): void {
	ctx.beginPath();
	ctx.moveTo(x1, y1);
	ctx.lineTo(x2, y2);
	ctx.stroke();
}

export function point(ctx: CanvasRenderingContext2D, x: number, y: number): void {
	ctx.fillRect(x, y, 1, 1);
}
