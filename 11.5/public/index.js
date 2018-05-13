$(function () {
    const serverUrl = 'http://localhost:3000'

    const state = {
        roomId: 'room1',
        nextPlayerIndex: -1,
        players: []
    }

    const $drawButton = $('button#draw')
    $drawButton.on('click', e => draw())
    const $stayButton = $('button#stay')
    $stayButton.on('click', e => updateNextPlayerIndex())   // TODO: stay on each player

    const $userCardsDiv = $('div#user-cards .container')
    const $scoreBoardDiv = $('div#score-board .container')


    disableButtons(true)
    fetchData()

    function disableButtons(bool) {
        $drawButton.attr("disabled", bool)
        $stayButton.attr("disabled", bool)
    }
    function updateUserCards() {
        // TODO: this

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
    function updateNextPlayerIndex() {
        let nextPlayerIndex = state.nextPlayerIndex + 1
        while (nextPlayerIndex <= state.players.length + state.nextPlayerIndex) {
            const nextPlayer = state.players[nextPlayerIndex % state.players.length]
            if (nextPlayer.isAlive && nextPlayer.score < nextPlayer.maxScore) {
                disableButtons(false)
                state.nextPlayerIndex = nextPlayerIndex % state.players.length
                return
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
    function draw() {
        const currPlayer = state.players[state.nextPlayerIndex]
        const url = `${serverUrl}/room/${state.roomId}/players/${currPlayer.name}/draw`
        return $.ajax({
            type: "GET",
            url: url,
        }).done(data => {
            updatePlayerScore(currPlayer, data.score)
            updateNextPlayerIndex()
            updateUserCards()
        })
    }
    function finishGame() {
        // TODO: this
        console.log('done!')
        disableButtons(true)
    }
    function addPlayer(player) {
        state.players.push(player)
        const $div = $('<div class="player-data">')
        $('<p>').text('Name: ' + player.name).appendTo($div)
        $('<p>').text('Score: ' + player.score).appendTo($div)
        $div.appendTo($scoreBoardDiv)
        player.div = $div
    }
    function fetchData() {
        const url = `${serverUrl}/room/${state.roomId}`
        $.ajax({
            type: "GET",
            url: url,
        }).done(data => {
            console.log(data)
            if (data.players) {
                data.players.forEach(addPlayer)
                updateNextPlayerIndex()
            }
        })
    }
})