<script lang="ts">
	import { onMount } from 'svelte';

	let show = false;

	onMount(() => {
		const seen = localStorage.getItem('nextone110-welcome');
		if (!seen) {
			show = true;
		}
	});

	function dismiss() {
		show = false;
		localStorage.setItem('nextone110-welcome', '1');
	}
</script>

{#if show}
	<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
	<div class="overlay" on:click|self={dismiss} role="dialog" aria-label="Welcome" aria-modal="true">
		<div class="modal">
			<div class="header">
				<span class="title">NEXTONE110</span>
				<button class="close-btn" on:click={dismiss} aria-label="Close">x</button>
			</div>

			<p class="subtitle">Gesture to Polynomial</p>

			<div class="steps">
				<div class="step">
					<div class="step-num">1</div>
					<div class="step-content">
						<span class="step-label">CREATE</span>
						<p>Draw a gesture with your mouse or record sound from your microphone. Your motion is captured and fitted to a degree-8 polynomial curve — a custom easing function shaped by your body.</p>
					</div>
				</div>

				<div class="connector"></div>

				<div class="step">
					<div class="step-num">2</div>
					<div class="step-content">
						<span class="step-label">PLAY</span>
						<p>Watch how your curve drives motion. Particles burst and drift following your easing. 118 animated icons loop with your polynomial as their timing function — every movement shaped by your gesture.</p>
					</div>
				</div>

				<div class="connector"></div>

				<div class="step">
					<div class="step-num">3</div>
					<div class="step-content">
						<span class="step-label">EXPORT</span>
						<p>Copy your polynomial as code in GLSL, HLSL, JavaScript, Java, C++, or C#. Use it as a custom easing function in your own projects.</p>
					</div>
				</div>
			</div>

			<div class="diagram">
				<div class="diagram-box">
					<span class="diagram-icon">~</span>
					<span>gesture</span>
				</div>
				<span class="diagram-arrow">&rarr;</span>
				<div class="diagram-box">
					<span class="diagram-icon">&fnof;</span>
					<span>polynomial</span>
				</div>
				<span class="diagram-arrow">&rarr;</span>
				<div class="diagram-box">
					<span class="diagram-icon">&lt;/&gt;</span>
					<span>code</span>
				</div>
			</div>

			<button class="start-btn" on:click={dismiss}>
				Start Creating
			</button>
		</div>
	</div>
{/if}

<style>
	.overlay {
		position: fixed;
		inset: 0;
		background: rgba(0, 0, 0, 0.75);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 200;
	}
	.modal {
		background: rgb(22, 22, 22);
		border: 1px solid rgb(50, 50, 50);
		width: 480px;
		max-width: 90vw;
		max-height: 90vh;
		overflow-y: auto;
		display: flex;
		flex-direction: column;
		gap: 16px;
		padding: 24px;
	}
	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.title {
		font-size: 14px;
		color: rgb(255, 255, 255);
		letter-spacing: 3px;
		font-weight: 600;
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
	.subtitle {
		font-size: 11px;
		color: rgb(100, 100, 100);
		letter-spacing: 1px;
		margin: -8px 0 0;
	}
	.steps {
		display: flex;
		flex-direction: column;
		gap: 0;
	}
	.step {
		display: flex;
		gap: 12px;
		align-items: flex-start;
	}
	.step-num {
		width: 22px;
		height: 22px;
		border: 1px solid rgb(255, 255, 255);
		color: rgb(255, 255, 255);
		font-size: 11px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		margin-top: 1px;
	}
	.step-content {
		display: flex;
		flex-direction: column;
		gap: 4px;
	}
	.step-label {
		font-size: 11px;
		color: rgb(255, 255, 255);
		letter-spacing: 1.5px;
		font-weight: 600;
	}
	.step-content p {
		font-size: 10px;
		color: rgb(140, 140, 140);
		line-height: 1.6;
		margin: 0;
	}
	.connector {
		width: 1px;
		height: 12px;
		background: rgb(40, 40, 40);
		margin-left: 10px;
	}
	.diagram {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 12px;
		padding: 12px 0;
		border-top: 1px solid rgb(35, 35, 35);
		border-bottom: 1px solid rgb(35, 35, 35);
	}
	.diagram-box {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 4px;
		font-size: 9px;
		color: rgb(120, 120, 120);
		letter-spacing: 0.5px;
	}
	.diagram-icon {
		font-size: 16px;
		color: rgb(255, 255, 255);
	}
	.diagram-arrow {
		font-size: 14px;
		color: rgb(60, 60, 60);
	}
	.start-btn {
		background: rgb(255, 255, 255);
		color: rgb(10, 10, 10);
		font-size: 11px;
		padding: 10px;
		font-weight: 600;
		letter-spacing: 1.5px;
		transition: opacity 0.15s;
	}
	.start-btn:hover {
		opacity: 0.85;
	}
</style>
