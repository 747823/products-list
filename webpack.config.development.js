const path = require('path')
const WebpackShellPlugin = require('webpack-shell-plugin')

// Webpack shell plugin for nodemon
// onBuildEnd only runs on first build end, even while watch is true
const nodemon = new WebpackShellPlugin({
  onBuildEnd: ['npm run start']
})

const clientConfig = {
  watch: true,
  resolve: {
    modules: ['node_modules', 'src']
  },
  entry: path.resolve(__dirname, 'src', 'client', 'app.js'),
  output: {
    path: path.resolve(__dirname, 'dist', 'public', 'assets', 'js'),
    filename: 'products-list.bundle.js',
    publicPath: '/assets/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'stage-0', 'react']
          }
        }
      }
    ]
  }
}

const serverConfig = {
  watch: true,
  target: 'node',
  resolve: {
    modules: ['node_modules', 'src']
  },
  entry: path.resolve(__dirname, 'src', 'server', 'app.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    publicPath: '/assets/'
  },
  plugins: [nodemon]
}

module.exports = [clientConfig, serverConfig]
