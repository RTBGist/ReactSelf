import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions } from './types/config';

export function buildPlugins({
  paths, isDev, apiUrl, project,
}: BuildOptions): webpack.WebpackPluginInstance[] {
  const plugins = [
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
      __API__: JSON.stringify(apiUrl),
      __PROJECT__: JSON.stringify(project),
    }),
  ];

  if (isDev) {
    plugins.push(new ReactRefreshWebpackPlugin());
    plugins.push(new BundleAnalyzerPlugin({
      openAnalyzer: false,
      analyzerMode: 'disabled', // отключен, чтоб не грузить сборку
    }));
  }

  return plugins;
}
