// Function Composition - Day 8

/**
 * @param {Function[]} functions
 * @return {Function}
 */
const compose = function(functions) {
    if (functions.length === 0) {
        return (x) => x;
    }

    return functions.reduceRight((previousValue, nextFn) => {
        return (x) => nextFn(previousValue(x));
    });

};