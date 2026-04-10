export interface Vec2 {
	x: number;
	y: number;
}

export interface Vec3 {
	x: number;
	y: number;
	z: number;
}

export interface Moment3D {
	pos: Vec3;
	time: number;
}

export interface Moment2D {
	time: number;
	distance: number;
}

export interface FrameConfig {
	x: number;
	y: number;
	w: number;
	h: number;
	marginPercent: number;
}

export interface Particle {
	origin: Vec2;
	target: Vec2;
	location: Vec2;
	lifespan: number;
	acceleration: number;
}

export interface ParticleRot {
	origin: Vec2;
	location: Vec2;
	radius: number;
	startAngle: number;
	lifespan: number;
	acceleration: number;
	invert: boolean;
}

export type MainMode = 'CREATE' | 'PLAY';
export type EditInput = 'MOUSE' | 'SOUND';
export type PlayMode = 'PARTICLES' | 'PARTICLES_ROTATE' | 'ICONS';
export type ExportLang = 'HLSL' | 'GLSL' | 'JAVA' | 'JAVASCRIPT' | 'CPP' | 'CSHARP';

export interface AnimContext {
	ctx: CanvasRenderingContext2D;
	position: Vec2;
	numEl: number;
	polyFn: (x: number) => number;
	timeMs: number;
	sizeGrid: number;
}
