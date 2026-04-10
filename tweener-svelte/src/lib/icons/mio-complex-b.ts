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
const LENGHT = SIZE_GRID - 10; // 20
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

// ─── Mio86 ───────────────────────────────────────────────────────────────────

export function drawMio86(a: AnimContext): void {
	const { ctx, position, numEl } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);

	const aVal = getMyInter(y, 0, 2);
	const b = getMyInter(y, 1, 2);

	const sizeL = aVal * RAD2;
	const colorVar = Math.sin(aVal * PI) * 255;
	let colorVar2 = (1 - Math.sin(b * PI / 2)) * 255;
	if (b === 0) colorVar2 = 0;

	const radL = RAD2 / 2 + b * RAD2;

	for (let i = 0; i < numEl + 1; i++) {
		ctx.save();

		// Stroke circle
		ctx.strokeStyle = hsbToRgb(0, 0, 255, colorVar);
		ctx.lineWidth = 1;
		ellipseStroke(ctx, 0, 0, sizeL, sizeL);

		// Filled rect
		ctx.rotate(i / numEl * TWO_PI);
		ctx.fillStyle = hsbToRgb(0, 0, 255, colorVar2 + 40);
		ctx.fillRect(0, radL, 1, LENGHT * 0.2 * Math.sin(b * PI));

		ctx.restore();
	}

	ctx.restore();
}

// ─── Mio87 ───────────────────────────────────────────────────────────────────

export function drawMio87(a: AnimContext): void {
	const { ctx, position, numEl } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);

	const aVal = getMyInter(y, 0, 2);
	const b = getMyInter(y, 1, 2);

	const colorVar = Math.sin(aVal * PI) * 255;
	let colorVar2 = (1 - Math.sin(b * PI / 2)) * 255;
	if (b === 0) colorVar2 = 0;

	const radL = y * RAD2 * 1.5;

	for (let i = 0; i < numEl + 1; i++) {
		ctx.save();

		// Stroke (empty body in original — ellipse commented out)
		ctx.strokeStyle = hsbToRgb(0, 0, 255, colorVar);

		// Filled rect
		ctx.rotate(i / numEl * TWO_PI);
		ctx.fillStyle = hsbToRgb(0, 0, 255, colorVar2 + 30);
		ctx.fillRect(0, radL, 1, LENGHT * 0.2 * Math.sin(y * PI));

		ctx.restore();
	}

	ctx.restore();
}

// ─── Mio88 ───────────────────────────────────────────────────────────────────

export function drawMio88(a: AnimContext): void {
	const { ctx, position, numEl } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);

	const b = getMyInter(y, 1, 2);

	let colorVar = (1 - Math.sin(b * PI / 2)) * 255;
	if (b === 0) colorVar = 0;

	const radL = y * RAD2;

	for (let i = 0; i < numEl + 1; i++) {
		ctx.save();

		// Stroke (empty body)
		ctx.strokeStyle = hsbToRgb(0, 0, 255, colorVar);

		// Filled rect
		ctx.rotate(i / numEl * TWO_PI);
		ctx.fillStyle = hsbToRgb(0, 0, 255, colorVar + 30);
		ctx.fillRect(0, radL + b * 12, 1, RAD2 * Math.sin(y * PI));

		ctx.restore();
	}

	ctx.restore();
}

// ─── Mio89 ───────────────────────────────────────────────────────────────────

