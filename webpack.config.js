module.exports = {
  mode: "development",
  entry: __dirname + '/client/index.jsx',
  output: {
   filename: 'bundle.js',
   path: __dirname + '/public'
  },

  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      },
      {loader: 'file-loader', test: /\.(ttf|eot|svg)$/}
    ]
  }
};

