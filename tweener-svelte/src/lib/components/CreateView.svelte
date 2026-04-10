<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { scaleLinear } from 'd3-scale';
	import { line as d3Line } from 'd3-shape';
	import { recordingState, isRecording, addStatusMessage } from '$lib/stores/recording';
	import { isEditMode, editInput } from '$lib/stores/appState';
	import { SoundInput } from '$lib/core/sound';
	import {
		enterNewValue,
		remap,
		createRecordingState,
		updatePointY,
		deletePoint,
		executeFitter
	} from '$lib/core/recording';
	import { solve } from '$lib/core/polyFitter';
	import { get } from 'svelte/store';

	let containerEl: HTMLDivElement;
	let svgEl: SVGSVGElement;
	let soundInput = new SoundInput();
	let soundAnimId: number;
	let frameCount = 0;
	let isDrawing = false;

	// Responsive dimensions
	let width = 1280;
	let height = 720;

	$: marginX = width * 0.1;
	$: marginY = height * 0.1;

	$: xScale = scaleLinear().domain([0, 1]).range([marginX, width - marginX]);
	$: yScale = scaleLinear().domain([0, 1]).range([height - marginY, marginY]);

	// X axis labels
	$: xLabels = Array.from({ length: 11 }, (_, i) => {
		const val = i / 10;
		return { x: xScale(val), y: yScale(0) + 16, text: val.toFixed(1) };
	});

	// Y axis labels
	$: yLabels = Array.from({ length: 6 }, (_, i) => {
		const norm = i / 5;
		const yVal =
			$recordingState.valid
				? $recordingState.minY + ($recordingState.maxY - $recordingState.minY) * norm
				: norm;
		return {
			x: xScale(0) - 10,
			y: yScale(norm) + 3,
			text: $recordingState.valid ? yVal.toFixed(2) : norm.toFixed(1)
		};
	});

	// Curve path and gradient stops (slope-based color)
	$: curveData = (() => {
		if (!$recordingState.valid) return { path: '', stops: [] as { offset: string; color: string }[] };

		const coeffs = $recordingState.coefficients;
		const range = $recordingState.maxY - $recordingState.minY;
		const numPts = 200;

		// Sample points
		const pts: { x: number; y: number; slope: number }[] = [];
		for (let i = 0; i <= numPts; i++) {
			const t = i / numPts;
			const val = solve(coeffs, t);
			const yNorm = range > 0 ? (val - $recordingState.minY) / range : 0;
			pts.push({ x: t, y: yNorm, slope: 0 });
		}

		// Compute slopes via finite differences
		let maxSlope = 0;
		for (let i = 0; i < pts.length; i++) {
			let slope: number;
			if (i === 0) {
				slope = Math.abs(pts[1].y - pts[0].y) * numPts;
			} else if (i === pts.length - 1) {
				slope = Math.abs(pts[i].y - pts[i - 1].y) * numPts;
			} else {
				slope = Math.abs(pts[i + 1].y - pts[i - 1].y) * numPts * 0.5;
			}
			pts[i].slope = slope;
			if (slope > maxSlope) maxSlope = slope;
		}

		// Build SVG path
		const lineGen = d3Line<{ x: number; y: number }>()
			.x((d) => xScale(d.x))
			.y((d) => yScale(d.y));
		const path = lineGen(pts) || '';

		// Build gradient stops (sample every 10th point for performance)
		const stops: { offset: string; color: string }[] = [];
		for (let i = 0; i <= numPts; i += 5) {
			const pt = pts[i];
			const norm = maxSlope > 0 ? pt.slope / maxSlope : 0;
			stops.push({
				offset: `${(pt.x * 100).toFixed(1)}%`,
				color: slopeColor(norm)
			});
		}

		return { path, stops };
	})();

	function slopeColor(t: number): string {
		// green (flat) → cyan (medium) → blue (steep)
		if (t < 0.5) {
			const s = t / 0.5;
			const r = Math.round(0 + (0 - 0) * s);
			const g = Math.round(200 + (255 - 200) * s);
			const b = Math.round(80 + (220 - 80) * s);
			return `rgb(${r},${g},${b})`;
		} else {
			const s = (t - 0.5) / 0.5;
			const r = Math.round(0 + (80 - 0) * s);
			const g = Math.round(255 + (140 - 255) * s);
			const b = Math.round(220 + (255 - 220) * s);
			return `rgb(${r},${g},${b})`;
		}
	}

	// Data points for rendering
	$: dataPoints = $recordingState.moments2D.map((m, i) => ({
		x: xScale(m.time),
		y: yScale(m.distance),
		selected: $isEditMode && i === $recordingState.selectedId,
		index: i
	}));

	// Selected point info
	$: selectedPoint = (() => {
		const id = $recordingState.selectedId;
		if (!$isEditMode || id < 0 || id >= $recordingState.moments2D.length) return null;
		const m = $recordingState.moments2D[id];
		return {
			cx: xScale(m.time),
			cy: yScale(m.distance),
			label: `(${m.time.toFixed(3)}, ${m.distance.toFixed(3)})`
		};
	})();

	// ── Resize handling ──
	onMount(() => {
		updateSize();
		const obs = new ResizeObserver(() => updateSize());
		obs.observe(containerEl);
		return () => obs.disconnect();
	});

	function updateSize() {
		if (!containerEl) return;
		width = containerEl.clientWidth;
		height = containerEl.clientHeight;
	}

	// ── SVG coordinate conversion ──
	function getSvgPos(e: MouseEvent): { x: number; y: number } {
		const rect = svgEl.getBoundingClientRect();
		return {
			x: ((e.clientX - rect.left) / rect.width) * width,
			y: ((e.clientY - rect.top) / rect.height) * height
		};
	}

	function getDataPos(e: MouseEvent): { mx: number; my: number } {
		const pos = getSvgPos(e);
		return {
			mx: Math.max(0, Math.min(1, xScale.invert(pos.x))),
			my: Math.max(0, Math.min(1, yScale.invert(pos.y)))
		};
	}

	// ── Mouse handlers ──
	function handleMouseDown(e: MouseEvent) {
		if (e.button !== 0) return;
		isDrawing = true;

		const state = get(recordingState);
		const edit = get(isEditMode);
		const pos = getSvgPos(e);

		if (edit && state.valid) {
			// Find closest point
			let minDist = 25;
			let closestId = -1;
			for (let i = 0; i < state.moments2D.length; i++) {
				const m = state.moments2D[i];
				const px = xScale(m.time);
				const py = yScale(m.distance);
				const d = Math.sqrt((pos.x - px) ** 2 + (pos.y - py) ** 2);
				if (d < minDist) {
					minDist = d;
					closestId = i;
				}
			}
			recordingState.update((s) => {
				s.selectedId = closestId;
				return s;
			});
			return;
		}

		const input = get(editInput);
		if (input === 'MOUSE') {
			const newState = createRecordingState();
			recordingState.set(newState);
			isRecording.set(true);
			frameCount = 0;
			addStatusMessage('Recording started (mouse)');
		} else if (input === 'SOUND') {
			startSoundRecording();
		}
	}

	function handleMouseMove(e: MouseEvent) {
		const recording = get(isRecording);
		const state = get(recordingState);
		const edit = get(isEditMode);
		const pos = getSvgPos(e);

		if (recording && !edit && get(editInput) === 'MOUSE') {
			frameCount++;
			if (frameCount > 5) {
				recordingState.update((s) => {
					enterNewValue(s, { x: pos.x, y: pos.y, z: 0 });
					return s;
				});
			}
		}

		if (edit && state.selectedId >= 0 && e.buttons === 1) {
			const rect = svgEl.getBoundingClientRect();
			const deltaY = (e.movementY / rect.height) * (1 / 0.8);
			recordingState.update((s) => {
				updatePointY(s, s.selectedId, deltaY);
				executeFitter(s);
				return s;
			});
		}
	}

	function handleMouseUp() {
		isDrawing = false;
		const recording = get(isRecording);
		if (recording) {
			stopSoundRecording();
		}
		recordingState.update((s) => {
			s.selectedId = -1;
			return s;
		});
	}

	// ── Sound input ──
	$: if ($editInput === 'SOUND' && !soundInput.active) {
		startSound();
	} else if ($editInput !== 'SOUND' && soundInput.active) {
		soundInput.stop();
	}

	async function startSound() {
		const ok = await soundInput.start();
		if (ok) {
			addStatusMessage('Microphone active — click and hold to record');
			pollSound();
		} else {
			addStatusMessage('Microphone access denied');
		}
	}

	function pollSound() {
		if (!soundInput.active) return;
		const recording = get(isRecording);
		if (recording) {
			const vol = soundInput.getLevel();
			recordingState.update((s) => {
				enterNewValue(s, { x: vol, y: 0, z: 0 });
				return s;
			});
		}
		soundAnimId = requestAnimationFrame(pollSound);
	}

	function startSoundRecording() {
		const newState = createRecordingState();
		recordingState.set(newState);
		isRecording.set(true);
		addStatusMessage('Recording from microphone — release to stop');
	}

	function stopSoundRecording() {
		isRecording.set(false);
		recordingState.update((s) => {
			remap(s);
			return s;
		});
		const state = get(recordingState);
		if (state.valid) {
			addStatusMessage('Recording complete - polynomial fitted');
		} else {
			addStatusMessage('Recording invalid - need more data points');
		}
	}

	function handleKeyDown(e: KeyboardEvent) {
		if (e.key === 's' || e.key === 'S') {
			const state = get(recordingState);
			const edit = get(isEditMode);
			if (edit && state.selectedId >= 0) {
				recordingState.update((s) => {
					const ok = deletePoint(s, s.selectedId);
					if (ok) s.selectedId = -1;
					return s;
				});
				addStatusMessage('Point deleted');
			}
		}
	}

	onDestroy(() => {
		soundInput.stop();
		if (soundAnimId) cancelAnimationFrame(soundAnimId);
	});
