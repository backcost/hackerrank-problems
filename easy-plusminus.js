/* Given an array of integers, calculate the ratios of its elements 
that are positive, negative, and zero. Print the decimal value of 
each fraction on a new line with 6 places after the decimal.

Note: This challenge introduces precision problems. The test cases are 
scaled to six decimal places, though answers with absolute error of up 
to 10^-4 are acceptable. */


const plusMinus = (arr) => {
    var positive = 0, negative = 0, zero = 0

    for (let el of arr) {

        if (el > 0) {
            positive++
        } else if (el < 0) {
            negative++
        } else {
            zero++
        }
    }

    const positiveRatio = (positive/arr.length).toFixed(6)
    const negativeRatio = (negative/arr.length).toFixed(6)
    const zeroRatio = (zero/arr.length).toFixed(6)

    console.log(positiveRatio)
    console.log(negativeRatio)
    console.log(zeroRatio)
}

console.log(plusMinus([1, 1, 0, -1, -1])) 
// 0.400000, 0.400000, 0.200000
console.log(plusMinus([-4, 3, -9, 0, 4, 1])) 
// 0.500000, 0.333333, 0.166667
