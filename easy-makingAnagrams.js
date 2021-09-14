/* A student is taking a cryptography class and has found anagrams to 
be very useful. Two strings are anagrams of each other if the first 
string's letters can be rearranged to form the second string. In other 
words, both strings must contain the same exact letters in the same 
exact frequency. For example, bacdc and dcbac are anagrams, but bacdc 
and dcbad are not.

The student decides on an encryption scheme that involves two large 
strings. The encryption is dependent on the minimum number of character 
deletions required to make the two strings anagrams. Determine this 
number.

Given two strings, a and b, that may or may not be of the same length, 
determine the minimum number of character deletions required to make a 
and b anagrams. Any characters can be deleted from either of the strings. */

const makeAnagram = (a, b) => {
    a = a.split('')
    b = b.split('')

    let remove = 0

    for (let indexA = 0; indexA < a.length; indexA++) {
        let bIncludes = b.indexOf(a[indexA])

        if (bIncludes === -1) {
            remove++
        } else {
            b.splice(bIncludes, 1)
        }
        a.shift()
        indexA--
    }  
    remove += b.length

    return remove 
}

console.log(makeAnagram('cde', 'dcf')) // 2
console.log(makeAnagram('cde', 'abc')) // 4
console.log(makeAnagram('cde', 'abcef')) // 4
console.log(makeAnagram('fcrxzwscanmligyxyvym', 'jxwtrhvujlmrpdoqbisbwhmgpmeoke')) // 30
