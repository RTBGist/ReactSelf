import { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    port: options.port,
    open: true,
    // предотвращение ошибки cannot get, проксирование запросов через index.html
    historyApiFallback: true,
    // HMR webpack
    hot: true,
  };
}
