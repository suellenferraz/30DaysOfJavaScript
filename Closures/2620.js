// Counter - Day 2

/**
 * @param {number} n - initial value of the counter
 * @return {Function} - a function that returns the next value of the counter
 */
const createCounter = function(n) {
    
    return function() {
        return n++
        
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */