<script lang="ts">
	import ToggleButton from './ToggleButton.svelte';
	import { mainMode, editInput, playMode, isEditMode, showExport } from '$lib/stores/appState';
	import { isValid } from '$lib/stores/recording';
</script>

<aside class="sidebar" aria-label="Controls">
	<div class="mode-section">
		<button
			class="mode-btn"
			class:active={$mainMode === 'CREATE'}
			on:click={() => mainMode.set('CREATE')}
		>
			CREATE
		</button>
		{#if $mainMode === 'CREATE'}
			<p class="helper">Capture motion to shape a transition curve</p>
			<div class="sub-options">
				<button
					class="option-btn"
					class:active={$editInput === 'MOUSE'}
					on:click={() => editInput.set('MOUSE')}
				>
					MOUSE
				</button>
				<button
					class="option-btn"
					class:active={$editInput === 'SOUND'}
					on:click={() => editInput.set('SOUND')}
				>
					SOUND
				</button>
			</div>
		{/if}
	</div>

	<div class="mode-section">
		<button
			class="mode-btn"
			class:active={$mainMode === 'PLAY'}
			on:click={() => mainMode.set('PLAY')}
		>
			PLAY
		</button>
		{#if $mainMode === 'PLAY'}
			<p class="helper">See how your curve drives motion</p>
			<div class="sub-options">
				<button
					class="option-btn"
					class:active={$playMode === 'PARTICLES'}
					on:click={() => playMode.set('PARTICLES')}
				>
					PARTICLES
				</button>
				<button
					class="option-btn"
					class:active={$playMode === 'PARTICLES_ROTATE'}
					on:click={() => playMode.set('PARTICLES_ROTATE')}
				>
					PARTICLES ROTATE
				</button>
				<button
					class="option-btn"
					class:active={$playMode === 'ICONS'}
					on:click={() => playMode.set('ICONS')}
				>
					ICONS
				</button>
			</div>
		{/if}
	</div>

	<div class="bottom-controls">
		<ToggleButton
			label="EDIT"
			active={$isEditMode}
			disabled={!$isValid}
			onClick={() => isEditMode.update((v) => !v)}
		/>
		<ToggleButton
			label="EXPORT"
			active={$showExport}
			disabled={!$isValid}
			onClick={() => showExport.update((v) => !v)}
		/>
	</div>
</aside>

<style>
	.sidebar {
		display: flex;
		flex-direction: column;
		gap: 6px;
		padding: 2rem;
		padding-bottom: 60px;
		background: rgb(20, 20, 20);
		border-right: 1px solid rgb(40, 40, 40);
		overflow-y: auto;
	}
	.mode-section {
		display: flex;
		flex-direction: column;
	}
	.mode-btn {
		background: none;
		color: rgb(100, 100, 100);
		font-size: 13px;
		padding: 4px 0;
		text-align: left;
		letter-spacing: 1.5px;
		transition: color 0.15s;
		border: none;
		cursor: pointer;
	}
	.mode-btn:hover {
		color: rgb(200, 200, 200);
	}
	.mode-btn.active {
		color: rgb(255, 255, 255);
		font-weight: 600;
	}
	.helper {
		font-size: 9px;
		color: rgb(100, 100, 100);
		line-height: 1.4;
		margin: 2px 0 4px;
		padding: 0;
	}
	.sub-options {
		display: flex;
		flex-direction: column;
		padding-left: 12px;
		gap: 2px;
	}
	.option-btn {
		background: none;
		color: rgb(80, 80, 80);
		font-size: 11px;
		padding: 2px 0;
		text-align: left;
		transition: color 0.15s;
		border: none;
		cursor: pointer;
		letter-spacing: 0.5px;
	}
	.option-btn:hover {
		color: rgb(200, 200, 200);
	}
	.option-btn.active {
		color: rgb(255, 255, 255);
	}
	.bottom-controls {
		margin-top: auto;
		display: flex;
		flex-direction: column;
		gap: 4px;
	}

	@media (max-width: 767px) {
		.sidebar {
			display: none;
		}
	}
</style>
