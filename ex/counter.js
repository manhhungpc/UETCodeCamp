// https://leetcode.com/problems/counter-ii/submissions/950217224/
/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
    let save = init;
    const x = { firstName: "Hung" };
    x.firstName;
    return {
        increment: () => (save += 1),
        decrement: function () {
            // save--;
            return (save -= 1);
        },
        reset: () => (save = init),
    };

    // return methods;
};
const counter = createCounter(5);
// counter.increment()
// counter.increment
console.log(counter.increment()); // 6
console.log(counter.increment()); // 7
console.log(counter.increment()); // 8
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
