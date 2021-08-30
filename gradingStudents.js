// HackerLand University has the following grading policy:

// Every student receives a grade in the inclusive range from 0 to 100.
// Any grade less than 40 is a failing grade.

// Sam is a professor at the university and likes to round each 
// student's grade according to these rules:

// If the difference between the grade and the next multiple of 5 is 
// less than 3, round grade up to the next multiple of 5.

// If the value of grade is less than 38, no rounding occurs as 
// the result will still be a failing grade.

// Given the initial value of grade for each of Sam's n students, 
// write code to automate the rounding process.

const gradingStudents = (grades) => {
    let rounded = []

    for (let grade of grades) {
        if (grade < 0 || grade > 100) {
            rounded.push("Invalid grade value")
        } else if (grade < 38) {
            rounded.push(grade)
        } else {
            var difference = 5 - grade % 5

            if (difference < 3) {
                rounded.push(grade + difference)
            } else {
                rounded.push(grade)
            }
        }
    }
    return rounded
}

console.log(gradingStudents([73, 67, 38, 33, 84, 29, 57, -1]))
// 75, 67, 40, 33, 85, 29, 57, 'Invalid grade value'
