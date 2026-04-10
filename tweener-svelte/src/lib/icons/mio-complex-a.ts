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
const LENGHT = SIZE_GRID - 10; // 20 — matches Processing's misspelled `lenght`
const RAD_CORNER = SIZE_GRID / 20; // 1.5

function getFillGrad(a: number, angle: number): number {
	const grow = Math.sin(a * angle);
	let fg = 1 - grow;
	fg = 30 + fg * (255 - 30);
	return fg;
}

function map(val: number, inMin: number, inMax: number, outMin: number, outMax: number): number {
	return outMin + ((val - inMin) / (inMax - inMin)) * (outMax - outMin);
}

// ─── Mio60 ───────────────────────────────────────────────────────────────────

export function drawMio60(a: AnimContext): void {
	const { ctx, position, numEl } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);

	const aVal = getMyInter(y, 0, 2);
	const b = getMyInter(y, 1, 2);

	for (let i = 0; i < numEl + 1; i++) {
		const radL = 2 + (i / numEl - y) * 5;
		let angle = Math.sin(y * PI / 2) * PI;

		ctx.save();

		if (aVal > 0) angle = (i / numEl * TWO_PI) * Math.sin(aVal * PI / 2);
		if (b > 0) angle = i / numEl * TWO_PI;

		ctx.rotate(angle);
		if (b > 0) ctx.rotate(PI * b);

		const colorVar = (1 - Math.sin(b * PI / 2)) * 255;
		ctx.fillStyle = hsbToRgb(0, 0, 255, colorVar);
		ellipse(ctx, 0, RAD2, radL, radL);

		ctx.restore();
	}

	ctx.restore();
}

// ─── Mio61 ───────────────────────────────────────────────────────────────────

export function drawMio61(a: AnimContext): void {
	const { ctx, position, numEl } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);

	const aVal = getMyInter(y, 0, 2);
	const b = getMyInter(y, 1, 2);

	ctx.rotate(y * TWO_PI);

	for (let i = 0; i < numEl + 1; i++) {
		const rad2L = RAD1 / 1.5 - (i / numEl) * RAD1 / 1.5;
		let angle = Math.sin(y * PI / 2) * PI;

		ctx.save();
		ctx.rotate(i / numEl * TWO_PI);
		ctx.translate(0, rad2L);

		if (aVal > 0) angle = (i / numEl * TWO_PI) * Math.sin(aVal * PI / 2);
		if (b > 0) angle = i / numEl * TWO_PI;

		ctx.rotate(angle);
		if (b > 0) ctx.rotate(PI * b);

		const colorVar = (i / numEl) * 255;
		const sizeL = RAD3 / 5;

		ctx.fillStyle = hsbToRgb(0, 0, 255, colorVar);
		ellipse(ctx, 0, 0, sizeL, sizeL);

		ctx.restore();
	}

	ctx.restore();
}

// ─── Mio62 ───────────────────────────────────────────────────────────────────

export function drawMio62(a: AnimContext): void {
	const { ctx, position, numEl } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);

	const aVal = getMyInter(y, 0, 2);
	const b = getMyInter(y, 1, 2);

	ctx.rotate(y * -TWO_PI);

	for (let i = numEl + 1; i > 0; i--) {
		const rad2L = RAD1 / 2 - (i / numEl) * RAD1 / 2;
		let angle = Math.sin(y * PI / 2) * PI;

		ctx.save();
		ctx.rotate(i / numEl * TWO_PI);
		ctx.translate(0, rad2L);

		if (aVal > 0) angle = (i / numEl * PI) * Math.sin(aVal * PI / 2);
		if (b > 0) angle = i / numEl * PI;

		ctx.rotate(angle);
		if (b > 0) ctx.rotate(PI * b);

		let colorVar = 255 * Math.sin((i / numEl - y) * TWO_PI);
		ctx.fillStyle = hsbToRgb(0, 0, 255, colorVar);
		ctx.rotate(PI / 3);

		rect(ctx, 0, 0, 1, LENGHT);

		ctx.restore();
	}

	ctx.restore();
}

