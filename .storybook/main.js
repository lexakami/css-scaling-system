/**
 * Main point of configuration for storybook.
 */

const themeFunction = require('../build-utils/theme-function');
const path = require('path');

// Export a function. Accept the base config as the only param.
module.exports = {
    stories: ['../src/**/*.stories.[tj]s'],
    addons: [
        '@storybook/addon-a11y',
        // docs should be before controls
        '@storybook/addon-docs',
        '@storybook/addon-controls',
        {
            name: '@storybook/addon-postcss',

            options: {
                postcssLoaderOptions: {
                    implementation: require('postcss'),
                },
            },
        },
        '@storybook/addon-viewport',
        'storybook-addon-storyout/register',
    ],
    webpackFinal: async (config, { configType }) => {
        // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
        // You can change the configuration based on that.
        // 'PRODUCTION' is used when building the static version of storybook.

        // Make whatever fine-grained changes you need
        config.module.rules.push({
            test: /\.scss$/,
            use: [
                'style-loader',
                'css-loader',
                'postcss-loader',
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
        });

        config.resolve.alias['@utils'] = path.resolve(__dirname, '../src/utils');
        config.resolve.alias['@styles'] = path.resolve(__dirname, '../src/core-styles');

        // Return the altered config
        return config;
    },
};
