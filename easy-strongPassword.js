/* Louise joined a social networking site to stay in touch with her friends. The signup page required her to input a name and a password. However, the password must be strong. The website considers a password to be strong if it satisfies the following criteria:

    Its length is at least 6.
    It contains at least one digit.
    It contains at least one lowercase English character.
    It contains at least one uppercase English character.
    It contains at least one special character. The special characters are: !@#$%^&*()-+

She typed a random string of length  in the password field but wasn't sure if it was strong. Given the string she typed, can you find the minimum number of characters she must add to make her password strong? */


const isNumber = (character) => {
    const numbers = "0123456789"
    return numbers.includes(character)
}

const isLowerCase = (character) => {
    const lowerCase = "abcdefghijklmnopqrstuvwxyz"
    return lowerCase.includes(character)
}

const isUpperCase = (character) => {
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    return upperCase.includes(character)
}

const isSpecialCharacter = (character) => {
    const specialCharacters = "!@#$%^&*()-+"
    return specialCharacters.includes(character)
}

const countCriteria = (password) => {
    let hasNumber = false
    let hasLowerCase = false
    let hasUpperCase = false
    let hasSpecialCharacter = false
    let countCriteria = 0
    
    for (let el of password) {
        if (isNumber(el)) {
            if (!hasNumber) {
                hasNumber = true
                countCriteria++
            }
        } else if (isLowerCase(el)) {
            if (!hasLowerCase) {
                hasLowerCase = true
                countCriteria++
            }
        } else if (isUpperCase(el)) {
            if (!hasUpperCase) {
                hasUpperCase = true
                countCriteria++
            }
        } else {
            if (!hasSpecialCharacter) {
                hasSpecialCharacter = true
                countCriteria++
            }
        }
    }
    return countCriteria
}

const minimumNumber = (n, password) => {
    let addByCriteria = (4 - countCriteria(password))
    let actualPasswordLength = addByCriteria + (n - 6)

    if (actualPasswordLength < 0) {
        return Math.abs(n - 6)
    }
    return addByCriteria
}

console.log(minimumNumber(5, '2bbb'))
// 2

console.log(minimumNumber(5, '2bb#A'))
// 1

console.log(minimumNumber(3, 'Ab1'))
// 3

console.log(minimumNumber(11, '#HackerRank'))
// 1
