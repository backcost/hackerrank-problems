const staircase = (n) => {
    for (let i = 1; i <= n; i++) {
        console.log(`${'  '.repeat(n - i)}${'# '.repeat(i)}`)
    }
}

staircase(2)
staircase(3)
staircase(5)
staircase(8)
