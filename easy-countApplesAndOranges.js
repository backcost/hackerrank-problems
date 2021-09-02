// Sam's house has an apple tree and an orange tree that yield an 
// abundance of fruit. Using the information given below, determine 
// the number of apples and oranges that land on Sam's house.

// The red region denotes the house, where s is the start point, 
// and t is the endpoint. The apple tree is to the left of the house, 
// and the orange tree is to its right.

// Assume the trees are located on a single point, where the apple tree 
// is at point a, and the orange tree is at point b.

// When a fruit falls from its tree, it lands d units of distance 
// from its tree of origin along the x-axis. *A negative value of d 
// means the fruit fell d units to the tree's left, and a positive 
// value of d means it falls d units to the tree's right. *

// Given the value of d for m apples and n oranges, determine how many 
// apples and oranges will fall on Sam's house (i.e., in the inclusive 
// range [s,t])?

const countApplesAndOranges = (s, t, a, b, apples, oranges) => {
    let appleHouse = 0
    let orangeHouse = 0

    for (let d of apples) {
        var realDistance = a + d

        if (realDistance >= s && realDistance <= t) {
            appleHouse++
        }
    }
    for (let d of oranges) {
        var realDistance = b + d

        if (realDistance >= s && realDistance <= t) {
            orangeHouse++
        }
    }
    console.log(appleHouse)
    console.log(orangeHouse)

}

console.log(countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]))
// 1, 1
