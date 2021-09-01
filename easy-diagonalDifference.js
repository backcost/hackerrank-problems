/* Given a square matrix, calculate the absolute difference between the 
sums of its diagonals. */

const diagonalDifference = (arr) => {
    var down = 0
    var up = 0
    var difference = 0

    for (let row in arr) {
        down += arr[row][row]
        up += arr[row][arr.length-row-1]
    }
    
    difference = Math.abs(down - up)

    return difference
}

console.log(diagonalDifference([[1, 2, 3],[4, 5, 6],[9, 8, 9]])) // 2
console.log(diagonalDifference([[11, 2, 4],[4, 5, 6],[10, 8, -12]])) // 15
