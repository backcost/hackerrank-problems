/* Taum is planning to celebrate the birthday of his friend, Diksha. 
There are two types of gifts that Diksha wants from Taum: one is black 
and the other is white. To make her happy, Taum has to buy b black gifts 
and w white gifts.

The cost of each black gift is bc units.
The cost of every white gift is wc units.
The cost to convert a black gift into white gift or vice versa is z units.

Determine the minimum cost of Diksha's gifts. */

const taumBday = (b, w, bc, wc, z) => {
    var allBlack = (b * bc + w * (bc + z))
    var allWhite = w * wc + b * (wc + z)
    var blackAndWhite = b * bc + w *wc

    var minimumCost = Math.min(allBlack, allWhite, blackAndWhite)

    return minimumCost
}

console.log(taumBday(3, 5, 3, 4, 1)) // 29
console.log(taumBday(10, 10, 1, 1, 1)) // 20
console.log(taumBday(5, 9, 2, 3, 4)) // 37
