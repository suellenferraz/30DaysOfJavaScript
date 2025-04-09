//  Apply Transform Over Each Element in Array - Day 5

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
const map = function(arr, fn) {
    const returnArray = [];

    for (let index = 0; index < arr.length; index += 1) {
        returnArray[index] = fn(arr[index], index);

    }

    return returnArray;
};