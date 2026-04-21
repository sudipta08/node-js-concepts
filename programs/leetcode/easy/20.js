// every time, we encounter an opening brace, we push it to the stack
// every time, we encounter a closing brace, we pop from the stack and check if it is the corresponding opening brace
var isValid = function(s) {
    let isValid = true;
    const openingBraces = ['(', '{', '['];
    const closingBraces = [')', '}', ']'];
    const bracesMap = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    const bracesStack = [];

    for (let i = 0; i < s.length; i++) {
        if (openingBraces.includes(s[i])) {
            bracesStack.push(s[i]);
        } else {
            if (bracesMap[bracesStack.pop()] !== s[i]) {
                isValid = false;
                break;
            }
        }
    }

    return isValid && !bracesStack.length;
};