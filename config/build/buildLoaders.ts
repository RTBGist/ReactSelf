import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {
	const svgLoader = {
		test: /\.svg$/,
		use: ['@svgr/webpack'],
	}

	const babelLoader = {
		test: /\.(js|jsx|tsx)$/,
		exclude: /node_modules/,
		use: {
			loader: "babel-loader",
			options: {
				presets: ['@babel/preset-env'],
				"plugins": [
					[
						"i18next-extract",
						{
							locales: ['ru', 'en'],
							keyAsDefaultValue: true
						}
					],
				]
			}
		}
	}

	const fileLoader = {
		test: /\.(png|jpe?g|gif)$/i,
		use: [
			{
				loader: 'file-loader',
			},
		],
	}

	const cssLoader = {
		test: /\.s[ac]ss$/i,
		use: [
			// в production делаем раздение css файлов с помощью миниcss...
			isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
			// Translates CSS into CommonJS
			{
				loader: "css-loader",
				options: {
					// поддержка css.module
					modules: {
						// только модули обрабатывать, а обычные css не переводить в классы типа (dsajdasid)
						auto: (resPath: string) => Boolean(resPath.includes('.module.')),
						// в Dev сборке будут обычные классы
						localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
					},
				}
			},
			// Compiles Sass to CSS
			"sass-loader",
		],
	}

	// ts-loader - подхватывает ts/tsx файлы
	const typescriptLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	}

	return [
		fileLoader,
		svgLoader,
		babelLoader,
		typescriptLoader,
		cssLoader,
	]
}