export function drawMio89(a: AnimContext): void {
	const { ctx, position } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);

	const radL = RAD2;
	const posX = 0;
	let posY = 0;
	posY += radL / 2;

	const aVal = getMyInter(y, 0, 9);
	const b = getMyInter(y, 1, 9);
	const c = getMyInter(y, 2, 9);
	const d = getMyInter(y, 3, 9);
	const e = getMyInter(y, 4, 9);
	const f = getMyInter(y, 5, 9);
	const g = getMyInter(y, 6, 9);
	const h = getMyInter(y, 7, 9);

	let size1 = radL * aVal;
	if (aVal === 0) size1 = radL;
	let size2 = radL * b;
	if (aVal === 0 && b === 0) size2 = radL;
	let size3 = radL * c;
	if (aVal === 0 && b === 0 && c === 0) size3 = radL;
	const size4 = radL * d;
	const size5 = radL * e;
	const size6 = radL * f;
	const size7 = radL * g;
	const size8 = radL * h;

	ctx.strokeStyle = FILL_COLOR;
	ctx.beginPath();
	ctx.moveTo(posX + size5 - size7, posY - size6 + size8);
	ctx.lineTo(posX + size1 - size7, posY - size6 + size8);
	ctx.lineTo(posX + size1 - size7, posY - size2 + size8);
	ctx.lineTo(posX + size1 - size3, posY - size2 + size8);
	ctx.lineTo(posX + size1 - size3, posY - size2 + size4);
	ctx.stroke();

	ctx.restore();
}

// ─── Mio90 ───────────────────────────────────────────────────────────────────

export function drawMio90(a: AnimContext): void {
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
			const mult = i / numEl;

			ctx.save();
			ctx.rotate(i / numEl * PI);
			ctx.translate(rad2L, rad2L);

			const colorVar = getFillGrad(aVal, PI);
			ctx.fillStyle = hsbToRgb(0, 0, 255, colorVar - 50);

			rect(ctx, 0, 0, 0.5, LENGHT * mult);

			ctx.restore();
		}
	}

	ctx.restore();
}

// ─── Mio91 ───────────────────────────────────────────────────────────────────

export function drawMio91(a: AnimContext): void {
	const { ctx, position, numEl } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);

	const n = 8;
	ctx.rotate(-y * PI);

	for (let j = 0; j < n; j++) {
		ctx.rotate(j / n * TWO_PI);

		for (let i = 1; i < numEl; i++) {
			const rad2L = RAD3 - (i / numEl) * RAD3;

			ctx.save();
			ctx.rotate(i / numEl * PI);
			ctx.translate(rad2L, rad2L);

			ctx.fillStyle = FILL_COLOR;
			rect(ctx, 0, RAD3, 1, LENGHT);

			ctx.restore();
		}
	}

	ctx.restore();
}

// ─── Mio92 ───────────────────────────────────────────────────────────────────

export function drawMio92(a: AnimContext): void {
	const { ctx, position, numEl } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);

	const n = 16;
	ctx.rotate(-y * PI);

	for (let j = 0; j < n; j++) {
		ctx.rotate(j / n * TWO_PI);

		for (let i = 0; i < numEl; i++) {
			const rad2L = RAD2 - (i / numEl) * RAD2;
			const mult = 1 - i / numEl;

			ctx.save();
			ctx.rotate(i / numEl * PI);
			ctx.translate(rad2L, rad2L);

			const colorVar = getFillGrad(mult, PI);
			ctx.fillStyle = hsbToRgb(0, 0, 255, colorVar * Math.pow(1 - mult, 0.8));

			rect(ctx, 0, 0, 1, LENGHT * 0.3 * mult);

			ctx.restore();
		}
	}

	ctx.restore();
}

// ─── Mio93 ───────────────────────────────────────────────────────────────────

export function drawMio93(a: AnimContext): void {
	const { ctx, position, numEl } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);

	const n = 16;
	ctx.rotate(-y * PI);

	for (let j = 0; j < n; j++) {
		ctx.rotate(j / n * TWO_PI);

		for (let i = 0; i < numEl; i++) {
			const aVal = getMyInter2(1 - y, i, numEl);
			const rad2L = RAD2 - (i / numEl) * RAD2;
			const mult = 1 - i / numEl;

			ctx.save();
			ctx.rotate(i / numEl * PI);
			ctx.translate(rad2L, rad2L);

			const colorVar = getFillGrad(aVal, PI);
			ctx.fillStyle = hsbToRgb(0, 0, 255, colorVar * Math.pow(1 - mult, 0.8));

			rect(ctx, 0, 0, 1, LENGHT * 0.3 * mult);

			ctx.restore();
		}
	}

	ctx.restore();
}

