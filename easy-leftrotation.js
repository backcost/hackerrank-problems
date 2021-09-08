/* A left rotation operation on an array of size n shifts each of the 
array's elements 1 unit to the left. Given an integer, d, rotate the 
array that many steps left and return the result. */

const rotateLeft = (d, arr) => {
    let rotated = []

    for (let i = d; i < arr.length; i++) {
        rotated.push(arr[i])
    }
    for (let i = 0; i < d; i++) {
        rotated.push(arr[i])
    }
    return rotated
}

console.log(rotateLeft(4, [1, 2, 3, 4, 5]))
//[5, 1, 2, 3, 4]

console.log(rotateLeft(2, [1, 2, 3, 4, 5]))
//[3, 4, 5, 1, 2]
