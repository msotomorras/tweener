

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.CgogwyjR.js","_app/immutable/chunks/Dv9a0Le9.js","_app/immutable/chunks/CHhklMlY.js"];
export const stylesheets = ["_app/immutable/assets/0.C5ZGd5RT.css"];
export const fonts = [];
