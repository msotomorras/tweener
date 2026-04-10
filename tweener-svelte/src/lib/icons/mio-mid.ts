import type { AnimContext } from '$lib/core/types';
import {
	getTime,
	getMyInter,
	getMyInter2,
	getPosition,
	getColorVar,
	RAD1,
	RAD2,
	RAD3,
	RAD4,
	THICK1,
	THICK2,
	JUMP,
	JUMP2,
	JUMP3,
	SIZE_GRID,
	FILL_COLOR,
	BG_COLOR,
	ellipse,
	ellipseStroke,
	rect,
	rectStroke,
	arc,
	arcStroke,
	line,
	point
} from './animation';
import { hsbToRgb } from '$lib/canvas/canvasUtils';

const TWO_PI = Math.PI * 2;
const HALF_PI = Math.PI / 2;
const PI = Math.PI;
const RAD_CORNER = SIZE_GRID / 20;
const LENGTH = SIZE_GRID - 10;

function map(val: number, inMin: number, inMax: number, outMin: number, outMax: number): number {
	return outMin + ((val - inMin) / (inMax - inMin)) * (outMax - outMin);
}

function getFillGrad(a: number, angle: number): number {
	const grow = Math.sin(a * angle);
	let fg = 1 - grow;
	fg = 30 + (fg / 1) * (255 - 30);
	return fg;
}

// ── Mio42 ──────────────────────────────────────────────────────────────────────
export function drawMio42(a: AnimContext): void {
	const ctx = a.ctx;
	const numEl = a.numEl;
	const y = getTime(a);

	ctx.save();
	ctx.rotate(PI);

	for (let i = numEl + 1; i > 0; i--) {
		const aVal = getMyInter2(y, i, numEl);
		const radO = RAD3;
		const angle = (i / numEl) * PI;

		ctx.save();
		// inner pushMatrix/popMatrix pair is a no-op
		ctx.translate(radO * Math.cos(angle) * 2, 0);
		ctx.rotate(angle);
		ctx.rotate((1 - Math.sin(aVal * PI)) * (PI / 2));

		const fillGrad = getFillGrad(aVal, PI);
		ctx.fillStyle = hsbToRgb(0, 0, 255, fillGrad);
		rect(ctx, 0, 0, LENGTH, 1);
		ctx.restore();
	}

	ctx.restore();
}

// ── Mio43 ──────────────────────────────────────────────────────────────────────
export function drawMio43(a: AnimContext): void {
	const ctx = a.ctx;
	const numEl = a.numEl;
	let y = getTime(a);
	y = y % 1;

	ctx.save();

	for (let i = numEl + 1; i > 0; i--) {
		const aVal = getMyInter2(y, i, numEl + 1);
		const radO = RAD3 * 2;
		const angle = (i / numEl) * (PI / 2);

		ctx.save();
		ctx.translate(radO * (1 - Math.cos(angle)) * 7, 0);
		ctx.rotate(angle);
		ctx.rotate(Math.sin(aVal * PI) * PI);

		const fillGrad = getFillGrad(aVal, PI);
		ctx.fillStyle = hsbToRgb(0, 0, 255, fillGrad);
		rect(ctx, 0, 0, LENGTH, 1);
		ctx.restore();
	}

	ctx.restore();
}

// ── Mio44 ──────────────────────────────────────────────────────────────────────
export function drawMio44(a: AnimContext): void {
	const ctx = a.ctx;
	const numEl = a.numEl;
	let y = getTime(a);
	y = y % 1;

	ctx.save();

	for (let i = 0; i < numEl; i++) {
		const aVal = y - (i / numEl) * (PI / 4);

		ctx.save();

		let positionX = getPosition(i, numEl);
		positionX = map(positionX, -SIZE_GRID / 2, SIZE_GRID / 2, -SIZE_GRID / 2, SIZE_GRID * 3);

		ctx.translate(positionX, 0);
		ctx.rotate(aVal * TWO_PI);

		const fillGrad = getFillGrad(aVal, TWO_PI);
		ctx.fillStyle = hsbToRgb(0, 0, 255, fillGrad);
		rect(ctx, 0, 0, LENGTH * (i / numEl), 0.5);
		ctx.restore();
	}

	ctx.restore();
}

