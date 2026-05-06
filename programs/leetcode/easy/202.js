const getSquare = (n) => {
    let sum = 0;
    while (n) {
        const remainder = n % 10;
        n = Math.floor(n / 10);
        sum += (remainder * remainder);
    }
    return sum;
};
var isHappy = function(n) {
    const alreadySeen = new Set();
    // do not enter the loop if the number has already been squared
    // if it's already squared that means it will never yield 1
    while (n !== 1 && !alreadySeen.has(n)) {
        alreadySeen.add(n);
        n = getSquare(n);
    }

    return (n === 1);
};