// ─── Mio63 ───────────────────────────────────────────────────────────────────

export function drawMio63(a: AnimContext): void {
	const { ctx, position, numEl } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);

	const angle = (1 / numEl) * TWO_PI;

	for (let i = 0; i < numEl; i++) {
		ctx.save();

		const hue = (i / numEl) * 255;
		let bright = 255;
		bright *= Math.sin((i / numEl - y) * TWO_PI);
		const fillColor = hsbToRgb(hue, bright, 255);

		ctx.fillStyle = hsbToRgb(hue, bright, 255, bright);
		ctx.rotate(angle * i);
		const radL = RAD4;

		rect(ctx, 0, RAD2, radL, radL);

		ctx.restore();
	}

	ctx.restore();
}

// ─── Mio64 ───────────────────────────────────────────────────────────────────

export function drawMio64(a: AnimContext): void {
	const { ctx, position, numEl } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);

	const b = getMyInter(y, 1, 2);

	ctx.fillStyle = FILL_COLOR;

	for (let i = 0; i < numEl; i++) {
		let rad2L = RAD2 - (1 - Math.sin(y * PI)) * RAD2;
		const colorVar = Math.sin(y * PI) * 255;
		ctx.fillStyle = hsbToRgb(0, 0, 255, colorVar);

		const sizeL = RAD3;
		const lenghtL = sizeL * Math.sin(y * PI);

		ctx.save();
		ctx.rotate(i / numEl * TWO_PI);
		ctx.rotate(b * PI);

		rect(ctx, rad2L, 0, RAD3 / 3.3, lenghtL);

		ctx.restore();
	}

	ctx.restore();
}

// ─── Mio65 ───────────────────────────────────────────────────────────────────

export function drawMio65(a: AnimContext): void {
	const { ctx, position, numEl } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);

	const sizeL = RAD3;

	for (let i = 0; i < numEl; i++) {
		const positionX = getPosition(i, numEl);
		const val = Math.sin(getMyInter2(y, i, numEl) * PI);

		ctx.fillStyle = FILL_COLOR;
		rect(ctx, positionX, 0, sizeL * val, LENGHT * 0.6 * val);
	}

	ctx.restore();
}

// ─── Mio66 ───────────────────────────────────────────────────────────────────

export function drawMio66(a: AnimContext): void {
	const { ctx, position, numEl } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);

	const aVal = getMyInter(y, 0, 2);

	ctx.rotate(y * TWO_PI);

	for (let i = numEl; i >= 0; i--) {
		const rad2L = (RAD2 * 1.5 - (i / numEl) * RAD2 * 1.5) * Math.sin(y * PI);
		let angle = (y * PI) * PI / 4;
		angle = map(angle, 0, 2, 0, TWO_PI);

		ctx.save();
		ctx.rotate(i / numEl * PI);
		ctx.translate(0, rad2L);

		if (aVal > 0) angle = (i / numEl * PI) * Math.sin(y * PI / 2);

		ctx.rotate(angle);

		let colorVar = Math.sin((i / numEl - y) * TWO_PI);
		colorVar = map(colorVar, -1, 1, 20, 180);
		ctx.fillStyle = hsbToRgb(0, 0, 255, colorVar);

		rect(ctx, 0, 0, 1, LENGHT);

		ctx.restore();
	}

	ctx.restore();
}

// ─── Mio67 ───────────────────────────────────────────────────────────────────

export function drawMio67(a: AnimContext): void {
	const { ctx, position, numEl } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);

	const aVal = getMyInter(y, 0, 2);

	ctx.rotate(-y * TWO_PI);

	for (let i = numEl; i >= 0; i--) {
		for (let j = numEl; j >= 0; j--) {
			const rad2L = (RAD2 * 1.5 - (i / numEl) * RAD2 * 1.5) * Math.sin(y * PI);
			const rad2LY = (RAD2 * 1.5 - (j / numEl) * RAD2 * 1.5) * Math.sin(y * PI);
			let angle = (y * PI) * PI / 4;
			angle = map(angle, 0, 2, 0, TWO_PI);

			ctx.save();
			ctx.rotate(i / numEl * PI);
			ctx.translate(rad2LY, rad2L);

			if (aVal > 0) angle = (i / numEl * PI) * Math.sin(y * PI / 2);

			let colorVar = Math.sin((i / numEl - y) * TWO_PI);
			const colorVarj = 1 - i / numEl;
			const colorVarj2 = 1 - j / numEl;

			colorVar = map(colorVar * colorVarj * colorVarj2, -1, 1, 0, 30);
			ctx.fillStyle = hsbToRgb(0, 0, 255, colorVar);

			rect(ctx, 0, 0, 2, 2);

			ctx.restore();
		}
	}

	ctx.restore();
}

