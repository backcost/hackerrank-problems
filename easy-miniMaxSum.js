/* Given five positive integers, find the minimum and maximum values 
that can be calculated by summing exactly four of the five integers. 
Then print the respective minimum and maximum values as a single line 
of two space-separated long integers. */

const miniMaxSum = (arr) => {
    arr.sort((a, b) => a - b)

    let miniSum = arr[0] + arr[1] + arr[2] + arr[3]
    let maxSum = arr[1] + arr[2] + arr[3] + arr[4]
    
    console.log(miniSum, maxSum)
}

console.log(miniMaxSum([1, 3, 5, 7, 9])) 
// 16, 24
console.log(miniMaxSum([1, 2, 3, 4, 5])) 
// 10, 14
console.log(miniMaxSum([1, 7, 3, 1, 5])) 
// 10, 16
