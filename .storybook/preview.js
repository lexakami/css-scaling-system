/**
 * Configures the "preview" iframe that renders your components.
 */
import '../src/js/helpers/polyfills/index';

import { addParameters } from '@storybook/vue';

addParameters({
    options: {
        storySort: {
            order: ['Examples', 'Design Tokens'],
        },
    },
});

// Import main SCSS file
import '../src/main.scss';

// Import styleguide specific styles
import './main.scss';