// ─── Mio68 ───────────────────────────────────────────────────────────────────

export function drawMio68(a: AnimContext): void {
	const { ctx, position, numEl } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);

	const aVal = getMyInter(y, 0, 2);
	const b = getMyInter(y, 1, 2);

	ctx.rotate(y * -TWO_PI);

	for (let i = 0; i < numEl + 1; i++) {
		const rad2L = RAD1 / 1.5 - (i / numEl) * RAD1 / 1.5;
		let angle = Math.sin(y * PI / 2) * PI;

		ctx.save();
		ctx.rotate(i / numEl * TWO_PI);
		ctx.translate(0, rad2L);

		if (aVal > 0) angle = (i / numEl * TWO_PI) * Math.sin(aVal * PI / 2);
		if (b > 0) angle = i / numEl * TWO_PI;

		ctx.rotate(angle);
		if (b > 0) ctx.rotate(PI * b);

		const colorVar = (1 - i / numEl) * 255;
		let sizeL = RAD3 / 5;
		sizeL *= 1 - i / numEl;

		ctx.fillStyle = hsbToRgb(0, 0, 255, colorVar);
		ellipse(ctx, 0, 0, sizeL, sizeL);

		ctx.restore();
	}

	ctx.restore();
}

// ─── Mio69 ───────────────────────────────────────────────────────────────────

export function drawMio69(a: AnimContext): void {
	const { ctx, position, numEl } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);

	const aVal = getMyInter(y, 0, 2);
	const b = getMyInter(y, 1, 2);

	for (let i = 0; i < numEl + 1; i++) {
		let radL = RAD3 / 3;

		let angle = Math.sin(y * PI / 2) * PI;

		ctx.save();

		if (aVal > 0) angle = (i / numEl * TWO_PI) * Math.sin(aVal * PI / 2);
		if (b > 0) angle = i / numEl * TWO_PI;

		ctx.rotate(angle);
		if (b > 0) ctx.rotate(PI * b);

		let colorVar = (i / numEl) * Math.sin(b * PI / 2) * 255;
		if (aVal > 0) colorVar = (i / numEl) * 255;
		const dism = (i / numEl) * b * RAD2;
		const dism2 = (i / numEl) * b * radL;

		ctx.fillStyle = hsbToRgb(0, 0, 255, colorVar);
		ellipse(ctx, 0, RAD2 - dism, radL - dism2, radL - dism2);

		ctx.restore();
	}

	ctx.restore();
}

// ─── Mio70 ───────────────────────────────────────────────────────────────────

export function drawMio70(a: AnimContext): void {
	const { ctx, position, numEl } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);

	const angle = (1 / numEl) * TWO_PI;

	for (let i = 0; i < numEl; i++) {
		ctx.save();

		let bright = 255;
		bright *= Math.sin((i / numEl - y) * TWO_PI);

		ctx.fillStyle = hsbToRgb(0, 0, 255, bright);
		ctx.rotate(angle * i);
		const radL = RAD3 * 0.7;

		ellipse(ctx, 0, RAD2, radL, radL);

		ctx.restore();
	}

	ctx.restore();
}

// ─── Mio71 ───────────────────────────────────────────────────────────────────

