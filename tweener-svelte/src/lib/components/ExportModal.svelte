<script lang="ts">
	import { showExport, exportLang } from '$lib/stores/appState';
	import { recordingState } from '$lib/stores/recording';
	import { generateExport, getLanguageLabel } from '$lib/core/exportPolynom';
	import { solve } from '$lib/core/polyFitter';
	import { addStatusMessage } from '$lib/stores/recording';
	import type { ExportLang } from '$lib/core/types';

	const languages: ExportLang[] = ['HLSL', 'GLSL', 'JAVA', 'JAVASCRIPT', 'CPP', 'CSHARP'];

	$: code = generateExport($recordingState.coefficients, $exportLang);

	async function copyToClipboard() {
		try {
			await navigator.clipboard.writeText(code);
			addStatusMessage(`Copied ${getLanguageLabel($exportLang)} code to clipboard`);
		} catch {
			addStatusMessage('Failed to copy to clipboard');
		}
	}

	function close() {
		showExport.set(false);
	}

	// Mini curve preview
	let previewCanvas: HTMLCanvasElement;

	$: if (previewCanvas && $recordingState.valid) {
		drawPreview(previewCanvas, $recordingState.coefficients);
	}

	function drawPreview(canvas: HTMLCanvasElement, coefficients: number[]) {
		const ctx = canvas.getContext('2d');
		if (!ctx) return;
		const w = 240;
		const h = 80;
		canvas.width = w;
		canvas.height = h;

		ctx.fillStyle = 'rgb(25,25,25)';
		ctx.fillRect(0, 0, w, h);

		// Find min/max
		let minY = Infinity,
			maxY = -Infinity;
		for (let i = 0; i <= 100; i++) {
			const val = solve(coefficients, i / 100);
			if (val < minY) minY = val;
			if (val > maxY) maxY = val;
		}
		const range = maxY - minY || 1;

		// Draw curve
		ctx.strokeStyle = 'rgb(255, 255, 255)';
		ctx.lineWidth = 1.5;
		ctx.beginPath();
		for (let i = 0; i <= w; i++) {
			const x = i / w;
			const val = solve(coefficients, x);
			const yNorm = (val - minY) / range;
			const py = h - 8 - yNorm * (h - 16);
			if (i === 0) ctx.moveTo(i, py);
			else ctx.lineTo(i, py);
		}
		ctx.stroke();
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<div class="overlay" on:click|self={close} role="dialog" aria-label="Export polynomial" aria-modal="true">
	<div class="modal">
		<div class="header">
			<span class="title">EXPORT</span>
			<button class="close-btn" on:click={close} aria-label="Close export">x</button>
		</div>

		<div class="preview-section">
			<canvas bind:this={previewCanvas} width="240" height="80"></canvas>
		</div>

		<div class="lang-row" role="radiogroup" aria-label="Language">
			{#each languages as lang}
				<button
					class="lang-btn"
					class:active={$exportLang === lang}
					role="radio"
					aria-checked={$exportLang === lang}
					on:click={() => exportLang.set(lang)}
				>
					{getLanguageLabel(lang)}
				</button>
			{/each}
		</div>

		<div class="code-container">
			<pre class="code-block"><code>{code}</code></pre>
		</div>

		<button class="copy-btn" on:click={copyToClipboard}>
			Copy to Clipboard
		</button>
	</div>
</div>

<style>
	.overlay {
		position: fixed;
		inset: 0;
		background: rgba(0, 0, 0, 0.6);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 100;
	}
	.modal {
		background: rgb(22, 22, 22);
		border: 1px solid rgb(50, 50, 50);
		width: 500px;
		max-width: 90vw;
		display: flex;
		flex-direction: column;
		gap: 12px;
		padding: 16px;
	}
	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.title {
		font-size: 11px;
		color: rgb(255, 255, 255);
		letter-spacing: 2px;
	}
	.close-btn {
		background: none;
		color: rgb(110, 110, 110);
		font-size: 14px;
		padding: 2px 6px;
	}
	.close-btn:hover {
		color: rgb(255, 255, 255);
	}
	.preview-section {
		border: 1px solid rgb(35, 35, 35);
	}
	.preview-section canvas {
		display: block;
		width: 100%;
		height: 80px;
	}
	.lang-row {
		display: flex;
		gap: 4px;
		flex-wrap: wrap;
	}
	.lang-btn {
		background: rgb(30, 30, 30);
		color: rgb(100, 100, 100);
		font-size: 9px;
		padding: 3px 8px;
		transition: all 0.15s;
	}
	.lang-btn:hover {
		color: rgb(180, 180, 180);
	}
	.lang-btn.active {
		color: rgb(255, 255, 255);
		background: rgb(35, 35, 35);
		border: 1px solid rgb(255, 255, 255);
	}
	.code-container {
		background: rgb(15, 15, 15);
		border: 1px solid rgb(35, 35, 35);
		padding: 12px;
		max-height: 200px;
		overflow: auto;
	}
	.code-block {
		font-size: 10px;
		line-height: 1.5;
		color: rgb(200, 200, 200);
		white-space: pre-wrap;
		word-break: break-all;
		margin: 0;
	}
	.copy-btn {
		background: rgb(255, 255, 255);
		color: rgb(10, 10, 10);
		font-size: 10px;
		padding: 8px;
		font-weight: 600;
		letter-spacing: 1px;
		transition: opacity 0.15s;
	}
	.copy-btn:hover {
		opacity: 0.85;
	}
</style>
