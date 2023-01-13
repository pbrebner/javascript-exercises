const repeatString = function(phrase, numRepeat) {

    let combinedPhrase = '';

    if (numRepeat < 0) {
        combinedPhrase += 'ERROR'
    }

    for (let i = 1; i <= numRepeat; i++) {
        combinedPhrase += phrase;
    }

    return combinedPhrase
};

// Do not edit below this line
module.exports = repeatString;
