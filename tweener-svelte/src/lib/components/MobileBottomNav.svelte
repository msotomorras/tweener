<script lang="ts">
	import { isEditMode, showExport } from '$lib/stores/appState';
	import { isValid } from '$lib/stores/recording';
</script>

<div class="mobile-bottom-nav" aria-label="Actions">
	<button
		class="bottom-btn"
		class:active={$isEditMode}
		disabled={!$isValid}
		aria-pressed={$isEditMode}
		on:click={() => isEditMode.update((v) => !v)}
	>
		EDIT
	</button>
	<button
		class="bottom-btn"
		class:active={$showExport}
		disabled={!$isValid}
		aria-pressed={$showExport}
		on:click={() => showExport.update((v) => !v)}
	>
		EXPORT
	</button>
</div>

<style>
	.mobile-bottom-nav {
		display: none;
	}

	@media (max-width: 767px) {
		.mobile-bottom-nav {
			display: flex;
			border-top: 1px solid var(--border);
			background: var(--bg-primary);
		}

		.bottom-btn {
			flex: 1;
			padding: 12px 0;
			text-align: center;
			font-family: var(--font-mono);
			font-size: 12px;
			letter-spacing: 0.5px;
			color: var(--text-primary);
			background: none;
			border: none;
			cursor: pointer;
			transition: color 0.15s;
		}

		.bottom-btn:disabled {
			opacity: 0.35;
			pointer-events: none;
		}

		.bottom-btn.active {
			font-weight: 600;
		}
	}
</style>
