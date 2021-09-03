/* Starting with a 1-indexed array of zeros and a list of operations, 
for each operation add a value to each the array element between two 
given indices, inclusive. Once all operations have been performed, 
return the maximum value in the array. */

const arrayManipulation = (n, queries) => {
    const array = Array(n).fill(0)
    
    for (let query of queries) {
        for (let i = query[0] - 1; i < query[1]; i++) {
            var oldValue = array[i]
            array[i] = (query[2] + oldValue)
        }
    }
    return Math.max(...array)
}

console.log(arrayManipulation(10, [[1,5,3], [4,8,7], [6,9,1]])) //10
console.log(arrayManipulation(5, [[1,2,100], [2,5,100], [3,4,100]])) //200
