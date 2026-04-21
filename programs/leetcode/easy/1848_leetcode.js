// an absolute number is the distance of that number from 0 on the number line (whether it's positive or negative)
// it's the modulus of a number
// |-5| = 5, |5| = 5, |0| = 0

// this function is only for me to see that -num can be used in javascript to invert a number
// use Math.abs() instead
const getAbsoluteNumber = (num) => {
    if (num < 0) {
        return -num;
    }
    return num;
};

// in the problem statement, it is given that target will always be there
// however, start doesn't mean that we will find number only after the start index
// it can be present before start also
// therefore, the loop starts from 0th index
var getMinDistance = function(nums, target, start) {
    // we have to minimise i-start
    // it's maximum value can be if i is 0 and start is nums.length-1 or vice-versa
    // so, we will keep the minAbs as nums.length
    let minAbs = nums.length;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target && (getAbsoluteNumber(i - start) < minAbs)) {
            minAbs = getAbsoluteNumber(i - start);
        }
    }
    return minAbs;
};

console.log(getMinDistance([1,1,1,1,1,1,1,1,1,1], 1, 0));