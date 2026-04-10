import type { AnimContext } from '$lib/core/types';
import {
	getTime,
	getMyInter,
	getMyInter2,
	getPosition,
	getColorVar,
	getSizeCircular,
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

// ── Mio12 ──────────────────────────────────────────────────────────────────────
export function drawMio12(a: AnimContext): void {
	const { ctx, position, numEl } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);

	const sizeL = Math.sin(y * PI) * RAD3;
	const angle = TWO_PI / numEl;
	const angle2 = y * TWO_PI;
	const val = getColorVar(y, PI / 2);

	ctx.fillStyle = hsbToRgb(0, 0, 255, val);
	ellipse(ctx, 0, 0, sizeL, sizeL);

	for (let i = 0; i < numEl; i++) {
		ctx.save();
		ctx.fillStyle = hsbToRgb(0, 0, 255, val);
		ctx.rotate(angle * i);
		ctx.rotate(angle2);
		ellipse(ctx, 0, sizeL * 2, 2, 2);
		ctx.restore();
	}

	ctx.restore();
}

// ── Mio13 ──────────────────────────────────────────────────────────────────────
export function drawMio13(a: AnimContext): void {
	const { ctx, position, numEl } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);

	const sizeL = y * RAD3;
	const angle = TWO_PI / numEl;
	const angle2 = y * TWO_PI;
	const colorVar = Math.sin(y * PI) * 255;

	for (let i = 0; i < numEl; i++) {
		ctx.save();
		ctx.fillStyle = hsbToRgb(0, 0, 255, colorVar);
		ctx.rotate(angle * i);
		ctx.rotate(angle2);
		ellipse(ctx, 0, sizeL * 2, 2, 2);
		ctx.restore();
	}

	ctx.restore();
}

// ── Mio14 ──────────────────────────────────────────────────────────────────────
export function drawMio14(a: AnimContext): void {
	const { ctx, position, numEl } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);

	const c = getMyInter(y, 2, 3);
	const colorVar = getColorVar(c, PI / 2);

	for (let i = 0; i < numEl; i++) {
		ctx.save();
		ctx.strokeStyle = FILL_COLOR;
		ctx.lineWidth = 1;

		const add = Math.sin(y * PI / 2);
		ctx.rotate(add * PI);
		rectStroke(ctx, 0, 0, RAD1, RAD1);
		ctx.restore();
	}

	ctx.restore();
}

// ── Mio15 ──────────────────────────────────────────────────────────────────────
export function drawMio15(a: AnimContext): void {
	const { ctx, position, numEl } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);

	const c = getMyInter(y, 2, 3);
	const colorVar = getColorVar(c, PI / 2);

	for (let i = 1; i <= numEl; i++) {
		ctx.save();
		ctx.strokeStyle = FILL_COLOR;
		ctx.lineWidth = 1;

		const add = i * Math.sin(y * PI / 2);
		ctx.rotate(add * PI / 2);
		rectStroke(ctx, 0, 0, RAD1, RAD1);
		ctx.restore();
	}

	ctx.restore();
}

// ── Mio16 ──────────────────────────────────────────────────────────────────────
export function drawMio16(a: AnimContext): void {
	const { ctx, position } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);

	const val = Math.sin(y * PI / 2);
	const sizeL = RAD1;

	ctx.fillStyle = FILL_COLOR;
	ellipse(ctx, 0, 0, sizeL, sizeL);

	ctx.fillStyle = hsbToRgb(0, 0, 30);
	ellipse(ctx, 0, 0, sizeL * Math.sin(val * PI), sizeL * Math.sin(val * PI));

	ctx.restore();
}

// ── Mio17 ──────────────────────────────────────────────────────────────────────
export function drawMio17(a: AnimContext): void {
	const { ctx, position, numEl } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);

	for (let i = 0; i < numEl; i++) {
		let val = getMyInter2(y, i, numEl);
		val = Math.sin(PI * val);
		val = map(val, 0, 1, BG_COLOR, 255);

		const positionX = getPosition(i, numEl);
		const positionY = 0;

		ctx.fillStyle = hsbToRgb(0, 0, 255, val);
		ellipse(ctx, positionX, positionY, RAD3 * val / 255, RAD3 * val / 255);
	}

	ctx.restore();
}

