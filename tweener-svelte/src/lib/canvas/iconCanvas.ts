import { solve } from '$lib/core/polyFitter';
import { COLORS } from './canvasUtils';
import { SIZE_GRID } from '$lib/icons/animation';
import { ICON_REGISTRY } from '$lib/icons/registry';
import type { AnimContext } from '$lib/core/types';

export function initIconCanvas(
	canvas: HTMLCanvasElement,
	getCoefficients: () => number[],
	width: number,
	height: number
): () => void {
	const ctx = canvas.getContext('2d')!;
	let animId: number;

	const cellSize = SIZE_GRID * 2.5;
	const halfCell = cellSize / 2;
	const elementsPerRow = Math.floor(width / cellSize);
	const startX = SIZE_GRID * 1.5;
	const startY = SIZE_GRID * 1.5;

	function getGridPos(index: number): { x: number; y: number } {
		const ix = index % elementsPerRow;
		const iy = Math.floor(index / elementsPerRow);
		return {
			x: startX + ix * cellSize,
			y: startY + iy * cellSize
		};
	}

	const numRows = Math.ceil(ICON_REGISTRY.length / elementsPerRow);
	const neededHeight = Math.max(height, startY + numRows * cellSize + SIZE_GRID);

	const dpr = window.devicePixelRatio || 1;
	canvas.width = width * dpr;
	canvas.height = neededHeight * dpr;
	canvas.style.width = `${width}px`;
	canvas.style.height = `${neededHeight}px`;

	// Offscreen canvas for per-icon rendering — avoids clip() issues
	const offscreen = document.createElement('canvas');
	offscreen.width = Math.ceil(cellSize * dpr);
	offscreen.height = Math.ceil(cellSize * dpr);
	const offCtx = offscreen.getContext('2d')!;

	function draw() {
		ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
		ctx.fillStyle = COLORS.b1;
		ctx.fillRect(0, 0, width, neededHeight);

		const coefficients = getCoefficients();
		const now = performance.now();

		const hasValidCoeffs = coefficients.some((c) => c !== 0);
		const polyFn = hasValidCoeffs
			? (x: number) => solve(coefficients, x)
			: (x: number) => x;

		for (let i = 0; i < ICON_REGISTRY.length; i++) {
			const icon = ICON_REGISTRY[i];
			const pos = getGridPos(i);

			// Clear the offscreen canvas
			offCtx.setTransform(1, 0, 0, 1, 0, 0);
			offCtx.clearRect(0, 0, offscreen.width, offscreen.height);

			// Set up DPR scaling and center the drawing origin
			offCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
			offCtx.translate(halfCell, halfCell);

			const animCtx: AnimContext = {
				ctx: offCtx,
				position: { x: 0, y: 0 },
				numEl: icon.numEl,
				polyFn,
				timeMs: now,
				sizeGrid: SIZE_GRID
			};

			try {
				icon.draw(animCtx);
			} catch {
				// Skip broken icons
			}

			// Composite the offscreen icon onto the main canvas
			ctx.drawImage(
				offscreen,
				0,
				0,
				offscreen.width,
				offscreen.height,
				pos.x - halfCell,
				pos.y - halfCell,
				cellSize,
				cellSize
			);
		}

		animId = requestAnimationFrame(draw);
	}

	animId = requestAnimationFrame(draw);
	return () => cancelAnimationFrame(animId);
}
