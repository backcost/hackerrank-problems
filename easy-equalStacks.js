/* You have three stacks of cylinders where each cylinder has the same 
diameter, but they may vary in height. You can change the height of a 
stack by removing and discarding its topmost cylinder any number of times.

Find the maximum possible height of the stacks such that all of the 
stacks are exactly the same height. This means you must remove zero or 
more cylinders from the top of zero or more of the three stacks until 
they are all the same height, then return the height. */

const equalStacks = (h1, h2, h3) => {
    const reducer = (a, b) => a + b // 1
    
    let h1Height = h1.reduce(reducer) // n
    let h2Height = h2.reduce(reducer) // n
    let h3Height = h3.reduce(reducer) // n
    
    let minimum = Math.min(h1Height, h2Height, h3Height) // 4

    while (h1Height !== h2Height || h1Height !== h3Height) { // log(n) * (2 + 2n + 2n + 1 + 3)
        while (h1Height > minimum) {
            h1Height -= h1.shift()
        }
        while (h2Height > minimum) {
            h2Height -= h2.shift()
        }
        while (h3Height > minimum) {
            h3Height -= h3.shift()
        }
        minimum = Math.min(h1Height, h2Height, h3Height)
    }
    return minimum
}
// 1 + 3n + 4 + log(n) * (2 + 2n + 2n + 1 + 3)
// 4n*log(n) + 6log(n) + 3n + 5 
// O(n log n)

console.log(equalStacks([3, 2, 1, 1, 1], [4, 3, 2], [1, 1, 4, 1]))
//5


// ANOTHER WAY
const equalStacks = (h1, h2, h3) => {
    const reducer = (a, b) => a + b // 1
    
    const has_to_remove = (sum, arr, min) => { // 1
        if (sum !== min) {
            sum = sum - arr.shift()
        }
        return sum
    }

    let h1Height = h1.reduce(reducer) // n
    let h2Height = h2.reduce(reducer) // n
    let h3Height = h3.reduce(reducer) // n
    
    while (true) { // n * (4 + 2 + 2 + 2 + 1)
        let minimum = Math.min(h1Height, h2Height, h3Height)
        if (h1Height === h2Height && h1Height === h3Height) {
            return minimum
        }
        h1Height = has_to_remove(h1Height, h1, minimum)
        h2Height = has_to_remove(h2Height, h2, minimum)
        h3Height = has_to_remove(h3Height, h3, minimum)
    }
}

// 1 + 1 + 3n + 11n
// 14n + 2
// O(n)