// ── Mio18 ──────────────────────────────────────────────────────────────────────
export function drawMio18(a: AnimContext): void {
	const { ctx, position, numEl } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);

	const dist = Math.sin(TWO_PI * y);
	ctx.fillStyle = FILL_COLOR;

	for (let i = 0; i < numEl; i++) {
		let mult = 1;
		if (i % 2 === 1) mult *= -1;
		const positionX = getPosition(i, numEl);
		const positionY = 0;
		let sizeL = RAD3;
		sizeL -= JUMP3 * dist * mult;
		rect(ctx, positionX, positionY, sizeL, sizeL);
	}

	ctx.restore();
}

// ── Mio19 ──────────────────────────────────────────────────────────────────────
export function drawMio19(a: AnimContext): void {
	const { ctx, position, numEl } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);

	ctx.fillStyle = FILL_COLOR;
	const dist = Math.sin(TWO_PI * y);

	for (let i = 0; i < numEl; i++) {
		for (let j = 0; j < numEl; j++) {
			let mult = 1;
			if (i % 2 === 1) mult *= -1;

			const positionX = getPosition(i, numEl);
			const positionY = getPosition(j, numEl);
			let sizeL = RAD3 * 0.5;
			sizeL -= JUMP3 * dist * mult;
			rect(ctx, positionX, positionY, sizeL, sizeL);
		}
	}

	ctx.restore();
}

// ── Mio20 ──────────────────────────────────────────────────────────────────────
export function drawMio20(a: AnimContext): void {
	const { ctx, position, numEl } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);

	ctx.fillStyle = FILL_COLOR;
	const dist = Math.sin(TWO_PI * y);

	for (let i = 0; i < numEl; i++) {
		let mult = 1;
		if (i % 2 === 1) mult *= -1;

		const positionX = getPosition(i, numEl);
		let sizeL = LENGTH;
		sizeL -= JUMP3 * dist * mult;
		rect(ctx, positionX, 0, THICK2, sizeL);
	}

	ctx.restore();
}

// ── Mio21 ──────────────────────────────────────────────────────────────────────
export function drawMio21(a: AnimContext): void {
	const { ctx, position, numEl } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);

	ctx.fillStyle = FILL_COLOR;

	for (let i = 0; i < numEl; i++) {
		let val = getMyInter2(y, i, numEl);
		const sizeL = LENGTH;
		val = Math.sin(PI * val);
		val = map(val, 0, 1, 0.7, 1.2);

		const positionX = getPosition(i, numEl);
		rect(ctx, positionX, 0, THICK2, sizeL * val);
	}

	ctx.restore();
}

// ── Mio22 ──────────────────────────────────────────────────────────────────────
export function drawMio22(a: AnimContext): void {
	const { ctx, position, numEl } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);

	const dist = Math.sin(PI / 2 * y);

	for (let i = 0; i < numEl; i++) {
		let move = i / numEl;
		move += dist;
		move = move % 1;
		const sizeL = RAD3;
		const positionX = SIZE_GRID / 4 + getPosition(i, numEl);
		const rise = Math.abs(map(move, 0, 1, -1, 1));

		ctx.fillStyle = hsbToRgb(0, 0, 255, (1 - rise) * 255);
		rect(ctx, positionX, 0, sizeL, sizeL);
	}

	ctx.restore();
}

// ── Mio23 ──────────────────────────────────────────────────────────────────────
export function drawMio23(a: AnimContext): void {
	const { ctx, position, numEl } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);

	const dist = Math.sin(PI / 2 * y);

	for (let i = 0; i < numEl; i++) {
		const sizeL = RAD3;
		let move = i / numEl;
		move += dist;
		move = move % 1;

		const positionX = getPosition(i, numEl);
		const rise = Math.abs(map(move, 0, 1, -1, 1));

		ctx.fillStyle = hsbToRgb(0, 0, 255, (1 - rise) * 255);
		ellipse(ctx, positionX, 0, sizeL, sizeL);
	}

	ctx.restore();
}

// ── Mio24 ──────────────────────────────────────────────────────────────────────
export function drawMio24(a: AnimContext): void {
	const { ctx, position, numEl } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);

	const dist = Math.sin(PI / 2 * y);

	for (let i = 0; i < numEl; i++) {
		for (let j = 0; j < numEl; j++) {
			const sizeL = RAD3;
			let move = i / numEl;
			move += dist;
			move = move % 1;

			const positionX = getPosition(i, numEl);
			const positionY = getPosition(j, numEl);
			const rise = Math.abs(map(move, 0, 1, -1, 1));

			ctx.fillStyle = hsbToRgb(0, 0, 255, (1 - rise) * 255);
			ellipse(ctx, positionX, positionY, sizeL, sizeL);
		}
	}

	ctx.restore();
}

