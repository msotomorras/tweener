/**
 * Convert HSB (0-255 range for all channels) to CSS rgb() string.
 * Processing uses HSB with range 0-255 for hue, saturation, brightness.
 */
export function hsbToRgb(h: number, s: number, b: number, a = 255): string {
	const hNorm = (h / 255) * 360;
	const sNorm = s / 255;
	const bNorm = b / 255;

	const c = bNorm * sNorm;
	const x = c * (1 - Math.abs(((hNorm / 60) % 2) - 1));
	const m = bNorm - c;

	let r1 = 0,
		g1 = 0,
		b1 = 0;

	if (hNorm < 60) {
		r1 = c;
		g1 = x;
	} else if (hNorm < 120) {
		r1 = x;
		g1 = c;
	} else if (hNorm < 180) {
		g1 = c;
		b1 = x;
	} else if (hNorm < 240) {
		g1 = x;
		b1 = c;
	} else if (hNorm < 300) {
		r1 = x;
		b1 = c;
	} else {
		r1 = c;
		b1 = x;
	}

	const r = Math.round((r1 + m) * 255);
	const g = Math.round((g1 + m) * 255);
	const bOut = Math.round((b1 + m) * 255);

	if (a < 255) {
		return `rgba(${r},${g},${bOut},${(a / 255).toFixed(3)})`;
	}
	return `rgb(${r},${g},${bOut})`;
}

/** Color constants — dark theme */
export const COLORS = {
	b1: 'rgb(20,20,20)', // dark background
	b2: 'rgb(50,50,50)', // border / grid
	b3: 'rgb(140,140,140)', // coordinate labels
	b4: 'rgb(255,255,255)', // light (data points, text)
	h1: 'rgb(200,72,60)', // accent coral
	h2: 'rgb(60,100,210)', // accent blue
	fill: 'rgb(255,255,255)' // light fill for shapes
};

/** Lerp between two rgb colors. Returns CSS string. */
export function lerpColor(
	r1: number,
	g1: number,
	b1: number,
	r2: number,
	g2: number,
	b2: number,
	t: number
): string {
	const r = Math.round(r1 + (r2 - r1) * t);
	const g = Math.round(g1 + (g2 - g1) * t);
	const b = Math.round(b1 + (b2 - b1) * t);
	return `rgb(${r},${g},${b})`;
}

/** Animated gradient color for the curve: green → cyan → blue */
export function getCurveColor(t: number): string {
	// Green: rgb(0, 200, 80) → Cyan: rgb(0, 255, 220) → Blue: rgb(80, 140, 255)
	if (t < 0.5) {
		const st = t / 0.5;
		return lerpColor(0, 200, 80, 0, 255, 220, st);
	} else {
		const st = (t - 0.5) / 0.5;
		return lerpColor(0, 255, 220, 80, 140, 255, st);
	}
}

export function clamp(val: number, min: number, max: number): number {
	return Math.min(max, Math.max(min, val));
}

/** Parse a CSS rgb/rgba string into [r, g, b] components */
export function parseRgb(color: string): [number, number, number] {
	const match = color.match(/\d+/g);
	if (!match) return [255, 255, 255];
	return [parseInt(match[0]), parseInt(match[1]), parseInt(match[2])];
}
