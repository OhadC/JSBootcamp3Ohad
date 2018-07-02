if (window.Worker) {
    const imgElement = document.querySelector('img')

    const worker = new Worker('worker.js')

    function onDrop(e) {
        console.log('onDrop')
        e.preventDefault()

        if (e.dataTransfer.items) {
            console.log('items', e.dataTransfer.items)
        }
        if (e.dataTransfer.files) {
            console.log('files', e.dataTransfer.files)

            worker.postMessage(e.dataTransfer.files[0])
        }
    }

    worker.onmessage = (message) => {
        if (message.data.done) {
            // console.log(message.data.message)
            imgElement.setAttribute('src', message.data.message)
        } else {
            console.log(message.data.message)
        }
    }

    function onDragOver(e) {
        e.preventDefault()
    }
}