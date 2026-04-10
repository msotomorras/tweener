<script lang="ts">
	export let options: { label: string; value: string }[];
	export let selected: string;
	export let label: string;
	export let onChange: (value: string) => void = () => {};
</script>

<div class="radio-group" role="radiogroup" aria-label={label}>
	<span class="radio-label">{label}</span>
	<div class="radio-options">
		{#each options as opt}
			<button
				class="radio-btn"
				class:active={selected === opt.value}
				role="radio"
				aria-checked={selected === opt.value}
				on:click={() => {
					selected = opt.value;
					onChange(opt.value);
				}}
			>
				{opt.label}
			</button>
		{/each}
	</div>
</div>

<style>
	.radio-group {
		display: flex;
		flex-direction: column;
		gap: 4px;
	}
	.radio-label {
		font-size: 10px;
		color: rgb(140, 140, 140);
		text-transform: uppercase;
		letter-spacing: 1px;
	}
	.radio-options {
		display: flex;
		flex-direction: column;
		gap: 2px;
	}
	.radio-btn {
		background: rgb(30, 30, 30);
		color: rgb(130, 130, 130);
		font-size: 11px;
		padding: 5px 10px;
		text-align: left;
		transition: all 0.15s;
		border: 1px solid transparent;
	}
	.radio-btn:hover {
		color: rgb(180, 180, 180);
		background: rgb(40, 40, 40);
	}
	.radio-btn.active {
		color: rgb(255, 255, 255);
		background: rgb(45, 45, 45);
		border-color: rgb(0, 255, 255);
	}
</style>
