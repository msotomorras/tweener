import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.C6WKrTuy.js","_app/immutable/chunks/DUgWZ41X.js","_app/immutable/chunks/DBZV3_Sl.js"];
export const stylesheets = ["_app/immutable/assets/0.Dm5d-7-0.css"];
export const fonts = [];
