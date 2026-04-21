var lengthOfLastWord = function(s) {
    let length = 0;

    let characterFound = false;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === ' ') {
            if (!characterFound) continue; // on second thought, it's not needed
            if (characterFound) break;
        } else {
            if (!characterFound) characterFound = true;
            length++;
        }
    }

    return length;
};

console.log(lengthOfLastWord('Hello World   '));