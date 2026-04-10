<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { playMode } from '$lib/stores/appState';
	import { recordingState, addStatusMessage } from '$lib/stores/recording';
	import {
		initParticleCanvas,
		spawnParticles,
		clearParticles
	} from '$lib/canvas/particleCanvas';
	import {
		initParticleRotCanvas,
		spawnParticlesRot,
		clearParticlesRot
	} from '$lib/canvas/particleRotCanvas';
	import { initIconCanvas } from '$lib/canvas/iconCanvas';
	import { get } from 'svelte/store';

	let canvasEl: HTMLCanvasElement;
	let containerEl: HTMLDivElement;
	let cleanup: (() => void) | null = null;
	let mounted = false;
	let currentMode = '';
	let canvasW = 1280;
	let canvasH = 720;

	function getCanvasSize(): { w: number; h: number } {
		if (!containerEl) return { w: 1280, h: 720 };
		return {
			w: Math.floor(containerEl.clientWidth),
			h: Math.floor(containerEl.clientHeight)
		};
	}

	onMount(() => {
		mounted = true;
		const size = getCanvasSize();
		canvasW = size.w;
		canvasH = size.h;
		initRenderer(get(playMode));

		const unsub = playMode.subscribe((mode) => {
			if (mounted && mode !== currentMode) {
				initRenderer(mode);
			}
		});

		const resizeObs = new ResizeObserver(() => {
			if (!mounted) return;
			const size = getCanvasSize();
			if (size.w !== canvasW || size.h !== canvasH) {
				canvasW = size.w;
				canvasH = size.h;
				// Force re-init with new size
				const mode = currentMode;
				currentMode = '';
				initRenderer(mode);
			}
		});
		resizeObs.observe(containerEl);

		return () => {
			unsub();
			resizeObs.disconnect();
		};
	});

	function initRenderer(mode: string) {
		if (!canvasEl || !mounted) return;
		if (mode === currentMode) return;
		currentMode = mode;

		cleanup?.();
		cleanup = null;

		const getCoeffs = () => get(recordingState).coefficients;

		if (mode === 'PARTICLES') {
			clearParticles();
			cleanup = initParticleCanvas(canvasEl, getCoeffs, canvasW, canvasH);
			spawnParticles(canvasW / 2, canvasH / 2, 30);
		} else if (mode === 'PARTICLES_ROTATE') {
			clearParticlesRot();
			cleanup = initParticleRotCanvas(canvasEl, getCoeffs, canvasW, canvasH);
			spawnParticlesRot(canvasW / 2, canvasH / 2, 30);
		} else if (mode === 'ICONS') {
			cleanup = initIconCanvas(canvasEl, getCoeffs, canvasW, canvasH);
		}
	}

	function handleClick(e: MouseEvent) {
		const rect = canvasEl.getBoundingClientRect();
		const scaleX = canvasW / rect.width;
		const scaleY = canvasH / rect.height;
		const x = (e.clientX - rect.left) * scaleX;
		const y = (e.clientY - rect.top) * scaleY;

		const mode = get(playMode);
		if (mode === 'PARTICLES') {
			spawnParticles(x, y, 30);
			addStatusMessage('Spawned 30 particles');
		} else if (mode === 'PARTICLES_ROTATE') {
			spawnParticlesRot(x, y, 30);
			addStatusMessage('Spawned 30 rotating particles');
		}
	}

	onDestroy(() => {
		mounted = false;
		cleanup?.();
	});
</script>

<div class="play-view" bind:this={containerEl}>
	<canvas
		bind:this={canvasEl}
		on:click={handleClick}
	></canvas>
</div>

<style>
	.play-view {
		flex: 1;
		display: flex;
		align-items: flex-start;
		justify-content: flex-start;
		overflow: auto;
	}
	canvas {
		display: block;
		cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20'%3E%3Cline x1='10' y1='0' x2='10' y2='20' stroke='%23666' stroke-width='1'/%3E%3Cline x1='0' y1='10' x2='20' y2='10' stroke='%23666' stroke-width='1'/%3E%3C/svg%3E") 10 10, crosshair;
	}
</style>