export function drawMio71(a: AnimContext): void {
	const { ctx, position, numEl } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);

	const aVal = getMyInter(y, 0, 2);
	const b = getMyInter(y, 1, 2);

	ctx.rotate(y * -TWO_PI);

	for (let i = numEl + 1; i > 0; i--) {
		const rad2L = RAD1 / 2 - (i / numEl) * RAD1 / 2;
		let angle = Math.sin(y * PI / 2) * PI;

		ctx.save();
		ctx.rotate(i / numEl * TWO_PI);
		ctx.translate(0, rad2L);

		if (aVal > 0) angle = (i / numEl * PI) * Math.sin(aVal * PI / 2);
		if (b > 0) angle = i / numEl * PI;

		ctx.rotate(angle);
		if (b > 0) ctx.rotate(PI * b);

		let colorVar = 1 - i / numEl;
		colorVar = map(colorVar, 0, 1, 0, 255);
		colorVar = Math.pow(colorVar, 0.82);

		ctx.fillStyle = hsbToRgb(0, 0, 255, colorVar);
		ctx.rotate(PI / 3);

		rect(ctx, 0, 0, 1, LENGHT * 0.7);

		ctx.restore();
	}

	ctx.restore();
}

// ─── Mio72 ───────────────────────────────────────────────────────────────────

export function drawMio72(a: AnimContext): void {
	const { ctx, position, numEl } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);

	let cont = 0;

	for (let i = 0; i < numEl; i++) {
		let mult = 1;
		if (cont % 2 === 0) mult *= -1;
		const val = 1 - i / numEl;
		let displace = getMyInter2(y, i, numEl);
		displace = Math.sin(PI * displace);
		const colorVar = val * 255;

		ctx.fillStyle = hsbToRgb(0, 0, 255, colorVar);
		const positionX = getPosition(i, numEl);
		const positionY = JUMP * displace * mult;

		rect(ctx, positionX, positionY, RAD3 / 5, RAD3 / 5);
		cont += 1;
	}

	ctx.restore();
}

// ─── Mio73 ───────────────────────────────────────────────────────────────────

export function drawMio73(a: AnimContext): void {
	const { ctx, position, numEl } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);

	for (let i = 0; i < numEl; i++) {
		const marginL = (TWO_PI * RAD2 / numEl) * 0.6;
		const rad3L = (TWO_PI * RAD2) / (numEl + marginL);
		const aVal = getMyInter2(y, i, numEl);
		const colorVar = getFillGrad(aVal, PI);

		ctx.save();
		ctx.fillStyle = hsbToRgb(0, 0, colorVar);
		ctx.rotate(i / numEl * TWO_PI);

		rect(ctx, RAD2, 0, 2, LENGHT);

		ctx.restore();
	}

	ctx.restore();
}

// ─── Mio74 ───────────────────────────────────────────────────────────────────

export function drawMio74(a: AnimContext): void {
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
		ctx.rotate((1 - Math.sin(aVal * PI)) * (PI / 2 + PI / 8));

		// rectMode CORNER: draw from (0,0) as top-left
		ctx.fillRect(0, 0, LENGHT * 0.5, RAD3 / 5);

		ctx.restore();
	}

	ctx.restore();
}

// ─── Mio75 ───────────────────────────────────────────────────────────────────

export function drawMio75(a: AnimContext): void {
	const { ctx, position, numEl } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);

	for (let i = 0; i < numEl; i++) {
		const marginL = (TWO_PI * RAD2 / numEl) * 0.6;
		const rad3L = (TWO_PI * RAD2) / (numEl + marginL);
		const aVal = getMyInter2(y, i, numEl);
		const colorVar = getFillGrad(aVal, PI);

		ctx.save();
		ctx.fillStyle = hsbToRgb(0, 0, colorVar);
		ctx.rotate(i / numEl * TWO_PI);

		// arc + ellipse
		arc(ctx, 0, 0, LENGHT * 0.5, LENGHT * 0.5, 0, PI / 4);
		ellipse(ctx, RAD2, 0, 2, 2);

		ctx.restore();
	}

	ctx.restore();
}

// ─── Mio76 ───────────────────────────────────────────────────────────────────