// ── Mio25 ──────────────────────────────────────────────────────────────────────
export function drawMio25(a: AnimContext): void {
	const { ctx, position } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);

	const b = getMyInter(y, 1, 2);
	const add = Math.sin(y * PI) * SIZE_GRID;
	const colorVar = 255 - getColorVar(b, PI / 2);

	ctx.fillStyle = hsbToRgb(0, 0, 255, colorVar);
	ctx.rotate(b * TWO_PI);
	rect(ctx, 0, 0, RAD3 + add, 2);

	ctx.restore();
}

// ── Mio26 ──────────────────────────────────────────────────────────────────────
export function drawMio26(a: AnimContext): void {
	const { ctx, position, numEl } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);

	const dist = Math.sin(PI / 2 * y);

	for (let i = 0; i < numEl; i++) {
		let move = i / numEl;
		move += dist;
		move = move % 1;

		const positionX = getPosition(i, numEl);
		const rise = 1 - Math.abs(map(move, 0, 1, -1, 1));

		ctx.fillStyle = hsbToRgb(0, 0, 255, rise * 255);
		rect(ctx, positionX, 0, 2, LENGTH);
	}

	ctx.restore();
}

// ── Mio27 ──────────────────────────────────────────────────────────────────────
export function drawMio27(a: AnimContext): void {
	const { ctx, position } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);

	const colorVar = getColorVar(y, PI / 2);

	// First arc
	ctx.save();
	ctx.strokeStyle = hsbToRgb(0, 0, 255, colorVar);
	ctx.lineWidth = 2;
	ctx.rotate(y * TWO_PI);
	arcStroke(ctx, 0, 0, RAD1, RAD1, 0, 2 * HALF_PI);
	ctx.restore();

	// Second arc
	ctx.save();
	ctx.strokeStyle = hsbToRgb(0, 0, 30);
	ctx.lineWidth = 2;
	ctx.rotate(y * TWO_PI);
	arcStroke(ctx, 0, 0, RAD1, RAD1, 0, 3 * HALF_PI);
	ctx.restore();

	ctx.restore();
}

// ── Mio28 ──────────────────────────────────────────────────────────────────────
export function drawMio28(a: AnimContext): void {
	const { ctx, position, numEl } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);

	for (let i = 0; i < numEl; i++) {
		const val = 1 - i / numEl;
		let displace = getMyInter2(y, i, numEl);
		displace = Math.sin(PI * displace);
		displace = map(displace, 0, 1, 0, 15);
		const colorVar = val * 255;

		ctx.fillStyle = hsbToRgb(0, 0, 255, colorVar);
		const positionX = getPosition(i, numEl);
		const positionY = JUMP * 0.5 - displace;
		const sizeL = RAD4;

		rect(ctx, positionX, positionY, sizeL, sizeL);
	}

	ctx.restore();
}

// ── Mio29 ──────────────────────────────────────────────────────────────────────
export function drawMio29(a: AnimContext): void {
	const { ctx, position, numEl } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);
	ctx.rotate(y * TWO_PI);

	for (let i = 0; i < numEl; i++) {
		ctx.save();
		const val = i / numEl;
		const positionX = Math.sin(val * y * PI / 4) * SIZE_GRID;
		let colorVar = val * Math.sin(y * PI);
		colorVar = map(colorVar, 0, 1, 30, 255);

		ctx.fillStyle = hsbToRgb(0, 0, 255, colorVar);
		ctx.rotate(y * PI / 4);
		ellipse(ctx, positionX, 0, RAD4, RAD4);
		ctx.restore();
	}

	ctx.restore();
}

// ── Mio30 ──────────────────────────────────────────────────────────────────────
export function drawMio30(a: AnimContext): void {
	const { ctx, position, numEl } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);

	const sizeL = y * RAD3;
	const angle = TWO_PI / numEl;
	let colorVar = Math.sin(y * PI);
	colorVar = Math.pow(colorVar, 4);
	colorVar = map(1 - colorVar, 0, 1, 255, BG_COLOR);

	for (let i = 0; i < numEl; i++) {
		ctx.save();
		ctx.fillStyle = hsbToRgb(0, 0, 255, colorVar);
		ctx.rotate(angle * i);
		ellipse(ctx, 0, sizeL * 2, RAD3 / 2, RAD3 / 2);
		ctx.restore();
	}

	ctx.restore();
}

