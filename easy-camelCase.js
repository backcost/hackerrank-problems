const camelcase = (s) => {
    let words = 1
    for (let letter of s) {
        if (letter === letter.toUpperCase()) {
            words++
        }
    }
    return words
}

console.log(camelcase('saveChangesInTheEditor')) // 5
console.log(camelcase('chocolateEMuitoBom')) // 4
console.log(camelcase('oneTwoThree')) // 3
