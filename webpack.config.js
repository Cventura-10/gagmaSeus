const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    port: 8080,
    historyApiFallback: true,
  },
  resolve: {
    alias: {
      '@api': path.resolve(__dirname, 'src/api/api.js'), // Correct path alias for '@api'
      'components': path.resolve(__dirname, 'src/components'),
      'styles': path.resolve(__dirname, 'src/styles'),
    },
    extensions: ['.js', '.jsx'],
  },
};
