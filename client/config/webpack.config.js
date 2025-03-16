const path = require('path');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            sourceType: "unambiguous",
          },
        },
      },
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto", // Ensure Webpack treats .mjs files as ESM
        resolve: { fullySpecified: false }, // Prevent named export errors
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.mjs'], // Ensure Webpack resolves .mjs files
    fullySpecified: false, // Fixes named exports issue with ESM modules
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, 'public'),
    },
    open: true,
    port: 3000,
  },
};
