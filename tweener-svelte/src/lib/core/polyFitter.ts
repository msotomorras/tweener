import { PolynomialRegression } from 'ml-regression-polynomial';
import type { Moment2D } from './types';

const DEGREE = 8;

export interface FitResult {
	coefficients: number[];
	minY: number;
	maxY: number;
	valid: boolean;
}

/** Fit a degree-8 polynomial to the data points */
export function fitPolynomial(moments: Moment2D[]): FitResult {
	if (moments.length < 3) {
		return { coefficients: new Array(DEGREE + 1).fill(0), minY: 0, maxY: 1, valid: false };
	}

	const x = moments.map((m) => m.time);
	const y = moments.map((m) => m.distance);

	try {
		const regression = new PolynomialRegression(x, y, DEGREE);
		// Map powers→coefficients into a flat array indexed by power
		const coefficients = new Array(DEGREE + 1).fill(0);
		for (let k = 0; k < regression.powers.length; k++) {
			coefficients[regression.powers[k]] = regression.coefficients[k];
		}

		// Repair: force coeff[0] = 0, adjust coeff[1] so sum = 1
		repairCoefficients(coefficients);

		const { minY, maxY } = findMinMax(coefficients);

		return { coefficients, minY, maxY, valid: true };
	} catch {
		return { coefficients: new Array(DEGREE + 1).fill(0), minY: 0, maxY: 1, valid: false };
	}
}

/** Evaluate polynomial at x */
export function solve(coefficients: number[], x: number): number {
	let y = 0;
	for (let j = 0; j < coefficients.length; j++) {
		y += coefficients[j] * Math.pow(x, j);
	}
	return y;
}

/** Force coeff[0]=0, adjust coeff[1] so all coefficients sum to 1.0 */
function repairCoefficients(coefficients: number[]): void {
	coefficients[0] = 0;
	let sum = 0;
	for (let i = 0; i < coefficients.length; i++) {
		sum += coefficients[i];
	}
	coefficients[1] += 1 - sum;
}

/** Sample the polynomial at 100 points to find min/max Y */
function findMinMax(coefficients: number[]): { minY: number; maxY: number } {
	let minY = Infinity;
	let maxY = -Infinity;
	for (let i = 0; i <= 100; i++) {
		const x = i / 100;
		const y = solve(coefficients, x);
		if (y < minY) minY = y;
		if (y > maxY) maxY = y;
	}
	return { minY, maxY };
}
