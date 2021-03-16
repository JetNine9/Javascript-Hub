
// 1790. Check if One String Swap Can Make Strings Equal

var areAlmostEqual = function(s1, s2) {
    if (s1 === s2) {return true}

    let pointer2 = 1;
    let stringArray = s2.split('')


    for (let i = 0; i < s1.length; i ++) {
        pointer2 = i + 1;

        while (pointer2 < s2.length) {
        stringArray = s2.split('')
        let temp = stringArray[i]
        stringArray[i] = stringArray[pointer2]
        stringArray[pointer2] = temp

        if(stringArray.join('') === s1) {
            return true
        }

            pointer2 ++;
        }


    }

    return false;

};
