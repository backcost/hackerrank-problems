const camelCase = (s) => {
    let words = 1
    for (let letter of s) {
        if (letter === letter.toUpperCase()) {
            words++
        }
    }
    return words
}

console.log(camelCase('saveChangesInTheEditor')) // 5
console.log(camelCase('chocolateEMuitoBom')) // 4
console.log(camelCase('oneTwoThree')) // 3
