const path = require('path');
const nodeExternals = require('webpack-node-externals');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

// Set mode
const argv = require('yargs').argv;
const devMode = argv.mode !== 'production';

module.exports = {
    target: 'node',
    externals: [nodeExternals()],
    devtool: 'inline-cheap-module-source-map',
    entry: {
        main: [path.resolve(__dirname, 'src/main.js')],
    },
    output: {
        publicPath: '../',
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.(js|vue)$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.(scss|css)$/,
                loader: 'null-loader',
            },
        ],
    },
    resolve: {
        // Point to node modules
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
        alias: {
            vue$: devMode ? 'vue/dist/vue.esm.js' : 'vue/dist/vue.min.js',
            '@icons': path.resolve(__dirname, './src/images/icons'),
        },
        // Resolve extensions if not provided in this order
        extensions: ['*', '.js', '.vue', '.json'],
    },
    plugins: [
        // Required for single file components
        new VueLoaderPlugin(),
    ],
};
