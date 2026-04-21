// brute-force
// time complexity - O(n^2)
function bruteTwoSum(nums, target) {
    for (let i = 0; i < nums.length - 1; i++) { // we don't need the last element, because if we haven't found the match yet, we will never find it
        for (let j = i + 1; j < nums.length; j++ ) {
            if (nums[i] + nums[j] === target) {
                console.log([i, j]);
                return [i, j];
            }
        }
    }
}
bruteTwoSum([2,7,11,15], 9);
bruteTwoSum([3,2,4], 6);
bruteTwoSum([3,3], 6);

// optimised
// we create a map which contains the number and its index that we have already iterated
// we iterate through the entire array once
// for each element, we check if the number required to achieve the target value is present in the map, then we can directly return the result
// time complexity - O(n)
function optimisedTwoSum(nums, target) {
    const iterated = {}; // number: index
    for (let i = 0; i < nums.length; i++) {
        const remaining = target - nums[i];
        if (iterated.hasOwnProperty(remaining)) {
            console.log([iterated[remaining], i]);
            return [iterated[remaining], i];
        }
        iterated[nums[i]] = i;
    };
}
optimisedTwoSum([2,7,11,15], 9);
optimisedTwoSum([3,2,4], 6);
optimisedTwoSum([3,3], 6);