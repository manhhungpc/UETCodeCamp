// https://www.hackerrank.com/challenges/js10-arrows/problem?isFullScreen=true
const arr = [1, 2, 3, 4, 5];

const modifyArray = (nums) => {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) nums[i] = nums[i] * 2;
        else nums[i] = nums[i] * 3;
    }
    return nums;
};

console.log(modifyArray(arr));
