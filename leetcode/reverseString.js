// leetcode 344 reverse string without allocating any extra space for new array

var reverseString = function(s) {

    let left = 0;
    let right = s.length - 1

    while (left <= right) {

        let leftSide = s[left]
        let rightSide = s[right]

        s[left] = rightSide
        s[right] = leftSide


        left++
        right--
    }

    return s

};
