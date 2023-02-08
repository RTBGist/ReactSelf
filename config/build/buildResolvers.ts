import {ResolveOptions} from "webpack";
import {BuildOptions} from "./types/config";

export function buildResolvers(options: BuildOptions): ResolveOptions {
	return {
		// для этих типов файлов не будем указывать расширения, он сам определит './component'
		extensions: ['.tsx', '.ts', '.js'],
		// Абсолютные пути в приоритете
		preferAbsolute: true,
		modules: [options.paths.src, 'node_modules'],
		mainFiles: ['index'],
		alias: {}
	}
}