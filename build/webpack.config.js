const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const root = (dir) => path.join(path.resolve(__dirname, '../'), dir);

module.exports = {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    entry: {
        index: root('lib/index.js'),
    },
    externals: {
        react: {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react'
        }
    },
    output: {
        path: root('dist'),
        filename: '[name].js',
        chunkFilename: '[name].js',
        // library: 'microD',
        // libraryTarget: 'umd',
        // libraryExport: 'Col',
        // umdNamedDefine: true
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css'],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        })
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
            minChunks: 1,
            // maxSize: 20000,
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
                    name: 'vendors',
                    filename: '[name].vendor.js',
                    chunks: 'all'
                }
            }
        }
    },
    module: {
        rules: [{
            test: /\.css$/,
            exclude: /node_modules/,
            use: [MiniCssExtractPlugin.loader, 'css-loader']
        }, {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
}