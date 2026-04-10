import type { AnimContext } from '$lib/core/types';

// Geometric icons
import { drawTriangle, drawArc, drawCircles, drawArcsBall, drawBalls, drawArcs } from './geometric';
// Layered icons
import { drawPacman, drawFlower, drawRectangle } from './layered';
// Wave icons
import { drawWarm, drawWarm2, drawEight, drawSeven, drawSix, drawFive } from './wave';
// Mio linear (1-11)
import {
	drawMio1, drawMio2, drawMio3, drawMio4, drawMio5,
	drawMio6, drawMio7, drawMio8, drawMio9, drawMio10, drawMio11
} from './mio-linear';
// Mio circular (12-41)
import {
	drawMio12, drawMio13, drawMio14, drawMio15, drawMio16,
	drawMio17, drawMio18, drawMio19, drawMio20, drawMio21,
	drawMio22, drawMio23, drawMio24, drawMio25, drawMio26,
	drawMio27, drawMio28, drawMio29, drawMio30, drawMio31,
	drawMio32, drawMio33, drawMio34, drawMio35, drawMio36,
	drawMio37, drawMio38, drawMio39, drawMio40, drawMio41
} from './mio-circular';
// Mio mid (42-59)
import {
	drawMio42, drawMio43, drawMio44, drawMio45, drawMio46,
	drawMio47, drawMio48, drawMio49, drawMio50, drawMio51,
	drawMio52, drawMio53, drawMio54, drawMio55, drawMio56,
	drawMio57, drawMio58, drawMio59
} from './mio-mid';
// Mio complex a (60-85)
import {
	drawMio60, drawMio61, drawMio62, drawMio63, drawMio64,
	drawMio65, drawMio66, drawMio67, drawMio68, drawMio69,
	drawMio70, drawMio71, drawMio72, drawMio73, drawMio74,
	drawMio75, drawMio76, drawMio77, drawMio78, drawMio79,
	drawMio80, drawMio81, drawMio82, drawMio83, drawMio84, drawMio85
} from './mio-complex-a';
// Mio complex b (86-118)
import {
	drawMio86, drawMio87, drawMio88, drawMio89, drawMio90,
	drawMio91, drawMio92, drawMio93, drawMio94, drawMio95,
	drawMio96, drawMio97, drawMio98, drawMio99, drawMio100,
	drawMio101, drawMio102, drawMio103, drawMio104, drawMio105,
	drawMio106, drawMio107, drawMio108, drawMio109, drawMio110,
	drawMio111, drawMio112, drawMio113, drawMio114, drawMio115,
	drawMio116, drawMio117, drawMio118
} from './mio-complex-b';

export interface IconDef {
	draw: (a: AnimContext) => void;
	numEl: number;
}

/**
 * Registry of all 133 icon animations, ordered to match the Processing original.
 * Each entry has the draw function and numEl parameter from the constructor.
 */
