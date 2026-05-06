// less optimal solution
var singleNumber = function(nums) {
    const numMap = {};
    for (let i = 0; i < nums.length; i++) {
        if (numMap[nums[i]]) {
            numMap[nums[i]]++;
        } else {
            numMap[nums[i]] = 1;
        }
    }
    for (let key in numMap) {
        if (numMap[key] === 1) {
            return key;
        }
    }
};
console.log(singleNumber([2,2,1]));

// optimal solution
// using xor operator
// it compares bits of two numbers, if bit is same, it returns 0, otherwise 1
// which means, 2^2=0 and 5^3=6(convert 5 and 3 into binary numbers)
var singleNumber1 = function(nums) {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        result ^= nums[i];
    }
    return result;
};
console.log(singleNumber1([2,2,1]));
