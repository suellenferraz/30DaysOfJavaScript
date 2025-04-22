// Execute Asynchronous Functions in Parallel - Day 19

/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
const promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        const results = [];
        let completed = 0;

        functions.forEach((fn, index) => {
            fn()
                .then((result) => {
                    results[index] = result;
                    completed += 1;
                    if (completed === functions.length) {
                        resolve(results); 
                    }
                })
                .catch((error) => {
                    reject(error); 
                });
        });
    });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */