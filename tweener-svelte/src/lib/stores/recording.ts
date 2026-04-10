import { writable, derived } from 'svelte/store';
import type { RecordingState } from '$lib/core/recording';
import { createRecordingState } from '$lib/core/recording';
import { solve } from '$lib/core/polyFitter';

export const recordingState = writable<RecordingState>(createRecordingState());

export const isRecording = writable(false);

export const coefficients = derived(recordingState, ($s) => $s.coefficients);

export const isValid = derived(recordingState, ($s) => $s.valid);

export const polyFn = derived(recordingState, ($s) => {
	return (x: number) => solve($s.coefficients, x);
});

export const statusMessages = writable<string[]>([]);

export function addStatusMessage(msg: string): void {
	const now = new Date();
	const ts = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;
	statusMessages.update((msgs) => {
		const next = [...msgs, `[${ts}] ${msg}`];
		return next.slice(-4);
	});
}
