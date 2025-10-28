// using in-built functions
// time complexity = merge-sort(O(nlogn)) + split(O(n)) = O(nlogn)
function isAnagramUsingInbuiltFunctions(input1, input2) {
    if (input1.length !== input2.length) return false;
    input1 = input1.toLowerCase();
    input2 = input2.toLowerCase();

    const sortedInput1 = input1.split('').sort().join();
    const sortedInput2 = input2.split('').sort().join();

    if (sortedInput1 === sortedInput2) return true;
    return false;
}

console.log(isAnagramUsingInbuiltFunctions('add', 'dad'));
console.log(isAnagramUsingInbuiltFunctions('ad d', 'd ad'));
console.log(isAnagramUsingInbuiltFunctions('a dd', 'dad'));

// using map
function isAnagram(input1, input2){
    if (input1.length !== input2.length) return false;
    input1 = input1.toLowerCase();
    input2 = input2.toLowerCase();

    const inputCharCounts = {};

    for (let char of input1) {
        inputCharCounts[char] = (inputCharCounts[char] || 0) + 1;
    }
    for (let char of input2) {
        if (inputCharCounts[char]) {
            inputCharCounts--;
        }
    }

    Object.keys(inputCharCounts).forEach((key) => {
        if (inputCharCounts[key] !== 0) {
            return false;
        }
    });

    return true;
}

console.log(isAnagramUsingInbuiltFunctions('add', 'dad'));
console.log(isAnagramUsingInbuiltFunctions('ad d', 'd ad'));
console.log(isAnagramUsingInbuiltFunctions('a dd', 'dam'));