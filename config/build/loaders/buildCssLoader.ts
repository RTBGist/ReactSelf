import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildCssLoader(isDev: boolean) {
  return {
    test: /\.s[ac]ss$/i,
    use: [
      // в production делаем раздение css файлов с помощью миниcss...
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      {
        loader: 'css-loader',
        options: {
          // поддержка css.module
          modules: {
            // только модули обрабатывать, а обычные css не переводить в классы типа (dsajdasid)
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            // в Dev сборке будут обычные классы
            localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]',
          },
        },
      },
      // Compiles Sass to CSS
      'sass-loader',
    ],
  };
}
