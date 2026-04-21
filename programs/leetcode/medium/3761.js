// brute-force approach
// keep on dividing the number by 10 until all the digits are reversed
const reverse = (num) => {
    let reversed = 0;
    while(num > 0) {
        reversed = (reversed * 10) + (num % 10);
        num = Math.floor(num / 10);
    }
    return reversed;
};
var minMirrorPairDistance = function(nums) {
    let minDistance = nums.length;
    for (let i = 0; i < nums.length - 1; i++) { // we don't need to check the last value in array because it won't have a pair next
        const target = reverse(nums[i]);
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] === target && (j - i) < minDistance) {
                minDistance = j - i;
                break;
            }
        }
    }
    return minDistance === nums.length ? -1 : minDistance;
};

// optimal solution
// as per the question, we will always have a matching pair ahead of the current index, not the back
// create a map which will have the reverse of a number and its index
// loop the array from left to right, if the current index matches any reverse number in the map
// use it to calculate the distance
var minMirrorPairDistance2 = function(nums) {
    const reverseMap = new Map();
    let minDistance = nums.length;
    for (let i = 0; i < nums.length; i++) {
        if (reverseMap.has(nums[i])) {
            minDistance = Math.min(minDistance, i - reverseMap.get(nums[i]));
        }
        reverseMap.set(reverse(nums[i]), i);
    }
    return minDistance === nums.length ? -1 : minDistance;
};

console.log(minMirrorPairDistance2([12,21,45,33,54]));