export function drawMio76(a: AnimContext): void {
	const { ctx, position, numEl } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);

	for (let i = 0; i < numEl; i++) {
		const marginL = (TWO_PI * RAD2 / numEl) * 0.6;
		const rad3L = (TWO_PI * RAD2) / (numEl + marginL);
		const aVal = getMyInter2(y, i, numEl);
		const colorVar = getFillGrad(aVal, PI);

		ctx.save();
		ctx.strokeStyle = hsbToRgb(0, 0, 255, colorVar);
		ctx.lineWidth = 1;
		ctx.rotate(i / numEl * TWO_PI);

		arcStroke(ctx, 0, 0, LENGHT * Math.sin(aVal * PI) * 2, LENGHT * 0.8, 0, PI / 2);

		ctx.restore();
	}

	ctx.restore();
}

// ─── Mio77 ───────────────────────────────────────────────────────────────────

export function drawMio77(a: AnimContext): void {
	const { ctx, position, numEl } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);
	ctx.rotate(y * TWO_PI);

	for (let i = 0; i < numEl; i++) {
		const aVal = getMyInter2(y, i, numEl);
		const colorVar = getFillGrad(aVal, PI);
		const angle = (i / numEl) * TWO_PI * Math.sin(y * PI);

		ctx.save();
		ctx.strokeStyle = hsbToRgb(0, 0, 255, colorVar);
		ctx.lineWidth = 1;
		ctx.translate(RAD2 * Math.cos(angle), RAD2 * Math.sin(angle));
		ctx.rotate(PI + angle);

		arcStroke(ctx, 0, 0, LENGHT, LENGHT, 0, PI / 2);

		ctx.restore();
	}

	ctx.restore();
}

// ─── Mio78 ───────────────────────────────────────────────────────────────────

export function drawMio78(a: AnimContext): void {
	const { ctx, position, numEl } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);
	ctx.rotate(-y * TWO_PI);

	for (let i = 0; i < numEl; i++) {
		const aVal = getMyInter2(y, i, numEl);
		const colorVar = getFillGrad(aVal, PI);
		const angle = (i / numEl) * TWO_PI * Math.sin(y * PI);

		ctx.save();
		ctx.strokeStyle = hsbToRgb(0, 0, 255, colorVar);
		ctx.lineWidth = 1;
		ctx.translate(RAD3 * Math.cos(angle), RAD3 * Math.sin(angle));
		ctx.rotate(PI / 4 + angle);

		arcStroke(ctx, 0, 0, LENGHT, LENGHT, 0, PI / 2 * Math.sin(y * PI));

		ctx.restore();
	}

	ctx.restore();
}

// ─── Mio79 ───────────────────────────────────────────────────────────────────

export function drawMio79(a: AnimContext): void {
	const { ctx, position, numEl } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);

	for (let i = 0; i < numEl; i++) {
		const marginL = (TWO_PI * RAD2 / numEl) * 0.6;
		const rad3L = (TWO_PI * RAD2) / (numEl + marginL);
		const aVal = getMyInter2(y, i, numEl);
		const colorVar = getFillGrad(aVal, PI);

		ctx.save();
		ctx.strokeStyle = hsbToRgb(0, 0, 255, colorVar);
		ctx.lineWidth = 1;
		ctx.rotate(i / numEl * TWO_PI);

		arcStroke(ctx, 0, 0, LENGHT * (0.5 + Math.sin(aVal * PI)) * 1.3, LENGHT * 0.6, 0, PI / 2);

		ctx.restore();
	}

	ctx.restore();
}

// ─── Mio80 ───────────────────────────────────────────────────────────────────

export function drawMio80(a: AnimContext): void {
	const { ctx, position, numEl } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);

	for (let i = 0; i < numEl; i++) {
		const aVal = getMyInter2(y, i, numEl);

		ctx.save();
		ctx.strokeStyle = hsbToRgb(0, 0, 255, 50);
		ctx.lineWidth = 1;
		ctx.rotate(i / numEl * TWO_PI);

		ellipseStroke(ctx, 0, 0, LENGHT * (0.5 + Math.sin(aVal * PI)), LENGHT * 0.5);

		ctx.restore();
	}

	ctx.restore();
}

