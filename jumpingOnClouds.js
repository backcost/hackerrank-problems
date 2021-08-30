// There is a new mobile game that starts with consecutively numbered 
// clouds. Some of the clouds are thunderheads and others are cumulus. 
// The player can jump on any cumulus cloud having a number that is 
// equal to the number of the current cloud plus 1 or 2. The player 
// must avoid the thunderheads. Determine the minimum number of jumps 
// it will take to jump from the starting postion to the last cloud. 
// It is always possible to win the game.

// For each game, you will get an array of clouds numbered 0 if they 
// are safe or 1 if they must be avoided.

const jumpingOnClouds = (c) => {
    let jumps = 0

    for (let index = 0; index < c.length - 1; index++) {
        if (c[index] === 0) {
            index++
        }
        jumps++
    }
    return jumps
}

console.log(jumpingOnClouds([0, 1, 0, 0, 0, 1, 0])) // 3
console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0])) // 4
console.log(jumpingOnClouds([0, 0, 0, 0, 1, 0])) // 3