// ─── Mio94 ───────────────────────────────────────────────────────────────────

export function drawMio94(a: AnimContext): void {
	const { ctx, position } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);

	const radL = RAD2;
	const posX = 0;
	let posY = 0;
	posY += radL / 2;

	const aVal = getMyInter(y, 0, 9);
	const b = getMyInter(y, 1, 9);
	const c = getMyInter(y, 2, 9);
	const d = getMyInter(y, 3, 9);
	const e = getMyInter(y, 4, 9);
	const f = getMyInter(y, 5, 9);
	const g = getMyInter(y, 6, 9);
	const h = getMyInter(y, 7, 9);
	const ii = getMyInter(y, 8, 9);

	let size1 = radL * aVal;
	if (aVal === 0) size1 = radL;
	let size2 = radL * b;
	if (aVal === 0 && b === 0) size2 = radL;
	let size3 = radL * c;
	if (aVal === 0 && b === 0 && c === 0) size3 = radL;
	const size4 = radL * d;
	const size5 = radL * e;
	const size6 = radL * f;
	const size7 = radL * g;
	const size8 = radL * h;

	const colorVarAlpha = (1 - ii) * 255;

	ctx.strokeStyle = hsbToRgb(0, 0, 255, colorVarAlpha);
	ctx.beginPath();
	ctx.moveTo(posX, posY);
	ctx.lineTo(posX + size1, posY);
	ctx.lineTo(posX + size1 - size2, posY - size2);
	ctx.lineTo(posX + size1 - size2 + size3, posY - size2);
	ctx.lineTo(posX + size1 - size2 + size3 - size4 / 2, posY - size2 - size4 / 2);
	ctx.lineTo(posX + size1 - size2 + size3 - size4 / 2 - size5 / 2, posY - size2 - size4 / 2 + size5 / 2);
	ctx.lineTo(posX + size1 - size2 + size3 - size4 / 2 - size5 / 2, posY - size2 - size4 / 2 + size5 / 2 + size6);
	ctx.lineTo(posX + size1 - size2 + size3 - size4 / 2 - size5 / 2 + size7, posY - size2 - size4 / 2 + size5 / 2 + size6 - size7);
	ctx.lineTo(posX + size1 - size2 + size3 - size4 / 2 - size5 / 2 + size7, posY - size2 - size4 / 2 + size5 / 2 + size6 - size7 + size8);
	ctx.stroke();

	ctx.restore();
}

// ─── Mio95 ───────────────────────────────────────────────────────────────────

export function drawMio95(a: AnimContext): void {
	const { ctx, position, numEl } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);

	const n = 16;
	ctx.rotate(y * PI);

	for (let j = 0; j < n; j++) {
		ctx.rotate(j / n * TWO_PI);

		for (let i = 0; i < numEl; i++) {
			const aVal = getMyInter2(1 - y, i, numEl);
			const rad2L = RAD2 - (i / numEl) * RAD2;
			const mult = i / numEl;
			const radL = RAD3 / 2 * mult;

			ctx.save();
			ctx.rotate(i / numEl * PI);
			ctx.translate(rad2L, rad2L);

			const colorVar = getFillGrad(aVal, PI);
			ctx.fillStyle = hsbToRgb(0, 0, 255, colorVar - 80);

			ellipse(ctx, 0, 0, radL, radL);

			ctx.restore();
		}
	}

	ctx.restore();
}

// ─── Mio96 ───────────────────────────────────────────────────────────────────

export function drawMio96(a: AnimContext): void {
	const { ctx, position } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);

	ctx.fillStyle = FILL_COLOR;
	const s = Math.sin(y * PI) * RAD1;
	ellipse(ctx, 0, 0, s, s);

	ctx.restore();
}

// ─── Mio97 ───────────────────────────────────────────────────────────────────

