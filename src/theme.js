module.exports = {
    /**
     * Used to set the base value for the spacing scale.
     */
    baseSize: 16,
    /**
     * Max line length which should be used with the `ch` unit
     */
    maxLineLength: {
        short: 58,
        default: 65,
        long: 73,
    },
    color: {
        green: {
            900: '#00413C',
            800: '#007664',
            700: '#008763',
            600: '#009870',
            500: '#00C590',
            300: '#53A746',
            200: '#99D6C6',
            100: '#CCEBE3',
        },
        yellow: {
            200: '#F6F3AD',
            100: '#FFFECC',
        },
        red: {
            500: '#F85159',
        },
        grey: {
            900: '#101010',
            600: '#757575',
            400: '#F3F2F0',
            100: '#F9F9F9',
        },
        black: '#000000',
        white: '#ffffff',
    },
    fontFamily: {
        sans: ['Metric', 'Helvetica', 'Arial', 'sans-serif'],
        serif: ['Georgia', 'serif'],
    },
    /**
     * Ratio for font to scale by.
     * @see variables-css.scss/variables-sass.scss for variables to use in font sizing
     */
    fontRatio: 1.125,
    /**
     * Ratio for spacing to scale by.
     * @see variables-css.scss/variables-sass.scss for variables to use in spacing
     */
    spacingRatio: 1.125,
    /**
     * Font weights available for each font family.
     * This should be updated to ensure that only valid font weights are used.
     */
    fontWeight: {
        sans: {
            thin: 100,
            light: 300,
            normal: 400,
            medium: 500,
            semiBold: 600,
            bold: 700,
            black: 900,
        },
    },
    /**
     * Line heights use unitless values to ensure they scale with the font size.
     */
    lineHeight: {
        '-5': 1,
        '-3': 1.125,
        '-2': 1.25,
        '-1': 1.375,
        0: 1.5,
        1: 1.625,
        2: 1.75,
        3: 1.875,
        4: 2,
    },
    /**
     * Letter spacing should use em units when used directly, however they are
     * left out here to ensure they are compatible with the scaling spacing mixin.
     * @see scale-rem.scss
     * @example letter-spacing: #{theme('letterSpacing.1')}em;
     */
    letterSpacing: {
        '-2': '-.05',
        '-1': '-.025',
        0: '0',
        1: '.025',
        2: '.05',
        3: '.1',
    },
    /**
     * Used in the scale-rem mixin to determine the min and max of the viewport scale.
     */
    containerWidth: {
        mobile: 360,
        wide: 1215,
        extraWide: 1600,
    },
    focusOutlineWidth: 2,
    iconTransform: {
        default: '50%',
        diagonal: '25%',
        expand: 1.25,
    },
    link: {
        transitionTiming: 'ease-in-out',
        transitionDuration: '.15s',
    },
    /**
     * Breakpoints should be added here when re-used across multiple files,
     * otherwise should be left in their component.
     * These should be max width breakpoints (+1 for min width).
     */
    breakpoints: {
        sectionBlock: {
            medium: 899,
            large: 1349,
        },
        hero: 699,
        nav: 919,
    },
};
