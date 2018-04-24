const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function BlackJack() {
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
                    rl.close();
                    return
                } else if (this.sum > 21) {
                    console.log('You lose!')
                    rl.close();
                    return
                }

                this.askForAnotherCard()

            } else if (answer[0].toLowerCase() === 'n') {
                console.log('your final score is', this.sum)
                rl.close();
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
        console.log('youve got', currentRand, '\nyour score is', this.sum)
    }
}

(new BlackJack).startGame()
