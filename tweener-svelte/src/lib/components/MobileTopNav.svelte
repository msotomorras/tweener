<script lang="ts">
	import { mainMode, editInput, playMode } from '$lib/stores/appState';
</script>

<nav class="mobile-top-nav" aria-label="Mode selection">
	<div class="main-tabs">
		<button
			class="tab-btn"
			class:active={$mainMode === 'CREATE'}
			on:click={() => mainMode.set('CREATE')}
		>
			CREATE
		</button>
		<button
			class="tab-btn"
			class:active={$mainMode === 'PLAY'}
			on:click={() => mainMode.set('PLAY')}
		>
			PLAY
		</button>
	</div>
	<div class="sub-tabs">
		{#if $mainMode === 'CREATE'}
			<button
				class="sub-tab-btn"
				class:active={$editInput === 'MOUSE'}
				on:click={() => editInput.set('MOUSE')}
			>
				DRAG
			</button>
			<button
				class="sub-tab-btn"
				class:active={$editInput === 'SOUND'}
				on:click={() => editInput.set('SOUND')}
			>
				MIC
			</button>
		{:else}
			<button
				class="sub-tab-btn"
				class:active={$playMode === 'PARTICLES' || $playMode === 'PARTICLES_ROTATE'}
				on:click={() => playMode.set('PARTICLES')}
			>
				PARTICLES
			</button>
			<button
				class="sub-tab-btn"
				class:active={$playMode === 'ICONS'}
				on:click={() => playMode.set('ICONS')}
			>
				ICONS
			</button>
		{/if}
	</div>
</nav>

<style>
	.mobile-top-nav {
		display: none;
	}

	@media (max-width: 767px) {
		.mobile-top-nav {
			display: flex;
			flex-direction: column;
			background: var(--bg-primary);
			border-bottom: 1px solid var(--border);
		}

		.main-tabs,
		.sub-tabs {
			display: flex;
		}

		.sub-tabs {
			border-top: 1px solid var(--border);
		}

		.tab-btn,
		.sub-tab-btn {
			flex: 1;
			padding: 12px 0;
			text-align: center;
			font-family: var(--font-mono);
			letter-spacing: 1.5px;
			color: rgb(100, 100, 100);
			background: none;
			border: none;
			border-bottom: 2px solid transparent;
			cursor: pointer;
			transition: color 0.15s;
		}

		.tab-btn {
			font-size: 13px;
		}

		.sub-tab-btn {
			font-size: 11px;
		}

		.tab-btn:hover,
		.sub-tab-btn:hover {
			color: rgb(200, 200, 200);
		}

		.tab-btn.active {
			color: var(--text-primary);
			font-weight: 600;
			border-bottom-color: var(--text-primary);
		}

		.sub-tab-btn.active {
			color: var(--text-primary);
			font-weight: 600;
		}
	}
</style>
