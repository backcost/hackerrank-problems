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

    const countingFactors = (first, last) => {
        let sum = 0
        for (let actual = first; actual <= last; actual += first) {
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
                    sum++
                }
            }
        }
        return sum
    }

    a.sort(compare); b.sort(compare)
    const aLast = a[a.length-1] 
    const bLast = b[b.length-1]

    return countingFactors(aLast, bLast/2) + countingFactors(bLast, bLast)
}

// n/2 * (1 + 2n + 1 + 2n + 2)
// n/2 * (4n + 4)
// 2n² + 2n
// O(n²)

console.log(getTotalX([2, 6],[24, 36])) //2
console.log(getTotalX([2, 4],[16, 32, 96])) //3
console.log(getTotalX([1],[100])) //9
