// You are choreographing a circus show with various animals. 
// For one act, you are given two kangaroos on a number line ready 
// to jump in the positive direction (i.e, toward positive infinity).

// The first kangaroo starts at location x1 and moves at a rate of 
// v1 meters per jump.

// The second kangaroo starts at location x2 and moves at a rate of 
// v2 meters per jump.

// You have to figure out a way to get both kangaroos at the same 
// location at the same time as part of the show. 
// If it is possible, return YES, otherwise return NO.

const kangaroo = (x1, v1, x2, v2) => {
    while (x1 < 100000000 && x2 < 100000000) {
        x1 += v1
        x2 += v2
        if (x1 === x2) {
            return "YES"
        }
    }
    return "NO"
}

console.log(kangaroo(0, 3, 4, 2)) // YES
console.log(kangaroo(0, 2, 5, 3)) // NO
console.log(kangaroo(4523, 8092, 9419, 8076)) // YES
