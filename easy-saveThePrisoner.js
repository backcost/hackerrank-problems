/* A jail has a number of prisoners and a number of treats to pass out to them. Their jailer decides the fairest way to divide the treats is to seat the prisoners around a circular table in sequentially numbered chairs. A chair number will be drawn from a hat. Beginning with the prisoner in that chair, one candy will be handed to each prisoner sequentially around the table until all have been distributed.

The jailer is playing a little joke, though. The last piece of candy looks like all the others, but it tastes awful. Determine the chair number occupied by the prisoner who will receive that candy. 

n: the number of prisoners
m: the number of sweets
s: the chair number to start passing out treats at
*/


const saveThePrisoner = (n, m, s) => {
    let jokeSeat = (m % n) - 1 + s

    if (jokeSeat > n) {
        jokeSeat -= n
    }   
    else if (jokeSeat === 0) {
        jokeSeat = n
    }
    return jokeSeat
}

console.log(saveThePrisoner(4, 6, 2)) 
// 3

console.log(saveThePrisoner(5, 2, 2)) 
// 3

console.log(saveThePrisoner(4, 4, 1)) 
// 4

console.log(saveThePrisoner(352926151, 380324688, 94730870)) 
// 122129406
