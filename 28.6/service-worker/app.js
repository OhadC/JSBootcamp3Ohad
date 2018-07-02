if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/worker.js')
        .then(function (reg) {
            console.log('Registration succeeded. ', reg)
        }).catch(function (error) {
            console.log('Registration failed with ' + error)
        })
}