// ── Mio45 ──────────────────────────────────────────────────────────────────────
export function drawMio45(a: AnimContext): void {
	const ctx = a.ctx;
	const numEl = a.numEl;
	let y = getTime(a);
	y = y % 1;

	ctx.save();

	for (let i = 0; i < numEl; i++) {
		const aVal = y - (i / numEl) * (PI / 4);
		const radO = RAD3 * 2;
		const angle = (i / numEl) * (PI / 2);

		ctx.save();

		ctx.translate(radO * Math.sin(angle) * 7, 0);
		ctx.rotate(aVal * TWO_PI);

		const fillGrad = getFillGrad(aVal, TWO_PI);
		ctx.fillStyle = hsbToRgb(0, 0, 255, fillGrad);
		rect(ctx, 0, 0, LENGTH * 0.7, 1);
		ctx.restore();
	}

	ctx.restore();
}

// ── Mio46 ──────────────────────────────────────────────────────────────────────
export function drawMio46(a: AnimContext): void {
	const ctx = a.ctx;
	const numEl = a.numEl;
	const y = getTime(a);

	ctx.save();
	ctx.fillStyle = FILL_COLOR;

	for (let i = 0; i < numEl; i++) {
		const marginL = ((TWO_PI * RAD2) / numEl) * 0.2;
		const rad3L = (TWO_PI * RAD2) / (numEl + marginL);
		const aVal = getMyInter(y, i, numEl);
		let sizeL = rad3L * 0.7;
		let grow = Math.sin(aVal * PI);
		grow = map(grow, 0, 1, 0, sizeL * 0.5);
		sizeL += grow;
		sizeL = Math.max(0.5, Math.min(sizeL, rad3L));

		ctx.save();
		ctx.rotate((i / numEl) * TWO_PI);
		ellipse(ctx, RAD2, 0, sizeL, sizeL);
		ctx.restore();
	}

	ctx.restore();
}

// ── Mio47 ──────────────────────────────────────────────────────────────────────
export function drawMio47(a: AnimContext): void {
	const ctx = a.ctx;
	const numEl = a.numEl;
	const y = getTime(a);

	ctx.save();

	for (let i = 0; i < numEl; i++) {
		const val = 1 - i / numEl;
		const colorVar = val * 255;

		ctx.fillStyle = hsbToRgb(0, 0, 255, colorVar);
		const positionX = getPosition(i, numEl);
		let positionY = Math.sin(y * TWO_PI);
		// rectMode(CORNER)
		positionY *= Math.sin((i / numEl) * TWO_PI) * JUMP * 0.8;
		ctx.fillRect(positionX, 0, 1, (RAD3 / 5) * positionY);
	}

	ctx.restore();
}

// ── Mio48 ──────────────────────────────────────────────────────────────────────
export function drawMio48(a: AnimContext): void {
	const ctx = a.ctx;
	const numEl = a.numEl;
	const y = getTime(a);

	ctx.save();

	for (let i = 0; i < numEl + 1; i++) {
		const marginL = ((TWO_PI * RAD2) / numEl) * 0.2;
		const rad3L = (TWO_PI * RAD2) / (numEl + marginL);
		const aVal = getMyInter(y, i, numEl);
		const sizeL = rad3L * 0.7;

		ctx.save();
		ctx.translate(getPosition(i, numEl), 0);
		ctx.rotate(y * PI * 2 + (i / numEl) * PI * 2);

		const hue = Math.sin(((i / numEl) - y) * TWO_PI);
		const hueMapped = map(hue, -1, 1, 100, 255);
		const colorVar = getFillGrad(aVal, TWO_PI);

		ctx.fillStyle = hsbToRgb(0, 0, 255, (colorVar * hueMapped) / 255);
		rect(ctx, rad3L, rad3L, rad3L / 5, sizeL * 4);
		ctx.restore();
	}

	ctx.restore();
}

