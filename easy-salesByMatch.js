/* There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are. */


const sockMerchant = (n, ar) => {
    let pairs = 0
    while (ar.length > 0) {
        let counter = 1

        for (let j = 1; j < ar.length; j++) {
            if (ar[0] === ar[j]) {
                counter++
                ar.splice(j, 1)
                j--
            }
        }
        ar.splice(0, 1)
        pairs += Math.floor(counter/2)
    }
    return pairs
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])) 
// 3
console.log(sockMerchant(7, [1, 2, 1, 2, 1, 3, 2])) 
// 2
console.log(sockMerchant(7, [6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5])) 
// 6