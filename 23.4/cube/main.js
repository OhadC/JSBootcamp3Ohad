rollDice = _ => {
    const rundomNumber = Math.floor(Math.random() * 10 % 6 + 1)
    const letters = ['a', 'b', 'c', 'd', 'e', 'f']
    return letters[rundomNumber]
}

console.log(rollDice())
