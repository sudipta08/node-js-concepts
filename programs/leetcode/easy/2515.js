// we need the shortest distance of a target number from the start index
// direct distance will be |targetIndex - startIndex|
// circular distance will be n - direct distance
var closestTarget = function(words, target, startIndex) {
    let shortestDistance = words.length;
    for (let i = 0; i < words.length; i++) {
        if (words[i] === target) {
            const directDistance = Math.abs(i - startIndex);
            const circularDistance = words.length - directDistance;
            shortestDistance = Math.min(shortestDistance, directDistance, circularDistance);
        }
    }

    return shortestDistance === words.length ? -1 : shortestDistance;
};