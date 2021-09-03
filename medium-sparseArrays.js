/* There is a collection of input strings and a collection of query 
strings. For each query string, determine how many times it occurs in 
the list of input strings. Return an array of the results. */

const matchingStrings = (strings, queries) => {
    var totalArray = []

    for (let query of queries) {
        var total = 0

        for (let el of strings) {
            if (query === el) {
                total++
            }
        }
        totalArray.push(total)
    }
    return totalArray
}

console.log(matchingStrings(['ab','ab','abc'], ['ab','abc','bc'])) // [2,1,0]
console.log(matchingStrings(['aba','baba','aba','xzxb'], ['aba','xzxb','ab'])) // [2,1,0]
console.log(matchingStrings(['def','de','fgh'], ['de','lmn','fgh'])) // [1,0,1]
console.log(matchingStrings(['abcde',
    'sdaklfj',
    'asdjf',
    'na',
    'basdn',
    'sdaklfj',
    'asdjf',
    'na',
    'asdjf',
    'na',
    'basdn',
    'sdaklfj',
    'asdjf'], ['abcde','sdaklfj','asdjf','na','basdn'])) // [1,3,4,3,2]
