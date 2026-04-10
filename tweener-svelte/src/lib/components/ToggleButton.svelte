<script lang="ts">
	export let label: string;
	export let active: boolean = false;
	export let disabled: boolean = false;
	export let onClick: () => void = () => {};
</script>

<button
	class="toggle-btn"
	class:active
	{disabled}
	aria-pressed={active}
	aria-label={label}
	on:click={onClick}
>
	{label}
</button>

<style>
	.toggle-btn {
		background: none;
		color: rgb(255, 255, 255);
		font-size: 12px;
		padding: 2px 0;
		text-align: left;
		transition: color 0.15s;
		border: none;
		width: 100%;
		cursor: pointer;
		letter-spacing: 0.5px;
	}
	.toggle-btn:hover:not(:disabled) {
		color: rgb(200, 200, 200);
	}
	.toggle-btn.active {
		color: rgb(255, 255, 255);
		font-weight: 600;
	}
	.toggle-btn:disabled {
		opacity: 0.35;
		cursor: not-allowed;
	}
</style>
