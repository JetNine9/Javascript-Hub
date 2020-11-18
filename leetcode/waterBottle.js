//  My solution to leetcode water bottle 1518

var numWaterBottles = function(numBottles, numExchange) {
    let maxNumber = numBottles
    let remainder = 0

    while(numBottles >= numExchange) {
        remainder = numBottles % numExchange
        numBottles = Math.floor(numBottles / numExchange)
        maxNumber += numBottles
        numBottles += remainder
    }

    return maxNumber
}
