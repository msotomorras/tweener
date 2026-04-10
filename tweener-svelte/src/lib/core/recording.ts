import type { Moment3D, Moment2D, Vec3 } from './types';
import { fitPolynomial, solve, type FitResult } from './polyFitter';

export interface RecordingState {
	moments3D: Moment3D[];
	moments2D: Moment2D[];
	coefficients: number[];
	valid: boolean;
	minY: number;
	maxY: number;
	editMode: boolean;
	selectedId: number;
}

export function createRecordingState(): RecordingState {
	return {
		moments3D: [],
		moments2D: [],
		coefficients: new Array(9).fill(0),
		valid: false,
		minY: 0,
		maxY: 1,
		editMode: false,
		selectedId: -1
	};
}

export function enterNewValue(state: RecordingState, pos: Vec3): void {
	state.moments3D.push({
		pos: { ...pos },
		time: performance.now()
	});
}

export function isDataValid(moments: Moment3D[]): boolean {
	if (moments.length < 10) return false;
	const first = moments[0].pos;
	const last = moments[moments.length - 1].pos;
	const dx = last.x - first.x;
	const dy = last.y - first.y;
	const dz = last.z - first.z;
	return Math.sqrt(dx * dx + dy * dy + dz * dz) > 0;
}

export function remap(state: RecordingState): void {
	const moments = state.moments3D;
	if (!isDataValid(moments)) {
		state.valid = false;
		return;
	}

	// Normalize time to [0, 1]
	const firstTime = moments[0].time;
	const lastTime = moments[moments.length - 1].time;
	const duration = lastTime - firstTime;

	// Determine orientation: which axis has most movement
	const first = moments[0].pos;
	const last = moments[moments.length - 1].pos;
	const dx = Math.abs(last.x - first.x);
	const dy = Math.abs(last.y - first.y);
	const dz = Math.abs(last.z - first.z);

	let selectOrient = 0; // X
	if (dx === 0 || dy > dx) selectOrient = 1; // Y
	if (dx === 0 && dy === 0) selectOrient = 2; // Z

	// Project onto trajectory line
	const dir = { x: last.x - first.x, y: last.y - first.y, z: last.z - first.z };
	const dirMag = Math.sqrt(dir.x * dir.x + dir.y * dir.y + dir.z * dir.z);

	state.moments2D = [];

	let minDist = Infinity,
		maxDist = -Infinity;
	const distances: number[] = [];

	for (const m of moments) {
		const t = duration > 0 ? (m.time - firstTime) / duration : 0;

		// Project position onto direction vector
		let dist: number;
		if (selectOrient === 0) {
			dist = m.pos.x - first.x;
		} else if (selectOrient === 1) {
			dist = m.pos.y - first.y;
		} else {
			dist = m.pos.z - first.z;
		}

		distances.push(dist);
		if (dist < minDist) minDist = dist;
		if (dist > maxDist) maxDist = dist;
	}

	// Normalize distances to [0, 1]
	const range = maxDist - minDist;
	for (let i = 0; i < moments.length; i++) {
		const t = duration > 0 ? (moments[i].time - firstTime) / duration : 0;
		const d = range > 0 ? (distances[i] - minDist) / range : 0;
		state.moments2D.push({ time: t, distance: d });
	}

	// Fit polynomial
	const fit = fitPolynomial(state.moments2D);
	state.coefficients = fit.coefficients;
	state.minY = fit.minY;
	state.maxY = fit.maxY;
	state.valid = fit.valid;
}

export function executeFitter(state: RecordingState): void {
	const fit = fitPolynomial(state.moments2D);
	state.coefficients = fit.coefficients;
	state.minY = fit.minY;
	state.maxY = fit.maxY;
	state.valid = fit.valid;
}

/** Delete a data point by index (won't delete first or last) */
export function deletePoint(state: RecordingState, index: number): boolean {
	if (index <= 0 || index >= state.moments2D.length - 1) return false;
	if (state.moments2D.length <= 10) return false;
	state.moments2D.splice(index, 1);
	executeFitter(state);
	return true;
}

/** Update a point's Y value during editing */
export function updatePointY(state: RecordingState, index: number, deltaY: number): void {
	if (index < 0 || index >= state.moments2D.length) return;
	state.moments2D[index].distance -= deltaY;
	// Re-normalize Y values
	let minY = Infinity,
		maxY = -Infinity;
	for (const m of state.moments2D) {
		if (m.distance < minY) minY = m.distance;
		if (m.distance > maxY) maxY = m.distance;
	}
	const range = maxY - minY;
	if (range > 0) {
		for (const m of state.moments2D) {
			m.distance = (m.distance - minY) / range;
		}
	}
}
