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
