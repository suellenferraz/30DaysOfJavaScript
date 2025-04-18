// Promise Time Limit - Day 16

/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
const timeLimit = function(fn, t) {
    return async function(...args) {
        return Promise.race([
            Promise.resolve(fn(...args)),
            new Promise((_, reject) =>
                setTimeout(() => reject("Time Limit Exceeded"), t)
            )
        ]);
    }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // Error: Time Limit Exceeded at t=100ms
 */