// ─── Mio81 ───────────────────────────────────────────────────────────────────

export function drawMio81(a: AnimContext): void {
	const { ctx, position, numEl } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);

	for (let i = 0; i < numEl; i++) {
		const val = 1 - i / numEl;
		const colorVar = val * 255;

		ctx.fillStyle = hsbToRgb(0, 0, 255, colorVar);
		const positionX = getPosition(i, numEl);
		let positionY = Math.sin(y * TWO_PI);
		positionY *= Math.sin(i / numEl * TWO_PI) * JUMP * 0.8;

		ellipse(ctx, positionX, positionY, RAD3 / 5, RAD3 / 5);
	}

	ctx.restore();
}

// ─── Mio82 ───────────────────────────────────────────────────────────────────

export function drawMio82(a: AnimContext): void {
	const { ctx, position, numEl } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);

	const n = 8;
	ctx.rotate(y * PI);

	for (let j = 0; j < n; j++) {
		ctx.rotate(j / n * TWO_PI);

		for (let i = 0; i < numEl; i++) {
			const aVal = getMyInter2(1 - y, i, numEl);
			const rad2L = RAD2 - (i / numEl) * RAD2;

			ctx.save();
			ctx.rotate(i / numEl * PI);
			ctx.translate(rad2L, rad2L);

			const colorVar = getFillGrad(aVal, PI);
			ctx.fillStyle = hsbToRgb(0, 0, 255, colorVar);

			ellipse(ctx, 0, 0, 1, 1);

			ctx.restore();
		}
	}

	ctx.restore();
}

// ─── Mio83 ───────────────────────────────────────────────────────────────────

export function drawMio83(a: AnimContext): void {
	const { ctx, position, numEl } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);

	const n = 16;

	for (let j = 0; j < n; j++) {
		ctx.rotate(j / n * TWO_PI);

		for (let i = 1; i <= numEl; i++) {
			const aVal = getMyInter2(1 - y, i, numEl);
			const rad2L = RAD2 - (i / numEl) * RAD2;

			ctx.save();
			ctx.rotate(i / numEl * PI);
			ctx.translate(rad2L, rad2L);

			const colorVar = getFillGrad(aVal, PI);
			ctx.fillStyle = hsbToRgb(0, 0, 255, colorVar);

			ellipse(ctx, 0, 0, RAD3 / 5, RAD3 / 5);

			ctx.restore();
		}
	}

	ctx.restore();
}

// ─── Mio84 ───────────────────────────────────────────────────────────────────

export function drawMio84(a: AnimContext): void {
	const { ctx, position, numEl } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);

	const n = 16;
	ctx.rotate(-y * PI);

	for (let j = 0; j < n; j++) {
		ctx.rotate(j / n * TWO_PI);

		for (let i = numEl; i >= 0; i--) {
			const rad2L = RAD2 * 0.8 - (i / numEl) * RAD2 * 0.8;

			ctx.save();
			ctx.rotate(i / numEl * PI);
			ctx.translate(rad2L, rad2L);

			const colorVar = 255 * Math.sin((y - 0.5 * i / numEl) * TWO_PI);
			ctx.fillStyle = hsbToRgb(0, 0, 255, 155 - colorVar);

			ellipse(ctx, 0, 0, 1, 1);

			ctx.restore();
		}
	}

	ctx.restore();
}

// ─── Mio85 ───────────────────────────────────────────────────────────────────

export function drawMio85(a: AnimContext): void {
	const { ctx, position, numEl } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);

	const n = 8;

	for (let j = 0; j < n; j++) {
		ctx.rotate(j / n * TWO_PI);

		for (let i = numEl; i > 0; i--) {
			const rad2L = RAD2 - (i / numEl) * RAD2;

			ctx.save();
			ctx.rotate(Math.abs(i / numEl * y * 3 * HALF_PI));
			ctx.translate(rad2L, rad2L);

			ctx.fillStyle = FILL_COLOR;
			ellipse(ctx, 0, 0, RAD3 / 5, RAD3 / 5);

			ctx.restore();
		}
	}

	ctx.restore();
}
