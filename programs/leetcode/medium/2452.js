// brute force solution
var twoEditWords = function(queries, dictionary) {
    const valid = [];
    for (let i = 0; i < queries.length; i++) {
        for (let j = 0; j < dictionary.length; j++) {
            let nbOfEdits = 0;
            for (let s = 0; s < queries[i].length; s++) {
                if (queries[i][s] !== dictionary[j][s]) {
                    nbOfEdits++;
                    if (nbOfEdits > 2) {
                        break;
                    }
                }
            }
            if (nbOfEdits <= 2) {
                valid.push(queries[i]);
                break;
            }
        }
    }
    return valid;
};

console.log(twoEditWords(["word","note","ants","wood"], ["wood","joke","moat"]));