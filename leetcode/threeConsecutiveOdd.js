// Leetocde 1550


var threeConsecutiveOdds = function(arr) {

    let count = 0;

    for (let num of arr) {

        if (num % 2 !== 0) {
            count ++
        } else {
            count = 0;
        }

        if (count === 3) {
            return true
        }
    }

    return false

};