var minBitwiseArray = function(nums) {
    const ans = [];

    for (let i = 0; i < nums.length; i++) {
        for (let j = 1; j < nums[i]; j++) {
            const val = j | (j + 1);
            if (val === nums[i]) {
                ans.push(j);
                break;
            }
        }
        if (!ans[i]) {
            ans.push(-1);
        }
    }

    console.log(ans);
    return ans;
};

minBitwiseArray([2,3,5,7])