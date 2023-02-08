import {BuildOptions} from "./types/config";
import webpack from "webpack";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {buildDevServer} from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
	const {paths, mode, isDev} = options;

	return {
		mode: mode,
		// стартовая точка приложения
		entry: paths.entry,
		output: {
			// name автоматическое имя (по дефолту main), contenthash - добавляешь хэш к файлу
			filename: '[name].[contenthash].js',
			path: paths.build,
			// очищает каждый раз папку build перед самим build
			clean: true,
		},
		plugins: buildPlugins(options),
		module: {
			// лоадеры - обработка файлов которые выходят за рамки js - png, css и т.д.
			rules: buildLoaders(options),
		},
		resolve: buildResolvers(options),
		// для source-map, чтоб видно было, где именно произошла ошибка
		devtool: isDev ? 'inline-source-map' : undefined,
		devServer: isDev ? buildDevServer(options) : undefined,
	}
}