import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions } from './types/config';

export function buildPlugins({ paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] {
  return [
    // создает html файл
    new HtmlWebpackPlugin({
      // используем наш html файл как шаблон
      template: paths.html,
    }),
    // показывает прогресс сборки
    new webpack.ProgressPlugin(),
    // Создает css файлы отдельные, то есть не в общем бандлее будут
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new webpack.DefinePlugin({
      // Прокинули глобальную переменную в проект
      __IS_DEV__: JSON.stringify(isDev),
    }),
		new BundleAnalyzerPlugin({
			openAnalyzer: false,
			analyzerMode: "disabled", // отключен, чтоб не грузить сборку
		}),
  ];
}
