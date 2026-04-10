

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.BxalNrSx.js","_app/immutable/chunks/Dv9a0Le9.js","_app/immutable/chunks/CHhklMlY.js","_app/immutable/chunks/K42KSGl6.js"];
export const stylesheets = ["_app/immutable/assets/2.Bxpw5qTY.css"];
export const fonts = [];