export function drawMio97(a: AnimContext): void {
	const { ctx, position, numEl } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);

	const n = 16;
	ctx.rotate(y * PI);

	for (let j = 0; j < n; j++) {
		ctx.rotate(j / n * TWO_PI);

		for (let i = 0; i < numEl; i++) {
			const aVal = getMyInter2(1 - y, i, numEl);
			const rad2L = RAD2 - (i / numEl) * RAD2;
			const mult = i / numEl;
			const radL = RAD3 / 2 * mult;

			ctx.save();
			ctx.rotate(i / numEl * PI);
			ctx.translate(rad2L, rad2L);

			const colorVar = getFillGrad(aVal, PI);
			ctx.fillStyle = hsbToRgb(0, 0, 255, colorVar - 80);

			ellipse(ctx, 0, 0, radL, radL);

			ctx.restore();
		}
	}

	ctx.restore();
}

// ─── Mio98 ───────────────────────────────────────────────────────────────────

export function drawMio98(a: AnimContext): void {
	const { ctx, position } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);

	const radL = RAD2;
	const posX = 0;
	let posY = 0;
	posY += radL / 2;

	const b = getMyInter(y, 1, 8);
	const c = getMyInter(y, 2, 8);
	const d = getMyInter(y, 4, 8);
	const e = getMyInter(y, 5, 8);
	const f = getMyInter(y, 6, 8);

	const cos30 = Math.cos(PI / 6);
	const sin30 = Math.sin(PI / 6);

	ctx.strokeStyle = FILL_COLOR;
	ctx.beginPath();

	// First shape
	ctx.moveTo(posX + radL * cos30 * 2 * e, posY);
	ctx.lineTo(
		posX + radL * cos30 - radL * cos30 * d + radL * cos30 * 2 * e - radL * cos30 * f,
		posY - radL * sin30 + (radL + radL / 2) * d - (radL + radL / 2) * f
	);
	ctx.lineTo(
		posX + radL * cos30 * 2 - radL * cos30 * d - f * radL * cos30,
		posY + (radL + radL / 2) * d - (radL + radL / 2) * f
	);
	ctx.lineTo(posX + radL * cos30, posY + radL * sin30);
	ctx.lineTo(posX + radL * cos30 * 2 * e, posY);

	// Second shape
	ctx.moveTo(posX + radL * cos30 * 2 * e, posY);
	ctx.lineTo(
		posX + radL * cos30 - radL * cos30 * b + radL * cos30 * 2 * e - radL * cos30 * f,
		posY - radL * sin30 + (radL + radL / 2) * b - (radL + radL / 2) * f
	);
	ctx.lineTo(
		posX + radL * cos30 * 2 - radL * cos30 * b - f * radL * cos30,
		posY + (radL + radL / 2) * b - (radL + radL / 2) * f
	);
	ctx.lineTo(posX + radL * cos30, posY + radL * sin30);

	// Third shape
	ctx.lineTo(
		posX + radL * cos30 * 2 - radL * cos30 * b - radL * cos30 * f,
		posY + (radL + radL / 2) * b - (radL + radL / 2) * f
	);
	ctx.lineTo(posX + radL * cos30, posY + radL * sin30);
	ctx.lineTo(posX + radL * cos30 * 2 * c, posY);
	ctx.lineTo(
		posX + radL * cos30 - radL * cos30 * b + radL * cos30 * 2 * c - radL * cos30 * f,
		posY - radL * sin30 + (radL + radL / 2) * b - (radL + radL / 2) * f
	);
	ctx.lineTo(
		posX + radL * cos30 * 2 - radL * cos30 * b - f * radL * cos30,
		posY + (radL + radL / 2) * b - (radL + radL / 2) * f
	);
	ctx.lineTo(posX + radL * cos30, posY + radL * sin30 - radL * f);

	ctx.stroke();

	ctx.restore();
}

// ─── Mio99 ───────────────────────────────────────────────────────────────────

