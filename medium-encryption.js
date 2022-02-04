/* https://www.hackerrank.com/challenges/encryption/problem?isFullScreen=false
*/

const encryption = (s) => {
    const noSpace = s.replace(/\s+/g,'')
    const countLetters = noSpace.length
    let totalRows = Math.floor(Math.sqrt(countLetters))
    const totalColumns = Math.ceil(Math.sqrt(countLetters))

    if (totalColumns * totalRows < countLetters) {
        totalRows++
    }

    let encrypted = ''
    for (let column = 0; column < totalColumns; column++) {
        for (let row = 0; row < totalRows; row++) {
            let add = noSpace[column+totalColumns*row]
            if (add) {
                encrypted += add
            }
        }
        encrypted += ' '
    }
    return encrypted
}

console.log(encryption('if man was meant to stay on the ground god would have given us roots'))
//imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau
console.log(encryption('have a nice day'))
//hae and via ecy
console.log(encryption('feed the dog'))
//fto ehg ee dd
console.log(encryption('chillout'))
//clu hlt io