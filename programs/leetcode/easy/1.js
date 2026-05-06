var twoSum = function(nums, target) {
    let result;
    const iterated = {}; // all the iterated elements
    for (let i = 0; i < nums.length; i++) {
        const remaining = target - nums[i];
        if (iterated.hasOwnProperty(remaining)) {
            result = [iterated[remaining], i];
            break;
        }
        iterated[nums[i]] = i;
    }
    return result;
};

console.log(twoSum([2,7,11,15], 9));