export const ICON_REGISTRY: IconDef[] = [
	// 0-14: Geometric, Layered, Wave
	{ draw: drawTriangle, numEl: 0 },
	{ draw: drawArc, numEl: 0 },
	{ draw: drawCircles, numEl: 0 },
	{ draw: drawArcsBall, numEl: 0 },
	{ draw: drawBalls, numEl: 0 },
	{ draw: drawArcs, numEl: 0 },
	{ draw: drawPacman, numEl: 0 },
	{ draw: drawFlower, numEl: 0 },
	{ draw: drawWarm, numEl: 3 },
	{ draw: drawRectangle, numEl: 0 },
	{ draw: drawWarm2, numEl: 3 },
	{ draw: drawEight, numEl: 3 },
	{ draw: drawSeven, numEl: 1 },
	{ draw: drawSix, numEl: 2 },
	{ draw: drawFive, numEl: 1 },
	// 15-25: Mio1-Mio11
	{ draw: drawMio1, numEl: 4 },
	{ draw: drawMio2, numEl: 1 },
	{ draw: drawMio3, numEl: 2 },
	{ draw: drawMio4, numEl: 2 },
	{ draw: drawMio5, numEl: 2 },
	{ draw: drawMio6, numEl: 2 },
	{ draw: drawMio7, numEl: 3 },
	{ draw: drawMio8, numEl: 3 },
	{ draw: drawMio9, numEl: 5 },
	{ draw: drawMio10, numEl: 3 },
	{ draw: drawMio11, numEl: 4 },
	// 26-51: Mio12-Mio37
	{ draw: drawMio12, numEl: 10 },
	{ draw: drawMio13, numEl: 15 },
	{ draw: drawMio14, numEl: 1 },
	{ draw: drawMio15, numEl: 3 },
	{ draw: drawMio16, numEl: 3 },
	{ draw: drawMio17, numEl: 3 },
	{ draw: drawMio18, numEl: 3 },
	{ draw: drawMio19, numEl: 4 },
	{ draw: drawMio20, numEl: 4 },
	{ draw: drawMio21, numEl: 4 },
	{ draw: drawMio22, numEl: 2 },
	{ draw: drawMio23, numEl: 4 },
	{ draw: drawMio24, numEl: 3 },
	{ draw: drawMio25, numEl: 2 },
	{ draw: drawMio26, numEl: 20 },
	{ draw: drawMio27, numEl: 10 },
	{ draw: drawMio28, numEl: 10 },
	{ draw: drawMio29, numEl: 7 },
	{ draw: drawMio30, numEl: 7 },
	{ draw: drawMio31, numEl: 7 },
	{ draw: drawMio32, numEl: 33 },
	{ draw: drawMio33, numEl: 1 },
	{ draw: drawMio34, numEl: 8 },
	{ draw: drawMio35, numEl: 7 },
	{ draw: drawMio36, numEl: 10 },
	{ draw: drawMio37, numEl: 60 },
	// 52-58: Mio38-Mio43, Mio46-Mio48
	{ draw: drawMio38, numEl: 10 },
	{ draw: drawMio39, numEl: 10 },
	{ draw: drawMio40, numEl: 3 },
	{ draw: drawMio41, numEl: 53 },
	{ draw: drawMio42, numEl: 33 },
	{ draw: drawMio43, numEl: 63 },
	// skip 58 (gap in Processing), fill with Mio46
	{ draw: drawMio46, numEl: 8 },
	{ draw: drawMio47, numEl: 15 },
	{ draw: drawMio48, numEl: 18 },
	{ draw: drawMio49, numEl: 1 },
	{ draw: drawMio50, numEl: 8 },
	{ draw: drawMio51, numEl: 50 },
	{ draw: drawMio52, numEl: 5 },
	{ draw: drawMio53, numEl: 4 },
	{ draw: drawMio54, numEl: 15 },
	{ draw: drawMio55, numEl: 15 },
	{ draw: drawMio67, numEl: 30 },
	{ draw: drawMio56, numEl: 45 },
	{ draw: drawMio57, numEl: 15 },
	{ draw: drawMio58, numEl: 3 },
	{ draw: drawMio59, numEl: 8 },
	{ draw: drawMio60, numEl: 12 },
	{ draw: drawMio61, numEl: 13 },
	{ draw: drawMio62, numEl: 53 },
	{ draw: drawMio63, numEl: 83 },
	{ draw: drawMio64, numEl: 9 },
	{ draw: drawMio65, numEl: 3 },
	{ draw: drawMio66, numEl: 60 },
	{ draw: drawMio44, numEl: 33 },
	// gap at 82 in Processing
	{ draw: drawMio68, numEl: 33 },
	{ draw: drawMio69, numEl: 8 },
	{ draw: drawMio45, numEl: 53 },
	// gap at 86 in Processing
	{ draw: drawMio70, numEl: 15 },
	{ draw: drawMio71, numEl: 85 },
	{ draw: drawMio72, numEl: 85 },
	{ draw: drawMio73, numEl: 10 },
	{ draw: drawMio74, numEl: 10 },
	{ draw: drawMio75, numEl: 8 },
	{ draw: drawMio76, numEl: 15 },
	{ draw: drawMio77, numEl: 15 },
	{ draw: drawMio78, numEl: 15 },
	{ draw: drawMio79, numEl: 35 },
	{ draw: drawMio80, numEl: 15 },
	{ draw: drawMio81, numEl: 30 },
	{ draw: drawMio82, numEl: 10 },
	{ draw: drawMio83, numEl: 5 },
	{ draw: drawMio84, numEl: 15 },
	{ draw: drawMio85, numEl: 6 },
	{ draw: drawMio86, numEl: 10 },
	{ draw: drawMio87, numEl: 10 },
	{ draw: drawMio88, numEl: 10 },
	{ draw: drawMio89, numEl: 1 },
	{ draw: drawMio90, numEl: 15 },
	{ draw: drawMio91, numEl: 2 },
	{ draw: drawMio92, numEl: 10 },
	{ draw: drawMio93, numEl: 20 },
	{ draw: drawMio94, numEl: 1 },
	{ draw: drawMio95, numEl: 20 },
	{ draw: drawMio96, numEl: 1 },
	{ draw: drawMio97, numEl: 6 },
	{ draw: drawMio98, numEl: 1 },
	{ draw: drawMio99, numEl: 8 },
	{ draw: drawMio100, numEl: 2 },
	{ draw: drawMio101, numEl: 1 },
	{ draw: drawMio102, numEl: 2 },
	{ draw: drawMio103, numEl: 2 },
	{ draw: drawMio104, numEl: 2 },
	{ draw: drawMio105, numEl: 3 },
	{ draw: drawMio106, numEl: 3 },
	{ draw: drawMio107, numEl: 3 },
	{ draw: drawMio108, numEl: 3 },
	{ draw: drawMio109, numEl: 7 },
	{ draw: drawMio110, numEl: 5 },
	{ draw: drawMio111, numEl: 3 },
	{ draw: drawMio112, numEl: 4 },
	{ draw: drawMio113, numEl: 5 },
	{ draw: drawMio114, numEl: 7 },
	{ draw: drawMio115, numEl: 10 },
	// Mio116 was commented out in original
	{ draw: drawMio117, numEl: 60 },
	{ draw: drawMio118, numEl: 20 }
];
