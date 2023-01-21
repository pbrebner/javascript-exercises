const fibonacci = function(index) {

    if (index < 1) {
        return "OOPS"
    }

    let fibArray = [1,1]
    for (let i = 2; i <= index; i++) {
        fibArray[i] = fibArray[i-1] + fibArray[i-2]
    }
    //console.table(fibArray)

    return fibArray[index-1]

};

// Do not edit below this line
module.exports = fibonacci;
