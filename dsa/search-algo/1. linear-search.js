// linear search is used when we do not have a sorted array
// we loop through the entire array to find the target
function linearSearch(nums, target){
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] === target) {
          return i;
      }
  }
  return - 1;
}

console.log(linearSearch([10,3,2], 12));