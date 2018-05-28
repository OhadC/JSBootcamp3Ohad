$(function () {
    const serverUrl = 'http://localhost:3000'

    const state = {
        roomId: 'room1',
        currPlayerIndex: -1,
        players: [],
        playingPlayers: []
    }

    const $drawButton = $('button#draw')
    $drawButton.on('click', e => draw())
    const $stayButton = $('button#stay')
    $stayButton.on('click', e => stay())

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
    function updateCurrPlayerIndex() {
        console.log(state.playingPlayers)
        if (state.playingPlayers.length === 0) {
            finishGame()
        } else {
            disableButtons(false)
            state.currPlayerIndex = (state.currPlayerIndex + 1) % state.playingPlayers.length
            updateUserCards()
        }
    }
    function updatePlayerScore(player, scoreToAdd) {
        player.score += scoreToAdd
        player.div.children().get(1).remove()
        $('<p>').text('Score: ' + player.score).appendTo(player.div)
    }
    function draw() {
        const currPlayer = state.playingPlayers[state.currPlayerIndex]
        const url = `${serverUrl}/room/${state.roomId}/players/${currPlayer.name}/draw`
        return $.ajax({
            type: "GET",
            url: url,
        }).done(data => {
            updatePlayerScore(currPlayer, data.score)
            if (currPlayer.score >= 21) {
                currPlayer.div.addClass('dead')
                state.playingPlayers.splice(state.currPlayerIndex, 1)
                state.currPlayerIndex--
            }
            updateCurrPlayerIndex()
        })
    }
    function stay() {
        const currPlayer = state.playingPlayers[state.currPlayerIndex]
        currPlayer.div.addClass('staying')
        state.playingPlayers.splice(state.currPlayerIndex, 1)
        state.currPlayerIndex--
        updateCurrPlayerIndex()
    }
    function finishGame() {
        disableButtons(true)

        let max = 0
        let winners = []
        state.players.forEach(player => {
            if (player.isAlive) {
                if (player.score === max) {
                    winners.push(player)
                } else if (player.score > max) {
                    max = player.score
                    winners = [player]
                }
            }
        })
        winners.forEach(player => {
            player.div.removeClass('staying')
            player.div.addClass('winner')
        })
    }
    function addPlayer(player) {
        state.players.push(player)
        const $div = $('<div class="player-data">')
        $('<p>').text('Name: ' + player.name).appendTo($div)
        $('<p>').text('Score: ' + player.score).appendTo($div)
        $div.appendTo($scoreBoardDiv)
        player.div = $div

        if (!player.isAlive) {
            player.div.addClass('dead')
        } else if (player.score < 21) {
            state.playingPlayers.push(player)
        }
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
                updateCurrPlayerIndex()
            }
        })
    }
})