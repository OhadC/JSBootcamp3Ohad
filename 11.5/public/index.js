$(function () {
    const serverUrl = 'http://localhost:3000'

    const state = {
        roomId: 'room1',
        currPlayerIndex: 0,
        players: []
    }

    const $drawButton = $('button#draw')
    const $stayButton = $('button#stay')

    const $userCardsDiv = $('div#user-cards .container')
    const $scoreBoardDiv = $('div#score-board .container')

    $drawButton.on('click', e => {
        const currPlayer = state.players[state.currPlayerIndex]
        draw(currPlayer.name).done(data => {
            updatePlayerScore(currPlayer, data.score)
            getNextPlayerIndex()
            updateUserCards()
        })
    })

    fetchData()

    function updateUserCards() {


        function drawCard(value) {
            const suits = ['H', 'C', 'S', 'D']
            const value10 = ['J', 'Q', 'K']
            const card = (
                value === 1 ? 'A' :
                    value < 10 ? value : value10[Math.floor(Math.random() * value10.length)]
            ) + suits[value % suits.length]
            return `https://deckofcardsapi.com/static/img/${card}.png`
        }
    }
    function getNextPlayerIndex() {
        let nextPlayerIndex = state.currPlayerIndex + 1
        while (nextPlayerIndex <= state.players.length + state.currPlayerIndex) {
            const nextPlayer = state.players[nextPlayerIndex % state.players.length]
            if (nextPlayer.isAlive && nextPlayer.score < nextPlayer.maxScore) {
                return nextPlayerIndex % state.players.length
            }
            nextPlayerIndex++
        }
        finishGame()
    }
    function updatePlayerScore(player, scoreToAdd) {
        player.score += scoreToAdd
        if (player.score > player.maxScore) {
            player.isAlive = false
        }
        player.div.children().get(1).remove()
        $('<p>').text('Score: ' + player.score).appendTo(player.div)
    }
    function draw(playerName) {
        const url = `${serverUrl}/room/${state.roomId}/players/${playerName}/draw`
        return $.ajax({
            type: "GET",
            url: url,
        })
    }
    function finishGame() {
        console.log('done!')
    }
    function fetchData() {
        const url = `${serverUrl}/room/${state.roomId}`
        $.ajax({
            type: "GET",
            url: url,
        }).done(data => {
            console.log(data)
            state.players = data.players || []
            state.players.forEach(player => {
                const $div = $('<div class="player-data">')
                player.div = $div
                $('<p>').text('Name: ' + player.name).appendTo($div)
                $('<p>').text('Score: ' + player.score).appendTo($div)
                $div.appendTo($scoreBoardDiv)
            })
        })
    }
})