</script>

<svelte:window on:keydown={handleKeyDown} />

<div class="create-view" bind:this={containerEl}>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<svg
		bind:this={svgEl}
		viewBox="0 0 {width} {height}"
		preserveAspectRatio="xMidYMid meet"
		class="chart"
		class:drawing={isDrawing}
		on:mousedown={handleMouseDown}
		on:mousemove={handleMouseMove}
		on:mouseup={handleMouseUp}
	>
	
		<!-- X axis labels -->
		<g class="axis-labels">
			{#each xLabels as label}
				<text x={label.x} y={label.y} text-anchor="middle">{label.text}</text>
			{/each}
		</g>

		<!-- Y axis labels -->
		<g class="axis-labels">
			{#each yLabels as label}
				<text x={label.x} y={label.y} text-anchor="end">{label.text}</text>
			{/each}
		</g>

		<!-- Curve with slope-based gradient -->
		{#if $recordingState.valid && curveData.path}
			<defs>
				<linearGradient id="curve-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
					{#each curveData.stops as stop}
						<stop offset={stop.offset} stop-color={stop.color} />
					{/each}
				</linearGradient>
			</defs>
			<path
				d={curveData.path}
				fill="none"
				stroke="url(#curve-gradient)"
				stroke-width="2.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		{/if}

		<!-- Data points -->
		<g class="data-points">
			{#each dataPoints as pt}
				{#if pt.selected}
					<rect
						x={pt.x - 4}
						y={pt.y - 4}
						width="8"
						height="8"
						class="point-selected"
					/>
				{:else}
					<rect
						x={pt.x - 2}
						y={pt.y - 2}
						width="4"
						height="4"
						class="point"
					/>
				{/if}
			{/each}
		</g>

		<!-- Selected point indicator -->
		{#if selectedPoint}
			<circle
				cx={selectedPoint.cx}
				cy={selectedPoint.cy}
				r="12"
				fill="none"
				stroke="rgb(200,200,200)"
				stroke-width="1"
			/>
			<text
				x={selectedPoint.cx + 15}
				y={selectedPoint.cy - 5}
				class="selected-label"
			>{selectedPoint.label}</text>
		{/if}

		<!-- Helper text
		{#if !$recordingState.valid && !$isRecording}
			<text x={width / 2} y={height / 2} class="helper-text" text-anchor="middle">
				{#if $editInput === 'MOUSE'}
					Click and drag to draw a curve
				{:else}
					Press R to start recording from microphone
				{/if}
			</text>
		{:else if $isRecording}
			<text x={width / 2} y={height - 40} class="recording-text" text-anchor="middle">
				{#if $editInput === 'MOUSE'}
					Drawing... release to finish
				{:else}
					Recording... press R to stop
				{/if}
			</text>
		{/if} -->
	</svg>

	{#if $editInput === 'SOUND' && soundInput.active}
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<button
			class="mic-record-btn"
			class:recording={$isRecording}
			aria-label={$isRecording ? 'Recording — release to stop' : 'Hold to record'}
			on:touchstart|preventDefault={startSoundRecording}
			on:touchend|preventDefault={stopSoundRecording}
			on:mousedown={startSoundRecording}
			on:mouseup={stopSoundRecording}
		>
			<span class="mic-icon">{$isRecording ? '●' : '○'}</span>
			<span class="mic-label">{$isRecording ? 'RECORDING' : 'HOLD TO RECORD'}</span>
		</button>
	{/if}
</div>

<style>
	.create-view {
		flex: 1;
		display: flex;
		overflow: hidden;
		position: relative;
	}
	.chart {
		width: 100%;
		height: 100%;
		background: rgb(20, 20, 20);
		user-select: none;
		-webkit-user-select: none;
		cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20'%3E%3Cline x1='10' y1='0' x2='10' y2='20' stroke='%23666' stroke-width='1'/%3E%3Cline x1='0' y1='10' x2='20' y2='10' stroke='%23666' stroke-width='1'/%3E%3C/svg%3E")
			10 10,
			crosshair;
	}
	.chart.drawing {
		cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20'%3E%3Cline x1='10' y1='0' x2='10' y2='20' stroke='%23fff' stroke-width='1'/%3E%3Cline x1='0' y1='10' x2='20' y2='10' stroke='%23fff' stroke-width='1'/%3E%3C/svg%3E")
			10 10,
			crosshair;
	}
	.axis-labels text {
		font: 9px Consolas, monospace;
		fill: rgb(160, 160, 160);
	}
	.point {
		fill: rgb(255, 255, 255);
	}
	.point-selected {
		fill: rgb(255, 255, 255);
	}
	.selected-label {
		font: 10px Consolas, monospace;
		fill: rgb(255, 255, 255);
	}
	.helper-text {
		font: 14px Consolas, monospace;
		fill: rgba(255, 255, 255, 0.25);
	}
	.recording-text {
		font: 12px Consolas, monospace;
		fill: rgba(255, 255, 255, 0.35);
	}

	.mic-record-btn {
		display: none;
	}

	@media (max-width: 767px) {
		.mic-record-btn {
			display: flex;
			position: absolute;
			top: 12px;
			right: 12px;
			align-items: center;
			gap: 6px;
			padding: 8px 14px;
			background: rgba(255, 255, 255, 0.08);
			border: 1px solid rgba(255, 255, 255, 0.15);
			border-radius: 6px;
			cursor: pointer;
			-webkit-user-select: none;
			user-select: none;
			touch-action: none;
		}

		.mic-record-btn.recording {
			background: rgba(255, 60, 60, 0.15);
			border-color: rgba(255, 60, 60, 0.4);
		}

		.mic-icon {
			font-size: 14px;
			color: rgba(255, 255, 255, 0.6);
		}

		.mic-record-btn.recording .mic-icon {
			color: rgb(255, 80, 80);
		}

		.mic-label {
			font-family: var(--font-mono);
			font-size: 9px;
			letter-spacing: 1px;
			color: rgba(255, 255, 255, 0.5);
		}
	}
</style>
