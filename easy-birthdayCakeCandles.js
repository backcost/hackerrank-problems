/* You are in charge of the cake for a child's birthday. You have decided 
the cake will have one candle for each year of their total age. They 
will only be able to blow out the tallest of the candles. Count how 
many candles are tallest. */

const birthdayCakeCandles = (candles) => {
    let tallest = 0
    let count = 0
    for (let el of candles) {
        if (el > tallest) {
            tallest = el
            count = 0
        } if (el === tallest) {
            count++
        } 
    }
    return count
}

console.log(birthdayCakeCandles([3, 2, 1, 3])) // 2
console.log(birthdayCakeCandles([4, 4, 1, 3])) // 2
console.log(birthdayCakeCandles([3, 2, 7, 4, 7, 6, 7, 4])) // 3
