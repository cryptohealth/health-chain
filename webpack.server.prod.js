const path = require('path')
const webpackNodeExternals = require('webpack-node-externals')

module.exports = {
    target: 'node',
    entry: './index.ts',
    mode: 'production',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
        publicPath: '/build'
    },
    module:{
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
               
            }
        ],
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
      },
    externals: [webpackNodeExternals()]
}