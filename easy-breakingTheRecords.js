/* Maria plays college basketball and wants to go pro. Each season 
she maintains a record of her play. She tabulates the number of 
times she breaks her season record for most points and least points 
in a game. Points scored in the first game establish her record for 
the season, and she begins counting from there.

Example: scores = [12, 24, 10, 24]

Scores are in the same order as the games played. She tabulates 
her results as follows:

                                     Count
    Game  Score  Minimum  Maximum   Min Max
     0      12     12       12       0   0
     1      24     12       24       0   1
     2      10     10       24       1   1
     3      24     10       24       1   1

Given the scores for a season, determine the number of times 
Maria breaks her records for most and least points scored during 
the season. */

function breakingRecords(scores) {
    let mostPoints = scores[0]
    let leastPoints = scores[0]
    let mostPointsRecordBreaks = 0
    let leastPointsRecordBreaks = 0
    scores.shift()

    for (let el of scores) {
        if (el > mostPoints) {
            mostPoints = el
            mostPointsRecordBreaks++
        } else if (el < leastPoints) {
            leastPoints = el
            leastPointsRecordBreaks++
        }
    }
    return [mostPointsRecordBreaks, leastPointsRecordBreaks]
}
// Big-O Notation
// O(n)
// the for loop depends on the array size


console.log(breakingRecords([12, 24, 10, 24])) // [1, 1]
console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1])) // [2, 4]
console.log(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42])) // [4, 0]
