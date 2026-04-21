// brute-force approach is super-easy
// think about it, we need to run nested for loops

// optimal solution
// maximum distance will be from the first house to a different house on the end
// or distance from last house to a different house from the front
var maxDistance = function(colors) {
    let maxDistance = 0;
    let i = 0;
    let j = colors.length - 1;
    // find a different house farthest from the start, by decrementing the counter on the end
    while (colors[i] === colors[j]) {
        j--;
    }
    maxDistance = j - i;

    j = colors.length - 1;
    // find a different house farthest from the end, by incrementing the counter from the start
    while (colors[j] === colors[i]) {
        i++;
    }
    maxDistance = Math.max(maxDistance, j - i);

    return maxDistance;
};