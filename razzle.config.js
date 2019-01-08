'use strict'

const autoprefixer = require('autoprefixer')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  plugins: ['typescript'],
  modify(config, {target, dev}) {
    const typingsCssLoader = {
      loader: require.resolve('typings-for-css-modules-loader'),
      options: {
        modules: true,
        sass: true,
        namedExport: true,
        sourceMap: dev,
        localIdentName: dev
          ? '[name]__[local]-[hash:base64:5]'
          : '[hash:base64:6]',
      },
    }

    const sassLoader = {
      loader: require.resolve('sass-loader'),
      options: {
        sourceMap: dev,
      },
    }

    const postCssLoader = {
      loader: require.resolve('postcss-loader'),
      options: {
        ident: 'postcss-scss',
        plugins: () => [
          require('postcss-flexbugs-fixes'),
          autoprefixer({
            browsers: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9'],
            flexbox: 'no-2009',
          }),
        ],
      },
    }

    const sassRule = {
      test: /\.scss$/,
      use: [
        target === 'web' && dev
          ? require.resolve('style-loader')
          : MiniCssExtractPlugin.loader,
        typingsCssLoader,
        sassLoader,
        postCssLoader,
      ],
    }

    return {
      ...config,

      plugins: [
        ...config.plugins,
        new MiniCssExtractPlugin({
          filename: '[name].css',
          chunkFilename: '[id].css',
        }),
      ],

      module: {
        ...config.module,
        rules: [...config.module.rules, sassRule],
      },
    }
  },
}