export function drawMio99(a: AnimContext): void {
	const { ctx, position, numEl } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);

	ctx.fillStyle = FILL_COLOR;

	for (let i = 0; i < numEl; i++) {
		ctx.save();
		ctx.translate(
			Math.sin(y * TWO_PI) * (i / numEl) * RAD2,
			(i / numEl) * RAD2 * Math.sin(y * PI)
		);
		ctx.translate(0, RAD2 * i / numEl);

		rect(ctx, 0, 0, 1, 1);
		if (i === numEl - 1) ellipse(ctx, 0, 0, RAD3, RAD3);

		ctx.restore();
	}

	ctx.restore();
}

// ─── Mio100 ──────────────────────────────────────────────────────────────────

export function drawMio100(a: AnimContext): void {
	const { ctx, position, numEl } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);

	const val = Math.sin(TWO_PI * y);

	ctx.fillStyle = FILL_COLOR;

	for (let i = 0; i <= numEl; i++) {
		let mult = 1;
		if (i % 2 === 1) mult *= -1;

		let positionX = getPosition(i, numEl);
		const sizeL = RAD3;
		positionX += positionX * val * mult * 0.2;

		rect(ctx, positionX, 0, sizeL, sizeL);
	}

	ctx.restore();
}

// ─── Mio101 ──────────────────────────────────────────────────────────────────

export function drawMio101(a: AnimContext): void {
	const { ctx, position } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);

	ctx.fillStyle = FILL_COLOR;

	const sizeL = RAD2;
	rect(ctx, 0, 0, sizeL, sizeL * Math.sin(TWO_PI * y));

	ctx.restore();
}

// ─── Mio102 ──────────────────────────────────────────────────────────────────

export function drawMio102(a: AnimContext): void {
	const { ctx, position, numEl } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);
	ctx.rotate(PI / 4);

	ctx.strokeStyle = FILL_COLOR;

	let sizeL = RAD3 * 2;
	const div = sizeL / numEl;
	const mult = Math.sin(y * TWO_PI);

	for (let i = 0; i < numEl; i++) {
		const val = i / numEl;
		sizeL += mult * div * val * 3;
		ellipseStroke(ctx, 0, 0, sizeL, sizeL);
	}

	ctx.restore();
}

// ─── Mio103 ──────────────────────────────────────────────────────────────────

export function drawMio103(a: AnimContext): void {
	const { ctx, position, numEl } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);

	ctx.fillStyle = FILL_COLOR;
	const dist = Math.sin(TWO_PI * y);

	for (let i = 0; i < numEl; i++) {
		let mult = 1;
		if (i % 2 === 1) mult *= -1;

		let positionX = getPosition(i, numEl + 1);
		positionX += 2;

		let sizeL = LENGHT;
		sizeL -= JUMP3 * dist * mult;

		rect(ctx, positionX + SIZE_GRID * 0.5, 0, THICK2, sizeL);
	}

	ctx.restore();
}

// ─── Mio104 ──────────────────────────────────────────────────────────────────

export function drawMio104(a: AnimContext): void {
	const { ctx, position, numEl } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);

	ctx.fillStyle = FILL_COLOR;
	const dist = Math.sin(PI * y);

	for (let i = 0; i < numEl; i++) {
		let mult = 1;
		if (i % 1 === 1) mult *= -1; // always false — original code quirk

		let positionX = getPosition(i, numEl);
		positionX += 2;

		let sizeL = LENGHT;
		sizeL *= JUMP3 * dist * mult * 0.4;

		// rectMode CORNER + rotate(PI)
		ctx.rotate(PI);
		ctx.fillRect(positionX, -SIZE_GRID * 0.3, THICK2 * 0.5, sizeL);
	}

	ctx.restore();
}

// ─── Mio105 ──────────────────────────────────────────────────────────────────

export function drawMio105(a: AnimContext): void {
	const { ctx, position, numEl } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);

	ctx.fillStyle = FILL_COLOR;
	const dist = Math.sin(PI * y);

	for (let i = 0; i < numEl; i++) {
		let mult = 1;
		if (i % 1 === 1) mult *= -1; // always false

		let sizeL = LENGHT;
		sizeL *= JUMP3 * dist * mult * 0.7;

		ctx.rotate(PI * dist);
		rect(ctx, 0, 0, THICK2 * 0.5, sizeL);
	}

	ctx.restore();
}

