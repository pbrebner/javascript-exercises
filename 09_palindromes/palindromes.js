const palindromes = function (phrase) {

    let newPhrase = phrase.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s/g,"").toLowerCase();
    let phraseLength = newPhrase.length;

    if (phraseLength % 2 == 0 ) {
        if (newPhrase.slice(0,phraseLength/2) == newPhrase.slice(phraseLength/2).split("").reverse().join("")) {
            return true
        } else return false
    }
    else {
        if (newPhrase.slice(0, Math.ceil(phraseLength/2) - 1) == newPhrase.slice(Math.ceil(phraseLength/2)).split("").reverse().join("")) {
            return true
        } else return false
    }
    
};

// Do not edit below this line
module.exports = palindromes;