// ── Mio31 ──────────────────────────────────────────────────────────────────────
export function drawMio31(a: AnimContext): void {
	const { ctx, position, numEl } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);

	const aVal = getMyInter(y, 0, 3);
	const b = getMyInter(y, 1, 3);

	const sizeL = aVal * RAD3;
	const angle = TWO_PI / numEl;

	for (let i = 0; i < numEl; i++) {
		ctx.save();
		ctx.fillStyle = hsbToRgb(0, 0, 255, 255 * (1 - b));
		ctx.rotate(angle * i);
		ellipse(ctx, 0, sizeL * 2, 2, 2);
		ctx.restore();
	}

	ctx.restore();
}

// ── Mio32 ──────────────────────────────────────────────────────────────────────
export function drawMio32(a: AnimContext): void {
	const { ctx, position, numEl } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);
	ctx.rotate(PI);

	for (let i = numEl + 1; i > 0; i--) {
		const aVal = getMyInter2(y, i, numEl);
		const radO = RAD3;
		const angle = (i / numEl) * -PI;

		ctx.save();
		ctx.translate(radO * Math.sin(angle) * 2, 0);
		ctx.rotate(angle);
		ctx.rotate((1 - Math.sin(aVal * PI)) * (PI / 2));

		const fillGrad = getFillGrad(aVal, PI);
		ctx.fillStyle = hsbToRgb(0, 0, 255, fillGrad);
		rect(ctx, 0, 0, LENGTH, 1);
		ctx.restore();
	}

	ctx.restore();
}

// ── Mio33 ──────────────────────────────────────────────────────────────────────
export function drawMio33(a: AnimContext): void {
	const { ctx, position, numEl } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);

	const aVal = getMyInter(y, 0, 3);
	const b = getMyInter(y, 1, 3);

	const colorVar = b * 255;
	ctx.fillStyle = hsbToRgb(0, 0, 255, 255 - colorVar);

	for (let i = 0; i < numEl; i++) {
		let sizeL = RAD3 * aVal;
		if (aVal === 0) sizeL = RAD3;

		ctx.save();
		ctx.rotate(b * PI);
		if (aVal > 0) sizeL = Math.sin(aVal * PI / 4) * RAD3;
		if (b > 0) sizeL = (1 - b) * RAD3;
		ellipse(ctx, RAD2, 0, sizeL, sizeL);
		ctx.restore();

		ctx.save();
		ctx.rotate(b * PI);
		ellipse(ctx, -RAD2, 0, sizeL, sizeL);
		ctx.restore();
	}

	ctx.restore();
}

// ── Mio34 ──────────────────────────────────────────────────────────────────────
export function drawMio34(a: AnimContext): void {
	const { ctx, position, numEl } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);

	const aVal = getMyInter(y, 0, 2);
	const b = getMyInter(y, 1, 2);

	ctx.fillStyle = FILL_COLOR;

	for (let i = 0; i < numEl; i++) {
		let sizeL = RAD3 * aVal;
		if (aVal === 0) sizeL = RAD3;
		if (aVal > 0) sizeL = Math.sin(aVal * PI / 4) * RAD3;
		if (b > 0) sizeL = (1 - b) * RAD3;

		ctx.save();
		ctx.rotate((i / numEl) * TWO_PI);
		ctx.rotate(b * PI);
		ellipse(ctx, RAD2, 0, sizeL, sizeL);
		ctx.restore();
	}

	ctx.restore();
}

// ── Mio35 ──────────────────────────────────────────────────────────────────────
export function drawMio35(a: AnimContext): void {
	const { ctx, position, numEl } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);

	ctx.fillStyle = FILL_COLOR;

	for (let i = 0; i < numEl; i++) {
		const marginL = (TWO_PI * RAD2 / numEl) * 0.2;
		const rad3L = (TWO_PI * RAD2) / (numEl + marginL);
		const aVal = getMyInter2(y, i, numEl);
		let sizeL = rad3L * 0.5;
		let grow = Math.sin(aVal * PI);
		grow = map(grow, 0, 1, 0, sizeL * 0.6);
		sizeL += grow;
		sizeL = Math.max(0.5, Math.min(sizeL, sizeL));

		ctx.save();
		ctx.rotate((i / numEl) * TWO_PI);
		ellipse(ctx, RAD2, 0, sizeL, sizeL);
		ctx.restore();
	}

	ctx.restore();
}

// ── Mio36 ──────────────────────────────────────────────────────────────────────
export function drawMio36(a: AnimContext): void {
	const { ctx, position, numEl } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);

	for (let i = 0; i < numEl; i++) {
		const aVal = getMyInter2(y, i, numEl);
		let colorVar = 1;
		const grow = Math.sin(aVal * PI);
		colorVar -= grow;
		colorVar *= 255;

		ctx.save();
		ctx.fillStyle = hsbToRgb(0, 0, 255, colorVar);
		ctx.rotate((i / numEl) * TWO_PI);
		ellipse(ctx, RAD2, 0, RAD3, RAD3);
		ctx.restore();
	}

	ctx.restore();
}