// ─── Mio106 ──────────────────────────────────────────────────────────────────

export function drawMio106(a: AnimContext): void {
	const { ctx, position, numEl } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);

	ctx.fillStyle = FILL_COLOR;
	const dist = Math.sin(TWO_PI * y);

	for (let i = 0; i < numEl; i++) {
		let mult = 1;
		if (i % 2 === 1) mult *= -1;

		let positionY = getPosition(i, numEl + 1);
		positionY += 2;

		let sizeL = LENGHT;
		sizeL -= JUMP3 * dist * mult;

		rect(ctx, 0, positionY, sizeL, 1);
	}

	ctx.restore();
}

// ─── Mio107 ──────────────────────────────────────────────────────────────────

export function drawMio107(a: AnimContext): void {
	const { ctx, position, numEl } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);

	ctx.fillStyle = FILL_COLOR;

	for (let i = 0; i < numEl; i++) {
		const positionX = getPosition(i, 2);

		ctx.rotate(y * PI);
		rect(ctx, positionX, 0, 1, 1);
	}

	ctx.restore();
}

// ─── Mio108 ──────────────────────────────────────────────────────────────────

export function drawMio108(a: AnimContext): void {
	const { ctx, position, numEl } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);

	ctx.fillStyle = FILL_COLOR;

	for (let i = 0; i < numEl; i++) {
		const sizeL = LENGHT;
		ctx.rotate(y * PI);
		rect(ctx, 0, 0, sizeL * 1.3, 1);
	}

	ctx.restore();
}

// ─── Mio109 ──────────────────────────────────────────────────────────────────

export function drawMio109(a: AnimContext): void {
	const { ctx, position, numEl } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);

	ctx.fillStyle = FILL_COLOR;
	const dist = Math.sin(y * PI);

	for (let i = 0; i < numEl; i++) {
		ctx.rotate(y * PI * 0.5 * dist);
		rect(ctx, SIZE_GRID * 0.5, 0, 1, 1);
	}

	ctx.restore();
}

// ─── Mio110 ──────────────────────────────────────────────────────────────────

export function drawMio110(a: AnimContext): void {
	const { ctx, position, numEl } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);

	const aVal = getMyInter(y, 0, 2);
	const b = getMyInter(y, 1, 2);

	ctx.rotate(y * PI * b);

	for (let i = 0; i < numEl; i++) {
		const sizeL = LENGHT;
		ctx.rotate(y * HALF_PI * aVal);

		// fill(255, 0, 255, 255*(1-y)) — magenta with fading alpha
		ctx.fillStyle = hsbToRgb(213, 255, 255, 255 * (1 - y));

		// rectMode CORNER
		ctx.fillRect(0, 0, sizeL * 0.7, 1);
	}

	ctx.restore();
}

// ─── Mio111 ──────────────────────────────────────────────────────────────────

export function drawMio111(a: AnimContext): void {
	const { ctx, position, numEl } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);

	ctx.fillStyle = FILL_COLOR;

	for (let i = 0; i < numEl; i++) {
		let positionX = getPosition(i, 2);
		positionX *= 0.8;

		ctx.rotate(y * PI);

		if (i % 2 === 0) {
			rect(ctx, positionX, 0, 10, 1);
		} else {
			rect(ctx, positionX, 0, 1, 1);
		}
	}

	ctx.restore();
}

// ─── Mio112 ──────────────────────────────────────────────────────────────────

export function drawMio112(a: AnimContext): void {
	const { ctx, position, numEl } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);

	ctx.fillStyle = FILL_COLOR;

	for (let i = 0; i < numEl; i++) {
		let positionX = getPosition(i, 2);
		positionX *= 0.3;

		ctx.rotate(y * PI);

		if (i % 2 === 0) {
			rect(ctx, positionX, 0, 20, 1);
		}
	}

	ctx.restore();
}

// ─── Mio113 ──────────────────────────────────────────────────────────────────

