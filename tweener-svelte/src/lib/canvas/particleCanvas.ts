import { createNoise2D } from 'simplex-noise';
import type { Particle, Vec2 } from '$lib/core/types';
import { solve } from '$lib/core/polyFitter';
import { COLORS } from './canvasUtils';

const noise2D = createNoise2D();
const ACCELERATION = 0.01;

let particles: Particle[] = [];
let frameCount = 0;

export function spawnParticles(x: number, y: number, count: number): void {
	for (let i = 0; i < count; i++) {
		const a =
			((noise2D(frameCount * 0.001 + i * 0.1, 0) + 1) / 2) * Math.PI * 2 * 16;
		const dist = 150 + Math.random() * 150;
		const target: Vec2 = {
			x: x + Math.cos(a) * dist,
			y: y + Math.sin(a) * dist
		};
		particles.push({
			origin: { x, y },
			target,
			location: { x, y },
			lifespan: 1.0,
			acceleration: ACCELERATION
		});
	}
}

export function clearParticles(): void {
	particles = [];
}

export function initParticleCanvas(
	canvas: HTMLCanvasElement,
	getCoefficients: () => number[],
	width: number,
	height: number
): () => void {
	const ctx = canvas.getContext('2d')!;
	let animId: number;

	// Set canvas size once
	const dpr = window.devicePixelRatio || 1;
	canvas.width = width * dpr;
	canvas.height = height * dpr;
	canvas.style.width = `${width}px`;
	canvas.style.height = `${height}px`;

	function draw() {
		ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

		ctx.fillStyle = COLORS.b1;
		ctx.fillRect(0, 0, width, height);

		const coefficients = getCoefficients();
		const hasValidCoeffs = coefficients.some((c) => c !== 0);
		frameCount++;

		// Show helper text when no particles
		if (particles.length === 0) {
			ctx.font = '14px Consolas, monospace';
			ctx.fillStyle = 'rgba(255,255,255,0.3)';
			ctx.textAlign = 'center';
			ctx.fillText('Click here', width / 2, height / 2);
			ctx.textAlign = 'left';
		}

		// Update and draw particles
		for (let i = particles.length - 1; i >= 0; i--) {
			const p = particles[i];
			const progress = 1 - p.lifespan;
			const s = hasValidCoeffs ? solve(coefficients, progress) : progress;

			p.location.x = p.origin.x + (p.target.x - p.origin.x) * s;
			p.location.y = p.origin.y + (p.target.y - p.origin.y) * s;

			// Draw
			const alpha = p.lifespan;
			ctx.fillStyle = `rgba(255,255,255,${alpha.toFixed(3)})`;
			ctx.fillRect(p.location.x - 2, p.location.y - 2, 4, 4);

			// Lifespan text
			ctx.font = '9px Consolas, monospace';
			ctx.fillStyle = `rgba(255,255,255,${(alpha * 0.7).toFixed(3)})`;
			ctx.fillText(p.lifespan.toFixed(2), p.location.x + 5, p.location.y - 3);

			p.lifespan -= p.acceleration;
			if (p.lifespan < 0) {
				particles.splice(i, 1);
			}
		}

		animId = requestAnimationFrame(draw);
	}

	animId = requestAnimationFrame(draw);
	return () => cancelAnimationFrame(animId);
}
