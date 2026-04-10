import type { ParticleRot } from '$lib/core/types';
import { solve } from '$lib/core/polyFitter';
import { COLORS } from './canvasUtils';

const ACCELERATION = 0.01;

let particles: ParticleRot[] = [];

export function spawnParticlesRot(x: number, y: number, count: number): void {
	for (let i = 0; i < count; i++) {
		particles.push({
			origin: { x, y },
			location: { x, y },
			radius: i * 10 + (Math.random() - 0.5) * 10,
			startAngle: Math.random() * Math.PI * 2,
			lifespan: 1.0,
			acceleration: ACCELERATION,
			invert: i % 2 === 0
		});
	}
}

export function clearParticlesRot(): void {
	particles = [];
}

export function initParticleRotCanvas(
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

		// Show helper text when no particles
		if (particles.length === 0) {
			ctx.font = '14px Consolas, monospace';
			ctx.fillStyle = 'rgba(255,255,255,0.3)';
			ctx.textAlign = 'center';
			ctx.fillText('Click here', width / 2, height / 2);
			ctx.textAlign = 'left';
		}

		for (let i = particles.length - 1; i >= 0; i--) {
			const p = particles[i];
			const progress = 1 - p.lifespan;
			let s = hasValidCoeffs ? solve(coefficients, progress) : progress;
			if (p.invert) s = 1 - s;

			const angle = s * Math.PI * 2 - p.startAngle;
			p.location.x = p.origin.x + Math.cos(angle) * p.radius;
			p.location.y = p.origin.y + Math.sin(angle) * p.radius;

			const alpha = p.lifespan;
			ctx.fillStyle = `rgba(255,255,255,${alpha.toFixed(3)})`;
			ctx.fillRect(p.location.x - 2, p.location.y - 2, 4, 4);

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
