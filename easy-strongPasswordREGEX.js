/* Louise joined a social networking site to stay in touch with her friends. The signup page required her to input a name and a password. However, the password must be strong. The website considers a password to be strong if it satisfies the following criteria:

    Its length is at least 6.
    It contains at least one digit.
    It contains at least one lowercase English character.
    It contains at least one uppercase English character.
    It contains at least one special character. The special characters are: !@#$%^&*()-+

She typed a random string of length  in the password field but wasn't sure if it was strong. Given the string she typed, can you find the minimum number of characters she must add to make her password strong? */


const isNumber = (character) => {
    return /(\d)/g.test(character)
}

const isLowerCase = (character) => {
    return /([a-z])/g.test(character)
}

const isUpperCase = (character) => {
    return /([A-Z])/g.test(character)
}

const countCriteriaSatisfied = (password) => {
    let hasNumber = false
    let hasLowerCase = false
    let hasUpperCase = false
    let hasSpecialCharacter = false
    let counter = 0
    
    for (let el of password) {
        if (isNumber(el)) {
            if (!hasNumber) {
                hasNumber = true
                counter++
            }
        } else if (isLowerCase(el)) {
            if (!hasLowerCase) {
                hasLowerCase = true
                counter++
            }
        } else if (isUpperCase(el)) {
            if (!hasUpperCase) {
                hasUpperCase = true
                counter++
            }
        } else {
            if (!hasSpecialCharacter) {
                hasSpecialCharacter = true
                counter++
            }
        }
    }
    return counter
}

const minimumNumber = (n, password) => {
    let addByCriteria = (4 - countCriteriaSatisfied(password))
    let newPasswordIsBiggerThanSix = addByCriteria + n - 6

    if (newPasswordIsBiggerThanSix > 0) {
        return addByCriteria
    }
    return Math.abs(n - 6)
}

console.log(minimumNumber(5, '2bbb'))
// 2

console.log(minimumNumber(5, '2bb#A'))
// 1

console.log(minimumNumber(3, 'Ab1'))
// 3

console.log(minimumNumber(11, '#HackerRank'))
// 1
