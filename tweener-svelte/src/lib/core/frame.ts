import type { Vec2, FrameConfig } from './types';
import { clamp } from '$lib/canvas/canvasUtils';

export class Frame {
	x: number;
	y: number;
	w: number;
	h: number;
	perc: number;

	constructor(x: number, y: number, w: number, h: number, perc = 0.1) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.perc = perc;
	}

	get xMin(): number {
		return this.w * this.perc;
	}
	get xMax(): number {
		return this.w * (1 - this.perc);
	}
	get yMin(): number {
		return this.h * this.perc;
	}
	get yMax(): number {
		return this.h * (1 - this.perc);
	}

	/** Convert pixel position (relative to frame) to normalized [0,1] */
	pixelToMapped(px: number, py: number): Vec2 {
		return {
			x: clamp(this.map(px, this.xMin, this.xMax, 0, 1), 0, 1),
			y: clamp(this.map(py, this.yMax, this.yMin, 0, 1), 0, 1) // Y inverted
		};
	}

	/** Convert normalized [0,1] to pixel position (relative to frame) */
	mappedToPixel(mx: number, my: number): Vec2 {
		return {
			x: this.map(mx, 0, 1, this.xMin, this.xMax),
			y: this.map(my, 0, 1, this.yMax, this.yMin) // Y inverted
		};
	}

	private map(val: number, inMin: number, inMax: number, outMin: number, outMax: number): number {
		return outMin + ((val - inMin) / (inMax - inMin)) * (outMax - outMin);
	}
}
