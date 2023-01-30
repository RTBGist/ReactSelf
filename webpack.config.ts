import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from "html-webpack-plugin";

const config: webpack.Configuration = {
	mode: 'development',
	// стартовая точка приложения
	entry: path.resolve(__dirname, 'src', 'index.ts'),
	output: {
		// name автоматическое имя (по дефолту main), contenthash - добавляешь хэш к файлу
		filename: '[name].[contenthash].js',
		path: path.resolve(__dirname, 'build'),
		// очищает каждый раз папку build перед самим build
		clean: true,
	},
	plugins: [
		// создает html файл
		new HtmlWebpackPlugin({
			// используем наш html файл как шаблон
			template: path.resolve(__dirname, 'public', 'index.html')
		}),
		// показывает прогресс сборки
		new webpack.ProgressPlugin(),
	],
	module: {
		// лоадеры - обработка файлов которые выходят за рамки js - png, css и т.д.
		// ts-loader - подхватывает ts/tsx файлы
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		// для этих типов файлов не будем указывать расширения, он сам определит './component'
		extensions: ['.tsx', '.ts', '.js'],
	},
};

export default config;