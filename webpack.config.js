const themeFunction = require('./build-utils/theme-function');
const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const RemovePlugin = require('remove-files-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const TerserPlugin = require('terser-webpack-plugin');

// Set mode
const argv = require('yargs').argv;
const devMode = argv.mode !== 'production';

module.exports = {
    mode: argv.mode,
    devtool: devMode ? 'source-map' : false,
    entry: {
        // Used to generate client-side JS only (CSS chunk is deleted using RemovePlugin)
        'js-bundle': [path.resolve(__dirname, 'src/js-bundle.js')],
        // Used to generate all CSS (JS chunks are deleted using RemovePlugin)
        'css-bundle': [
            path.resolve(__dirname, 'src/main.scss'),
            path.resolve(__dirname, 'src/css-bundle.js'),
        ],
    },
    output: {
        publicPath: '/_resources/app/client/dist/',
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        // use absolute paths in sourcemaps (important for debugging via IDE)
        // devtoolModuleFilenameTemplate: '[absolute-resource-path]',
        // devtoolFallbackModuleFilenameTemplate:
        //     '[absolute-resource-path]?[hash]',
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
                    options: {
                        // Ensure cache is used when needed
                        cacheDirectory: true,
                    },
                },
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    // Replace plugin with style-loader for in JS styles
                    // 'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sassOptions: {
                                // Custom sass function to use theme.js data
                                functions: {
                                    'theme($keys)': themeFunction,
                                },
                            },
                            prependData: `
                                @import '@styles/mixins/conversions.scss';
                                @import '@styles/settings/variables-sass.scss';
                                @import '@styles/mixins/scale-rem.scss';
                                @import '@styles/mixins/accessibility.scss';
                                @import '@styles/mixins/focus-style.scss';
                            `,
                        },
                    },
                ],
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'images/',
                            esModule: false, // <- here
                        },
                    },
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/',
                        },
                    },
                ],
            },
        ],
    },
    optimization: {
        splitChunks: {
            maxInitialRequests: Infinity,
            minSize: 0,
            chunks(chunk) {
                // exclude `css-bundle`
                return chunk.name !== 'css-bundle';
            },
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name(module) {
                        // get the name. E.g. node_modules/packageName/not/this/part.js
                        // or node_modules/packageName
                        const packageName = module.context.match(
                            /[\\/]node_modules[\\/](.*?)([\\/]|$)/
                        )[1];

                        // npm package names are URL-safe, but some servers don't like @ symbols
                        return `npm.${packageName.replace('@', '')}`;
                    },
                },
            },
        },
        // minimizer and its options are only run in production mode
        minimizer: [
            new OptimizeCssAssetsPlugin({}),
            new TerserPlugin({
                terserOptions: {
                    compress: {
                        drop_console: true,
                    },
                    format: {
                        comments: false,
                    },
                },
                extractComments: false,
                parallel: true,
            }),
        ],
    },
    resolve: {
        // Point to node modules
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
        alias: {
            vue$: devMode ? 'vue/dist/vue.esm.js' : 'vue/dist/vue.min.js',
            '@styles': path.resolve(__dirname, './src/core-styles'),
            '@utils': path.resolve(__dirname, './src/utils'),
        },
        // Resolve extensions if not provided in this order
        extensions: ['*', '.js', '.vue', '.json'],
    },
    plugins: [
        // Required for single file components
        new VueLoaderPlugin(),
        new StyleLintPlugin({
            context: 'src',
            files: ['**/*.{scss,vue}'],
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: 'css/[name].css',
        }),
        // Used in conjunction with ImageminPlugin
        new CopyWebpackPlugin({
            patterns: [{ from: 'src/images', to: 'images' }],
            options: {
                concurrency: 100,
            },
        }),
        new ImageminPlugin({
            // Only use in production mode
            disable: devMode,
            test: /\.(jpe?g|png|gif|svg)$/i,
        }),
        new RemovePlugin({
            // Remove the dist folder before any compilation (to get a fresh build)
            before: {
                include: [path.resolve(__dirname, 'dist')],
                log: false, // silent output
            },
            // Remove unnecessary chunks (JS chunks for CSS entrypoint and vice versa)
            after: {
                include: ['./dist/css-bundle.js', './dist/css/js-bundle.css'],
                log: false, // silent output
            },
        }),
    ],
};

if (!devMode) {
    console.log('\nProduction build');
    module.exports.plugins = (module.exports.plugins || []).concat([
        new CleanWebpackPlugin(),
        new StyleLintPlugin({
            emitErrors: true,
            failOnError: true,
        }),
    ]);
} else {
    console.log('\nDevelopment build');
    module.exports.plugins = (module.exports.plugins || []).concat([
        new StyleLintPlugin({
            emitErrors: false,
            failOnError: false,
        }),
    ]);
}
