<script lang="ts">
	import Sidebar from '$lib/components/Sidebar.svelte';
	import CreateView from '$lib/components/CreateView.svelte';
	import PlayView from '$lib/components/PlayView.svelte';
	import ExportModal from '$lib/components/ExportModal.svelte';
	import StatusBar from '$lib/components/StatusBar.svelte';
	import WelcomeModal from '$lib/components/WelcomeModal.svelte';
	import { mainMode, isEditMode, showExport } from '$lib/stores/appState';
	import { isValid, addStatusMessage, recordingState } from '$lib/stores/recording';
	import { generateExport } from '$lib/core/exportPolynom';
	import { exportLang } from '$lib/stores/appState';
	import { get } from 'svelte/store';

	function handleKeyDown(e: KeyboardEvent) {
		if (e.key === 'e' || e.key === 'E') {
			if (get(isValid)) {
				isEditMode.update((v) => !v);
				addStatusMessage(get(isEditMode) ? 'Edit mode ON' : 'Edit mode OFF');
			}
		}
		if (e.key === 'c' || e.key === 'C') {
			if (get(isValid)) {
				const code = generateExport(
					get(recordingState).coefficients,
					get(exportLang)
				);
				navigator.clipboard.writeText(code).then(() => {
					addStatusMessage('Code copied to clipboard');
				});
			}
		}
		if (e.key === 'Escape') {
			showExport.set(false);
		}
		if (e.key === 'i' || e.key === 'I') {
			addStatusMessage('NextOne110 — Gesture to Polynomial Visualization');
		}
	}
</script>

<svelte:head>
	<title>Tweener</title>
</svelte:head>

<svelte:window on:keydown={handleKeyDown} />

<div class="app-shell">
	<Sidebar />
	<div class="content-column">
		<main class="main-area">
			{#if $mainMode === 'CREATE'}
				<CreateView />
			{:else}
				<PlayView />
			{/if}
		</main>
		<StatusBar />
	</div>
</div>

{#if $showExport}
	<ExportModal />
{/if}

<WelcomeModal />

<style>
	.app-shell {
		display: grid;
		grid-template-columns: auto 1fr;
		width: 100vw;
		height: 100vh;
		overflow: hidden;
	}
	.content-column {
		display: flex;
		flex-direction: column;
		overflow: hidden;
	}
	.main-area {
		flex: 1;
		display: flex;
		position: relative;
		overflow: hidden;
		background: rgb(20, 20, 20);
	}
</style>
