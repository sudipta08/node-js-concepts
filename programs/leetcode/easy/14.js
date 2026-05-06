var longestCommonPrefix = function(strs) {
    let prefix = '';
    for (let i = 0; i < strs[0].length; i++) { // loop through every character of the first word
        const char = strs[0][i];
        for (let j = 1; j < strs.length; j++) { // loop through every word in the array
            // exit when the length of word equals the index of first letter (which means word is shorter than the first word in array)
            // or we hit a different character
            if (i === strs[j].length || strs[j][i] !== char) {
                return prefix;
            }
        }
        prefix += char;
    }

    return prefix;
};