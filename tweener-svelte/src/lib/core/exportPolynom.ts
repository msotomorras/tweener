import type { ExportLang } from './types';

function buildPolynomialExpr(coefficients: number[]): string {
	const terms: string[] = [];
	for (let i = 0; i < coefficients.length; i++) {
		const c = coefficients[i].toFixed(8);
		if (i === 0) {
			terms.push(`${c} * 1.0`);
		} else {
			const xPow = new Array(i).fill('x').join('*');
			terms.push(`${c} * ${xPow}`);
		}
	}
	return terms.join(' + ');
}

export function generateExport(coefficients: number[], lang: ExportLang): string {
	const expr = buildPolynomialExpr(coefficients);

	switch (lang) {
		case 'HLSL':
			return `float getFunction(float x) {\n  x = abs(x);\n  float y = ${expr};\n  return y;\n}`;
		case 'GLSL':
			return `float getFunction(float x) {\n  float y = ${expr};\n  return y;\n}`;
		case 'JAVA':
			return `float getFunction(float x) {\n  float y = ${expr};\n  return y;\n}`;
		case 'JAVASCRIPT':
			return `function getFunction(x) {\n  const y = ${expr};\n  return y;\n}`;
		case 'CPP':
			return `float getFunction(float x) {\n  float y = ${expr};\n  return y;\n}`;
		case 'CSHARP':
			return `float getFunction(float x) {\n  double y = ${expr};\n  return (float) y;\n}`;
	}
}

export function getLanguageLabel(lang: ExportLang): string {
	const labels: Record<ExportLang, string> = {
		HLSL: 'HLSL',
		GLSL: 'GLSL',
		JAVA: 'Java',
		JAVASCRIPT: 'JavaScript',
		CPP: 'C++',
		CSHARP: 'C#'
	};
	return labels[lang];
}
