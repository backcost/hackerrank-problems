/* Taum is planning to celebrate the birthday of his friend, Diksha. 
There are two types of gifts that Diksha wants from Taum: one is black 
and the other is white. To make her happy, Taum has to buy b black gifts 
and w white gifts.

The cost of each black gift is bc units.
The cost of every white gift is wc units.
The cost to convert a black gift into white gift or vice versa is z units.

Determine the minimum cost of Diksha's gifts. */

const taumBday = (b, w, bc, wc, z) => {
    const BigB = BigInt(b)
    const BigW = BigInt(w)
    const BigBc = BigInt(bc)
    const BigWc = BigInt(wc)
    const BigZ = BigInt(z)

    var allBlack = BigB * BigBc + BigW * (BigBc + BigZ)
    var allWhite = BigW * BigWc + BigB * (BigWc + BigZ)
    var blackAndWhite = BigB * BigBc + BigW * BigWc

    let minimumCost = allBlack

    for (let el of [allWhite, blackAndWhite]) {
        if (el < minimumCost) {
            minimumCost = el
        }
    }
    return minimumCost
}

console.log(taumBday(3, 5, 3, 4, 1)) // 29
console.log(taumBday(10, 10, 1, 1, 1)) // 20
console.log(taumBday(5, 9, 2, 3, 4)) // 37