// ── Mio49 ──────────────────────────────────────────────────────────────────────
export function drawMio49(a: AnimContext): void {
	const ctx = a.ctx;
	const y = getTime(a);
	const colorVar = getColorVar(y, PI / 2);

	ctx.save();

	// First arc: fill-colored stroke
	ctx.save();
	ctx.strokeStyle = hsbToRgb(0, 0, 255, colorVar);
	ctx.rotate(y * TWO_PI);
	ctx.lineWidth = 2;
	ctx.beginPath();
	ctx.ellipse(0, 0, RAD1 / 2, RAD1 / 2, 0, 0, 2 * HALF_PI);
	ctx.stroke();
	ctx.restore();

	ctx.save();

	// Second arc: background-colored stroke
	ctx.save();
	ctx.strokeStyle = hsbToRgb(0, 0, 30, colorVar);
	ctx.lineWidth = 2;
	ctx.rotate(y * TWO_PI - PI / 3);
	ctx.beginPath();
	ctx.ellipse(0, 0, RAD1 / 2, RAD1 / 2, 0, 0, 3 * HALF_PI);
	ctx.stroke();
	ctx.restore();

	// Third arc: mid-gray stroke
	ctx.save();
	ctx.strokeStyle = hsbToRgb(0, 0, 150, colorVar);
	ctx.lineWidth = 2;
	ctx.rotate(y * TWO_PI - PI / 6);
	ctx.beginPath();
	ctx.ellipse(0, 0, RAD1 / 2, RAD1 / 2, 0, 0, HALF_PI);
	ctx.stroke();
	ctx.restore();

	ctx.restore();
	ctx.restore();
}

// ── Mio50 ──────────────────────────────────────────────────────────────────────
export function drawMio50(a: AnimContext): void {
	const ctx = a.ctx;
	const numEl = a.numEl;
	const y = getTime(a);

	ctx.save();

	const aVal = getMyInter(y, 0, 3);
	const c = getMyInter(y, 2, 3);

	let sizeL = aVal * RAD3;
	const angle = TWO_PI / numEl;
	const angle2 = y * TWO_PI;
	const colorVar = (1 - c) * 255;

	if (aVal === 0) sizeL = RAD3;

	ctx.fillStyle = hsbToRgb(0, 0, 255, colorVar);
	ellipse(ctx, 0, 0, sizeL, sizeL);

	for (let i = 0; i < numEl; i++) {
		ctx.save();
		ctx.fillStyle = hsbToRgb(0, 0, 255, colorVar);
		ctx.rotate(angle * i);
		ctx.rotate(angle2);
		ellipse(ctx, 0, sizeL * 2, RAD3 / 5, RAD3 / 5);
		ctx.restore();
	}

	ctx.restore();
}

// ── Mio51 ──────────────────────────────────────────────────────────────────────
export function drawMio51(a: AnimContext): void {
	const ctx = a.ctx;
	const numEl = a.numEl;
	const y = getTime(a);

	ctx.save();

	for (let i = 0; i < numEl + 1; i++) {
		const aVal = getMyInter2(y, i, numEl);
		const radO = RAD2 * 0.5;
		const angle = (i / numEl) * TWO_PI;

		ctx.save();
		// rectMode(CORNER)
		ctx.translate(radO * Math.cos(angle), radO * Math.sin(angle));
		ctx.rotate(angle);
		ctx.rotate((1 - Math.sin(aVal * PI)) * (PI / 2));

		let colorVar = 1;
		const grow = Math.sin(aVal * PI);
		colorVar -= Math.pow(grow, 2);
		colorVar = map(colorVar, 0, 1, BG_COLOR + 30, 255);

		ctx.fillStyle = hsbToRgb(0, 0, 255, colorVar);
		// rectMode CORNER: draw from (0,0) not centered
		ctx.fillRect(0, 0, LENGTH * 0.5, 1);
		ctx.restore();
	}

	ctx.restore();
}

