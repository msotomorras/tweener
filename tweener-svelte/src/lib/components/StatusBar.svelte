<script lang="ts">
	import { statusMessages } from '$lib/stores/recording';
</script>

<div class="status-bar" role="log" aria-live="polite" aria-label="Status messages">
	{#each $statusMessages as msg}
		<div class="status-msg">{msg}</div>
	{/each}
</div>

<style>
	.status-bar {
		width: 100%;
		padding: 12px 10%;
		font-size: 10px;
		color: rgb(120, 120, 120);
		text-align: left;
		background: transparent;
		letter-spacing: 0.3px;
		max-height: 120px;
		overflow: hidden;
	}
	.status-msg {
		padding: 1px 0;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
</style>
