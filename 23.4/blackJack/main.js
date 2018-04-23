const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function blackJack() {
    this.startGame = () => {
        this.sum = 0
        this.pickCard()
        this.askForAnotherCard()
    }

    this.askForAnotherCard = () => {
        rl.question('Pick another card? Y/N', (answer) => {

            console.log(answer)

            if (answer[0].toLowerCase() === 'y') {
                this.pickCard()

                if (this.sum === 21) {
                    console.log('You won!!')
                    return
                } else if (this.sum > 21) {
                    console.log('You lose!')
                    return
                }

                this.askForAnotherCard()

            } else if (answer[0].toLowerCase() === 'n') {
                console.log('your final score is', this.sum)
                return
            } else {
                this.askForAnotherCard()
            }
        });
    }

    this.getRandomNumber = max => Math.floor(Math.random() * max)

    this.pickCard = () => {
        let currentRand = this.getRandomNumber(13) + 1;
        this.sum += currentRand
        console.log(currentRand, 'your corrent score is ', this.sum)
    }
}

(new blackJack).startGame()
