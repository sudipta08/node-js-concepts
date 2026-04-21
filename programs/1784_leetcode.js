var checkOnesSegment = function(s) {
    let previousCharacter;
    let onesSegmentFound = false;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '1' && previousCharacter === '1') {
            if (onesSegmentFound) {
                onesSegmentFound = false;
                break;
            } else {
                onesSegmentFound = true;
            }
        }
        previousCharacter = s[i];
    }
    return onesSegmentFound;
};

console.log(checkOnesSegment('110'));