// Given an array of integers, determine the minimum number of 
// elements to delete to leave only elements of equal value.

const equalizeArray = (arr) => {
    let mostRepeated = null
    let howMuch = null

    for (let el of arr) {
        var equal = 0

        for (let el2 of arr) {
            if (el === el2) {
                equal++
            }
        }
        if (equal > howMuch) {
            howMuch = equal
            mostRepeated = el
        }
    }
    let minimumDeletions = arr.length - howMuch
    
    return minimumDeletions
}

console.log(equalizeArray([1, 2, 2, 3])) // 2
console.log(equalizeArray([3, 3, 2, 1, 3])) // 2
console.log(equalizeArray([1, 2, 2, 1, 1, 2, 1, 4])) // 4