// ── Mio37 ──────────────────────────────────────────────────────────────────────
export function drawMio37(a: AnimContext): void {
	const { ctx, position, numEl } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);

	for (let i = 0; i < numEl; i++) {
		const marginL = (TWO_PI * RAD2 / numEl) * 0.6;
		const rad3L = (TWO_PI * RAD2) / (numEl + marginL);
		const aVal = getMyInter2(y, i, numEl);
		let colorVar = 1;
		const grow = Math.sin(aVal * PI);
		colorVar -= grow;
		colorVar *= 255;

		ctx.save();
		ctx.fillStyle = hsbToRgb(0, 0, 255, colorVar);
		ctx.rotate((i / numEl) * TWO_PI);
		rect(ctx, RAD2, 0, RAD4, RAD4);
		ctx.restore();
	}

	ctx.restore();
}

// ── Mio38 ──────────────────────────────────────────────────────────────────────
export function drawMio38(a: AnimContext): void {
	const { ctx, position, numEl } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);
	ctx.rotate(PI);

	for (let i = 0; i < numEl; i++) {
		const marginL = (TWO_PI * RAD2 / numEl) * 0.6;
		const rad3L = (TWO_PI * RAD2) / (numEl + marginL);
		const aVal = getMyInter2(y, i, numEl);
		let colorVar = 1;
		const grow = Math.sin(aVal * PI);
		colorVar -= grow;
		colorVar *= 255;

		ctx.save();
		ctx.fillStyle = hsbToRgb(0, 0, 255, colorVar);
		ctx.rotate((i / numEl) * PI * 2);
		rect(ctx, RAD2, 0, LENGTH * 0.3, 3);
		ctx.restore();
	}

	ctx.restore();
}

// ── Mio39 ──────────────────────────────────────────────────────────────────────
export function drawMio39(a: AnimContext): void {
	const { ctx, position, numEl } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);

	const b = getMyInter(y, 1, 2);
	const colorVar = 255 - getColorVar(b, PI / 2);

	ctx.rotate(y * TWO_PI);

	for (let i = 0; i < numEl + 1; i++) {
		ctx.save();
		ctx.rotate((i / numEl) * TWO_PI * Math.sin(y * PI));
		ctx.fillStyle = FILL_COLOR;
		ellipse(ctx, 0, RAD2, 1, 1);
		ctx.restore();
	}

	ctx.restore();
}

// ── Mio40 ──────────────────────────────────────────────────────────────────────
export function drawMio40(a: AnimContext): void {
	const { ctx, position, numEl } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);

	ctx.fillStyle = FILL_COLOR;

	for (let i = 1; i < numEl + 1; i++) {
		const aVal = getMyInter(y, i, numEl + 1);
		let radL = RAD3;
		const positionX = getPosition(i, numEl);

		ctx.save();

		if (i === 1) {
			ctx.translate(positionX, 0);
			radL = radL + Math.sin(aVal * PI) * 3;
			rect(ctx, 0, 0, radL, radL);
		}
		if (i % 2 === 0) {
			ctx.translate(positionX, 0);
			ctx.rotate(Math.sin(aVal * PI) * (PI / 2));
			rect(ctx, 0, 0, radL, radL);
		}
		if (i % 3 === 0) {
			ctx.save();
			ctx.translate(positionX, 0);
			rect(ctx, 0, 0 - Math.sin(aVal * PI) * 15, radL, radL);
			ctx.restore();
		}

		ctx.restore();
	}

	ctx.restore();
}

// ── Mio41 ──────────────────────────────────────────────────────────────────────
export function drawMio41(a: AnimContext): void {
	const { ctx, position, numEl } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);

	ctx.fillStyle = FILL_COLOR;

	for (let i = 0; i < numEl + 1; i++) {
		const aVal = getMyInter2(y, i, numEl);
		const radO = RAD2 * 0.5;
		const angle = (i / numEl) * TWO_PI;

		ctx.save();
		ctx.translate(radO * Math.cos(angle), radO * Math.sin(angle));
		ctx.rotate(angle);
		ctx.rotate((1 - Math.sin(aVal * PI)) * (PI / 2));

		ctx.fillStyle = FILL_COLOR;
		// rectMode CORNER: draw from (x,y) not centered
		ctx.fillRect(0, 0, LENGTH * 0.5, 1);
		ctx.restore();
	}

	ctx.restore();
}
