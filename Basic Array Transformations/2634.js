// Filter Elements from Array - Day 6

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
const filter = function(arr, fn) {
    const filteredArray = [];

        for (let index = 0; index < arr.length; index += 1) {
            if (fn(arr[index], index)) {
                filteredArray.push(arr[index]);
            }
        }


    return filteredArray;
};