// ── Mio52 ──────────────────────────────────────────────────────────────────────
export function drawMio52(a: AnimContext): void {
	const ctx = a.ctx;
	const numEl = a.numEl;
	const y = getTime(a);

	ctx.save();

	for (let i = 0; i < numEl + 1; i++) {
		let angle = Math.sin(y * PI / 2) * PI;
		ctx.save();
		angle = (i / numEl) * PI * Math.sin(y * PI);
		ctx.rotate(angle);

		const colorVar = Math.sin(y * PI) * 255;
		ctx.fillStyle = hsbToRgb(0, 0, 255, colorVar);
		rect(ctx, 0, 0, 1, LENGTH);
		ctx.restore();
	}

	ctx.restore();
}

// ── Mio53 ──────────────────────────────────────────────────────────────────────
export function drawMio53(a: AnimContext): void {
	const ctx = a.ctx;
	const numEl = a.numEl;
	const y = getTime(a);

	ctx.save();

	const aVal = getMyInter(y, 0, 2);
	const b = getMyInter(y, 1, 2);

	for (let i = 0; i < numEl + 1; i++) {
		let angle = Math.sin(y * PI / 2) * PI;
		ctx.save();
		if (aVal > 0) angle = (i / numEl) * PI * Math.sin(aVal * PI / 2);
		if (b > 0) angle = (i / numEl) * PI;

		ctx.rotate(angle);
		if (b > 0) ctx.rotate(PI * b);

		const colorVar = (1 - Math.sin(b * PI / 2)) * 255;
		ctx.fillStyle = hsbToRgb(0, 0, 255, colorVar);
		rect(ctx, 0, 0, 1, LENGTH);
		ctx.restore();
	}

	ctx.restore();
}

// ── Mio54 ──────────────────────────────────────────────────────────────────────
export function drawMio54(a: AnimContext): void {
	const ctx = a.ctx;
	const numEl = a.numEl;
	const y = getTime(a);

	const dist = Math.sin((PI / 2) * y);
	const aVal = getMyInter(y, 0, 3);
	const b = getMyInter(y, 1, 3);
	const c = getMyInter(y, 2, 3);

	ctx.save();

	const size1 = dist * RAD2 * aVal;
	const size2 = dist * RAD2 * b;

	let colorVar2 = 0;
	if (aVal > 0) colorVar2 = Math.sin(aVal * PI / 2) * 255;

	ctx.fillStyle = hsbToRgb(0, 0, 255, colorVar2);
	ellipse(ctx, 0, 0, size1, size1);
	ctx.fillStyle = hsbToRgb(0, 0, 30);
	ellipse(ctx, 0, 0, size2, size2);

	const sizeL = RAD2 / 2 + (RAD1 / 2) * Math.sin((PI / 2) * c);
	const angle = TWO_PI / numEl;

	for (let i = 0; i < numEl; i++) {
		ctx.save();
		let colorVar = (1 - Math.sin(c * PI / 2)) * 255;
		if (c === 0) colorVar = 0;
		ctx.fillStyle = hsbToRgb(0, 0, 255, colorVar);
		ctx.rotate(angle * i);
		ellipse(ctx, 0, sizeL, 1, 1);
		ctx.restore();
	}

	ctx.restore();
}

// ── Mio55 ──────────────────────────────────────────────────────────────────────
export function drawMio55(a: AnimContext): void {
	const ctx = a.ctx;
	const numEl = a.numEl;
	const y = getTime(a);

	ctx.save();

	const aVal = getMyInter(y, 0, 2);
	const b = getMyInter(y, 1, 2);

	for (let i = 0; i < numEl + 1; i++) {
		let angle = Math.sin(y * PI / 2) * PI;
		ctx.save();
		if (aVal > 0) angle = (i / numEl) * TWO_PI * Math.sin(aVal * PI / 2);
		if (b > 0) angle = (i / numEl) * TWO_PI;

		ctx.rotate(angle);
		if (b > 0) ctx.rotate(PI * b);

		const colorVar = (1 - Math.sin(b * PI / 2)) * 255;
		ctx.fillStyle = hsbToRgb(0, 0, 255, colorVar);
		ellipse(ctx, 0, RAD2, 2, 2);
		ctx.restore();
	}

	ctx.restore();
}

