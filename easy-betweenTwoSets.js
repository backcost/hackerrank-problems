/* There will be two arrays of integers. Determine all integers that 
satisfy the following two conditions:

 1. The elements of the first array are all factors of the integer being 
considered
 2. The integer being considered is a factor of all elements of the 
second array

These numbers are referred to as being between the two arrays. 
Determine how many such numbers exist. */

const getTotalX = (a, b) => {
    const compare = (a, b) => a - b
    a.sort(compare)
    b.sort(compare)

    let between = 0
    const aLast = a[a.length-1]
    const bLast = b[b.length-1]

    for (let actual = aLast; actual <= bLast; actual += aLast) {
        let isFactor = true
        for (let el of a) {
            if (actual % el !== 0) {
                isFactor = false
                break
            }
        }
        if (isFactor) {
            for (let el of b) {
                if (el % actual !== 0) {
                    isFactor = false
                    break
                }
            }
            if (isFactor) {
                between++
            }
        }
    }
    return between
}

console.log(getTotalX([2, 6],[24, 36])) //2
console.log(getTotalX([2, 4],[16, 32, 96])) //3
console.log(getTotalX([1],[100])) //9
