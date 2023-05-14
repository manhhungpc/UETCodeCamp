// https://leetcode.com/problems/palindrome-number/submissions/950207992/
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    // const orginalStr = String(x);
    const str = x.toString();
    for (let i = str.length - 1; i >= str.length / 2; i--) {
        if (str[i] !== str[str.length - i - 1]) return false;
    }
    console.log(str, typeof str);
    return true;
};

// 1221;
console.log(isPalindrome(2345));