// ── Mio56 ──────────────────────────────────────────────────────────────────────
export function drawMio56(a: AnimContext): void {
	const ctx = a.ctx;
	const numEl = a.numEl;
	const y = getTime(a);

	ctx.save();

	const aVal = getMyInter(y, 0, 2);
	const b = getMyInter(y, 1, 2);

	for (let i = 0; i < numEl + 1; i++) {
		let angle = Math.sin(y * PI / 2) * PI;
		ctx.save();
		if (aVal > 0) angle = (i / numEl) * PI * Math.sin(aVal * PI / 2);
		if (b > 0) angle = (i / numEl) * PI;

		ctx.rotate(angle);
		if (b > 0) ctx.rotate(PI * b);

		const colorVar = (1 - Math.sin(b * PI / 2)) * 255;
		ctx.fillStyle = hsbToRgb(0, 0, 255, colorVar);
		rect(ctx, 0, RAD2, RAD3 / 5, RAD3 / 5);
		ctx.restore();
	}

	ctx.restore();
}

// ── Mio57 ──────────────────────────────────────────────────────────────────────
export function drawMio57(a: AnimContext): void {
	const ctx = a.ctx;
	const numEl = a.numEl;
	const y = getTime(a);

	ctx.save();

	const aVal = getMyInter(y, 0, 2);
	const b = getMyInter(y, 1, 2);

	const sizeL = aVal * RAD2;
	const colorVar = Math.sin(aVal * PI) * 255;
	let colorVar2 = (1 - Math.sin(b * PI / 2)) * 255;
	if (b === 0) colorVar2 = 0;

	const radL = RAD2 / 2 + b * RAD2;

	for (let i = 0; i < numEl + 1; i++) {
		ctx.save();

		// Stroked ellipse (no fill)
		ctx.strokeStyle = hsbToRgb(0, 0, 255, colorVar);
		ellipseStroke(ctx, 0, 0, sizeL, sizeL);

		// Filled dot on orbit
		ctx.save();
		ctx.rotate((i / numEl) * TWO_PI);
		ctx.fillStyle = hsbToRgb(0, 0, 255, colorVar2);
		ellipse(ctx, 0, radL, 1, 1);
		ctx.restore();

		ctx.restore();
	}

	ctx.restore();
}

// ── Mio58 ──────────────────────────────────────────────────────────────────────
export function drawMio58(a: AnimContext): void {
	const ctx = a.ctx;
	const numEl = a.numEl;
	const y = getTime(a);

	ctx.save();

	const sizeL = RAD3;

	for (let i = 0; i < numEl; i++) {
		const val = Math.sin(getMyInter2(y, i, numEl) * PI) * 255;
		const positionX = getPosition(i, numEl);

		ctx.fillStyle = hsbToRgb(0, 0, 255, val);
		rect(ctx, positionX, 0, sizeL, LENGTH * 0.6);
	}

	ctx.restore();
}

// ── Mio59 ──────────────────────────────────────────────────────────────────────
export function drawMio59(a: AnimContext): void {
	const ctx = a.ctx;
	const numEl = a.numEl;
	const y = getTime(a);

	ctx.save();

	const aVal = getMyInter(y, 0, 2);
	const b = getMyInter(y, 1, 2);

	for (let i = 0; i < numEl + 1; i++) {
		const radL = 3 + ((i / numEl) - y) * (PI / 2) * 2;

		let angle = Math.sin(y * PI / 2) * PI;
		ctx.save();
		if (aVal > 0) angle = (i / numEl) * PI * Math.sin(aVal * PI / 2);
		if (b > 0) angle = (i / numEl) * PI;

		ctx.rotate(angle);
		if (b > 0) ctx.rotate(PI * b);

		const colorVar = (1 - Math.sin(b * PI / 2)) * 255;
		ctx.fillStyle = hsbToRgb(0, 0, 255, colorVar);
		ellipse(ctx, 0, RAD2, radL, radL);
		ctx.restore();
	}

	ctx.restore();
}
