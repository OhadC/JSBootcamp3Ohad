onmessage = (file) => {
    const fr = new FileReader()

    fr.onload = (data) => {
        postMessage({ done: true, message: fr.result })
    }

    fr.onprogress = (e) => {
        postMessage({ done: false, message: 'Loading: ' + e.loaded / e.total * 100 + '%' })
    }

    fr.readAsDataURL(file.data)

    
}
