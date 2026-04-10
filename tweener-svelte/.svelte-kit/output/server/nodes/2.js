

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.C_7yViHx.js","_app/immutable/chunks/DUgWZ41X.js","_app/immutable/chunks/DBZV3_Sl.js","_app/immutable/chunks/gA2hSg42.js"];
export const stylesheets = ["_app/immutable/assets/2.0umNi7j-.css"];
export const fonts = [];
