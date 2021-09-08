// You will be given a square chess board with one queen and a number 
// of obstacles placed on it. Determine how many squares the queen can 
// attack.

// A queen is standing on an n x n chessboard. The chess board's rows 
// are numbered from 1 to n, going from bottom to top. Its columns are 
// numbered from 1 to n, going from left to right. Each square is 
// referenced by a tuple, (r,c), describing the row, r, and column, c, 
// where the square is located.

// The queen is standing at position (rq, cq). In a single move, she 
// can attack any square in any of the eight directions 
// (left, right, up, down, and the four diagonals). 

// There are obstacles on the chessboard, each preventing the queen 
// from attacking any square beyond it on that path. Given the queen's 
// position and the locations of all the obstacles, find and print the 
// number of squares the queen can attack from her position at (rq, cq).

const queensAttack = (n, k, r_q, c_q, obstacles = []) => {
    // without obstacles
    let north = n - r_q
    let south = r_q - 1
    let east = n - c_q
    let west = c_q - 1

    let northeast = Math.min(east, north)
    let northwest = Math.min(west, north)
    let southeast = Math.min(east, south)
    let southwest = Math.min(west, south)

    // with obstacles
    for(let el of obstacles) {
        var r_o = el[0]
        var c_o = el[1]

        if (r_o === r_q) {

            if (c_o > c_q) {
                east = Math.min(east, c_o - c_q - 1)
            } else {
                west = Math.min(west, c_q - c_o - 1)
            }

        } else if (c_o === c_q) {

            if (r_o > r_q) {
                north = Math.min(north, r_o - r_q - 1)
            } else {
                south = Math.min(south, r_q - r_o - 1)
            }

        } else if (Math.abs(c_o - c_q) === Math.abs(r_o - r_q)) { 

            if (c_o > c_q && r_o > r_q) {
                northeast = Math.min(northeast, r_o - r_q - 1)
            } else if (c_o < c_q && r_o > r_q) {
                northwest = Math.min(northwest, r_o - r_q - 1)
            } else if (c_o > c_q && r_o < r_q) {
                southeast = Math.min(southeast, r_q - r_o - 1)
            } else if (c_o < c_q && r_o < r_q) {
                southwest = Math.min(southwest, r_q - r_o - 1)
            }
        }
    }

    const maxAttack = north + south + east + west + northeast + northwest +
    southeast + southwest

    return maxAttack

}

console.log(queensAttack(8, 0, 4, 4)) // 27
console.log(queensAttack(8, 1, 4, 4, [[3, 5]])) // 24
console.log(queensAttack(4, 0, 4, 4)) // 9
console.log(queensAttack(5, 3, 4, 3, [[5, 5], [4, 2], [2, 3]])) // 10
console.log(queensAttack(1, 0, 1, 1)) // 0
console.log(queensAttack(4, 0, 2, 2)) // 11
console.log(queensAttack(5, 0, 5, 5)) // 12
console.log(queensAttack(100000, 0, 4187, 5068)) // 308369
console.log(queensAttack(100, 100, 48, 81, [[54, 87], [64, 97], [42, 75], [32, 65], 
    [42, 87],
    [32, 97],
    [54, 75],
    [64, 65],
    [48, 87],
    [48, 75],
    [54, 81],
    [42, 81],
    [45, 17],
    [14, 24],
    [35, 15],
    [95, 64],
    [63, 87],
    [25, 72],
    [71, 38],
    [96, 97],
    [16, 30],
    [60, 34],
    [31, 67],
    [26, 82],
    [20, 93],
    [81, 38],
    [51, 94],
    [75, 41],
    [79, 84],
    [79, 65],
    [76, 80],
    [52, 87],
    [81, 54],
    [89, 52],
    [20, 31],
    [10, 41],
    [32, 73],
    [83, 98],
    [87, 61],
    [82, 52],
    [80, 64],
    [82, 46],
    [49, 21],
    [73, 86],
    [37, 70],
    [43, 12],
    [94, 28],
    [10, 93],
    [52, 25],
    [50, 61],
    [52, 68],
    [52, 23],
    [60, 91],
    [79, 17],
    [93, 82],
    [12, 18],
    [75, 64],
    [69, 69],
    [94, 74],
    [61, 61],
    [46, 57],
    [67, 45],
    [96, 64],
    [83, 89],
    [58, 87],
    [76, 53],
    [79, 21],
    [94, 70],
    [16, 10],
    [50, 82],
    [92, 20],
    [40, 51],
    [49, 28],
    [51, 82],
    [35, 16],
    [15, 86],
    [78, 89],
    [41, 98],
    [70, 46],
    [79, 79],
    [24, 40],
    [91, 13],
    [59, 73],
    [35, 32],
    [40, 31],
    [14, 31],
    [71, 35],
    [96, 18],
    [27, 39],
    [28, 38],
    [41, 36],
    [31, 63],
    [52, 48],
    [81, 25],
    [49, 90],
    [32, 65],
    [25, 45],
    [63, 94],
    [89, 50],
    [43, 41]])) // 40
