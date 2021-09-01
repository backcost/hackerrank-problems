/* You have three stacks of cylinders where each cylinder has the same 
diameter, but they may vary in height. You can change the height of a 
stack by removing and discarding its topmost cylinder any number of times.

Find the maximum possible height of the stacks such that all of the 
stacks are exactly the same height. This means you must remove zero or 
more cylinders from the top of zero or more of the three stacks until 
they are all the same height, then return the height. */

const equalStacks = (h1, h2, h3) => {
    var h1Height = 0
    var h2Height = 0
    var h3Height = 0
        
    for (let el of h1) {
        h1Height += el
    }
    for (let el of h2) {
        h2Height += el
    }
    for (let el of h3) {
        h3Height += el
    }
    var minimum = Math.min(h1Height, h2Height, h3Height)

    while (h1Height !== h2Height && h1Height !== h3Height) {
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

var h1 = [3, 2, 1, 1, 1]
var h2 = [4, 3, 2]
var h3 = [1, 1, 4, 1]

console.log(equalStacks(h1, h2, h3))
