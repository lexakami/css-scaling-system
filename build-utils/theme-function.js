const sassVars = require('../src/theme.js');
const sass = require('node-sass');
const sassUtils = require('node-sass-utils')(sass);

/**
 * Converts a css unit from a String to a sass dimension so we can run calculations if needed
 * @param  {String} result   CSS value
 */
const convertStringToSassDimension = function (result) {
    // Only attempt to convert strings
    if (typeof result !== 'string') {
        return result;
    }
    const cssUnits = [
        'rem',
        'em',
        'vh',
        'vw',
        'vmin',
        'vmax',
        'ex',
        '%',
        'px',
        'cm',
        'mm',
        'in',
        'pt',
        'pc',
        'ch',
    ];
    const parts = result.match(/[a-zA-Z]+|[.0-9]+/g);
    const value = parts[0];
    const unit = parts[parts.length - 1];
    if (cssUnits.indexOf(unit) !== -1) {
        result = new sassUtils.SassDimension(parseFloat(value), unit);
    }
    return result;
};

/**
 * String in dot notation refering to location in the theme.js object
 * @param  {string} keys   CSS value
 */
const themeFunction = function (keys) {
    const keysArr = keys.getValue().split('.');
    let result = sassVars;
    let i;
    for (i = 0; i < keysArr.length; i++) {
        result = result[keysArr[i]];
        if (typeof result === 'string') {
            result = convertStringToSassDimension(result);
        } else if (typeof result === 'object') {
            Object.keys(result).forEach(function (key) {
                const value = result[key];
                result[key] = convertStringToSassDimension(value);
            });
        } else {
            break;
        }
    }
    if (result === undefined) {
        console.warn(`\nWARNING: ${keys.getValue()} is undefined`);
    }
    result = sassUtils.castToSass(result);
    return result;
};

module.exports = themeFunction;
