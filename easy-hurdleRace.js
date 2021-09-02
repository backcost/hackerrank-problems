// A video player plays a game in which the character competes
// in a hurdle race. Hurdles are of varying heights, and the 
// characters have a maximum height they can jump. There is a 
// magic potion they can take that will increase their maximum 
// jump height by  unit for each dose. How many doses of the potion 
// must the character take to be able to jump all of the hurdles. 
// If the character can already clear all of the hurdles, return 0.


const hurdleRace = (k, height) => {
    let max = Number(height[0])

    for(let element of height) {
        if (Number(element) > max) {
            max = Number(element)
        }
    }
    var doses = max - k

    if (doses < 0) {
        return 0
    }
    return doses
}

console.log(hurdleRace(1, [1, 2, 3, 3, 2])) // 2
console.log(hurdleRace(4, [1, 6, 3, 5, 2])) // 2
console.log(hurdleRace(7, [2, 5, 4, 5, 2])) // 0
console.log(hurdleRace(2, [5, 1, 4, 3, 3])) // 3 
console.log(hurdleRace(1, [4, 6, 1, 3, 7])) // 6
