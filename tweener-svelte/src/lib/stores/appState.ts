import { writable, derived } from 'svelte/store';
import type { MainMode, EditInput, PlayMode, ExportLang } from '$lib/core/types';
import { solve } from '$lib/core/polyFitter';

export const mainMode = writable<MainMode>('CREATE');
export const editInput = writable<EditInput>('MOUSE');
export const playMode = writable<PlayMode>('PARTICLES');
export const exportLang = writable<ExportLang>('JAVASCRIPT');
export const isEditMode = writable(false);
export const showExport = writable(false);
