/**
 * Vue props validator method validating if a value is part of a list of options
 *
 * This is a function returning a function that receives the value, the list of options is provided when called.
 *
 * @param {String[]} options
 * @returns function(*): *
 */
export const oneOf = (options) => {
    return (value) => {
        // using .indexOf() instead of .include() for IE11 compatibility reasons
        const isValid = options.indexOf(value) !== -1;
        if (!isValid) {
            console.error(value, 'is not one of:', options);
        }
        return isValid;
    };
};

/**
 * Vue props validator ensuring an object is a usable source of attributes for <img> element
 * Optionally allows to skip a set of keys in the object.
 *
 * @param {string|String[]} skipKeys
 * @returns function(*): *
 */
export const isImg = (skipKeys) => {
    return (valueObj) => {
        let dataKeys = ['src', 'srcset', 'alt', 'width', 'height'];

        if (skipKeys) {
            dataKeys = dataKeys.filter((key) => skipKeys.indexOf(key) === -1);
        }

        // has all keys and no values are empty
        return (
            dataKeys.every((key) => Object.keys(valueObj).indexOf(key) !== -1) &&
            Object.values(valueObj).every((value) => !!value)
        );
    };
};

/**
 * Vue props validator ensuring an object is a usable source of attributes for <picture> element
 * Optionally allows to skip a set of keys in the object.
 *
 * @param {String|String[]} skipKeys
 * @returns function(*): *
 */
export const isPicture = (skipKeys) => {
    return (valueObj) => {
        let dataKeys = ['src', 'sources', 'alt', 'width', 'height'];

        if (skipKeys) {
            dataKeys = dataKeys.filter((key) => skipKeys.indexOf(key) === -1);
        }

        // has all keys and no values are empty
        return (
            dataKeys.every((key) => Object.keys(valueObj).indexOf(key) !== -1) &&
            Object.values(valueObj).every((value) => !!value) &&
            Array.isArray(valueObj.sources)
        );
    };
};

/**
 * Compose URL safe key from any number of parts
 *
 * @param parts
 * @returns string
 */
export const compositeKey = (...parts) => {
    return parts.join('-').replace(/[^a-z0-9-]/gi, '');
};

/**
 * Converts a px value to em unit.
 * This should only be used for any px values within image sizes attributes.
 *
 * @param {Number} pxValue
 * @returns string
 */
export const em = (pxValue) => {
    return `${pxValue / 16}em`;
};

/**
 * Converts a px value to rem unit.
 *
 * @param {Number} pxValue
 * @param {Boolean} hasUnit - Defaults to true
 * @returns string|Number
 */
export const rem = (pxValue, hasUnit) => {
    if (hasUnit !== false) hasUnit = true;

    if (!hasUnit) {
        return pxValue / 10;
    }

    return `${pxValue / 10}rem`;
};
