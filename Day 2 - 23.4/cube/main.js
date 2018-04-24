const rollDice = _ => {
    const rundomNumber = Math.floor(Math.random() * 6)
    const letters = ['a', 'b', 'c', 'd', 'e', 'f']
    return letters[rundomNumber]
}

console.log(rollDice())
