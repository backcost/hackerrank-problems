/* Given an array of integers, find the sum of its elements.

For example, if the array [1,2,3], 1+2+3=6, so return 6. */

const simpleArraySum = (ar) => {
    var sum = 0

    for (let el of ar) {
        sum += el
    }

    return sum
}

console.log(simpleArraySum([1, 2, 3, 4, 10, 11]))
console.log(simpleArraySum([1, 2, 3]))
