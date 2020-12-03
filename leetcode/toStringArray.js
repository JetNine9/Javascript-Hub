// leetcode 1662


var arrayStringsAreEqual = function(word1, word2) {
    let x = word1.join('')
    let y = word2.join('')

  if (x === y) {
      return true
  }
    return false
};
