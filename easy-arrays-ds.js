/* An array is a type of data structure that stores elements of the 
same type in a contiguous block of memory. In an array, A, of size N, 
each memory location has some unique index, i (where 0 <= i < N), 
that can be referenced as A[i] or Ai.

Reverse an array of integers. */

const reverseArray = (arr) => {
    return arr.reverse()
}

console.log(reverseArray([1, 2, 3])) 
// [3, 2, 1]
console.log(reverseArray([1, 4, 3, 2])) 
// [2, 3, 4, 1]
