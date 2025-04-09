// Array Reduce Transformations - Day 7

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
const reduce = function(nums, fn, init) {
    let val = init;

    for (let index = 0; index < nums.length; index += 1) {
        val = fn(val, nums[index], index);
    }

    return val;
    
};