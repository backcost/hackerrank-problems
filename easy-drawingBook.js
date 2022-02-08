/* https://www.hackerrank.com/challenges/drawing-book/problem?isFullScreen=false
*/

const pageCount = (n, p) => {
    let first = Math.floor(p/2)
    let last = Math.floor((n - p)/2)

    if (n % 2 === 0) {
        last = Math.ceil((n - p)/2)
    }
    return Math.min(first, last)
    
}

console.log(pageCount(5, 3))
// 1
console.log(pageCount(6, 2))
// 1
console.log(pageCount(5, 4))
// 0
console.log(pageCount(6, 5))
// 1