export function drawMio113(a: AnimContext): void {
	const { ctx, position, numEl } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);

	const dist = Math.sin(PI / 2 * y);

	for (let i = 0; i < numEl; i++) {
		let move = 1 - i / numEl;
		move += dist;
		move = move % 1;
		const sizeL = RAD3;
		const positionX = SIZE_GRID / 4 + getPosition(i, numEl);
		const rise = Math.abs(map(move, 0, 1, -1, 1));

		ctx.fillStyle = hsbToRgb(0, 0, 255, (1 - rise) * 255);

		rect(ctx, positionX + SIZE_GRID * 0.35, 0, sizeL * 0.5, sizeL * 2);
	}

	ctx.restore();
}

// ─── Mio114 ──────────────────────────────────────────────────────────────────

export function drawMio114(a: AnimContext): void {
	const { ctx, position, numEl } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);

	const dist = Math.sin(PI / 2 * y);

	for (let i = 0; i < numEl; i++) {
		let move = 1 - i / numEl;
		move -= dist;
		move = move % 1;
		const sizeL = RAD3;
		const positionX = getPosition(i, numEl);
		const rise = Math.abs(map(move, 0, 1, -1, 1));

		ctx.fillStyle = hsbToRgb(0, 0, 255, (1 - rise) * 255);

		rect(ctx, positionX, 0, sizeL * 0.5, sizeL * 0.5);
	}

	ctx.restore();
}

// ─── Mio115 ──────────────────────────────────────────────────────────────────

export function drawMio115(a: AnimContext): void {
	const { ctx, position, numEl } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);

	const dist = Math.sin(PI / 2 * y);

	for (let i = 0; i < numEl; i++) {
		let move = 1 - i / numEl;
		move -= dist;
		move = move % 1;

		const positionX = getPosition(i, numEl);
		const positionY = SIZE_GRID * 0.5 * Math.sin(y * TWO_PI) * i / numEl;

		ctx.fillStyle = FILL_COLOR;

		// rectMode CORNER + rotate(PI)
		ctx.rotate(PI);
		ctx.fillRect(positionX, positionY, 1, 1);
	}

	ctx.restore();
}

// ─── Mio116 ──────────────────────────────────────────────────────────────────

export function drawMio116(a: AnimContext): void {
	const { ctx, position } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);

	ctx.fillStyle = FILL_COLOR;

	const positionY = SIZE_GRID * 0.5 * Math.sin(y * TWO_PI);
	rect(ctx, 0, positionY, 20, 1);

	ctx.restore();
}

// ─── Mio117 ──────────────────────────────────────────────────────────────────

export function drawMio117(a: AnimContext): void {
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

		ctx.rotate(angle);
		ctx.rotate((1 - Math.sin(aVal * PI)) * (PI / 2));
		ctx.translate(radO * Math.sin(angle) * 4, 0);

		const fillGrad = getFillGrad(aVal, PI);
		ctx.fillStyle = hsbToRgb(0, 0, 255, fillGrad);

		ellipse(ctx, 0, 0, 1.5, 1.5);

		ctx.restore();
	}

	ctx.restore();
}

// ─── Mio118 ──────────────────────────────────────────────────────────────────

export function drawMio118(a: AnimContext): void {
	const { ctx, position, numEl } = a;
	const y = getTime(a);

	ctx.save();
	ctx.translate(position.x, position.y);
	ctx.rotate(PI);

	for (let i = numEl + 1; i > 0; i--) {
		const aVal = getMyInter2(y, i, numEl);
		const radO = RAD3;
		const angle = (i / numEl) * PI;

		ctx.save();

		ctx.rotate(angle);
		ctx.rotate((1 - Math.sin(aVal * PI)) * (PI / 2));
		ctx.translate(radO * Math.sin(angle) * 3, 0);

		const fillGrad = getFillGrad(aVal, PI);
		ctx.fillStyle = hsbToRgb(0, 0, 255, fillGrad);

		rect(ctx, 0, 0, 15, 0.5);

		ctx.restore();
	}

	ctx.restore();
}
