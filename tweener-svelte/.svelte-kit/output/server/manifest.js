export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.svg"]),
	mimeTypes: {".svg":"image/svg+xml"},
	_: {
		client: {start:"_app/immutable/entry/start.CF7byIPT.js",app:"_app/immutable/entry/app.DCbfFSv5.js",imports:["_app/immutable/entry/start.CF7byIPT.js","_app/immutable/chunks/CBn4FnnO.js","_app/immutable/chunks/DUgWZ41X.js","_app/immutable/chunks/gA2hSg42.js","_app/immutable/entry/app.DCbfFSv5.js","_app/immutable/chunks/DUgWZ41X.js","_app/immutable/chunks/DBZV3_Sl.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
