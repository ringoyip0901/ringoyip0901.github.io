const path = require('path');

new webpack.DefinePlugin({
  "process.env": { 
     NODE_ENV: JSON.stringify("production") 
   }
})

module.exports = {
  entry: path.join(__dirname, './src/containers/index.js'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    // path: path.join(__dirname, '/build'),
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  
};
