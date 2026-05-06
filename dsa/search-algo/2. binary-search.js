// binary search is used when we have a sorted array
// in this pattern, we repeatedly half the section in which we need to find the target element
function binarySearch(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while(left <= right) {
        const middle = Math.floor((right + left)/2);
        if (nums[middle] === target) {
            return middle;
        } else if (nums[middle] > target) {
            right = middle - 1;
        } else if (nums[middle] < target) {
            left = middle + 1;
        }
    }

    return -1;
}

console.log(binarySearch([2,3,10, 11], 31));