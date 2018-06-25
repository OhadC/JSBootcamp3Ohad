const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

const users = [
    {
        "name": "Ori",
        "id": 0
    },
    {
        "name": "Roni",
        "id": 1
    }
]
let nextId = 2

app.get('/', (req, res) => {
    res.json(users)
})

app.post('/', (req, res) => {
    const name = req.body.name
    const id = nextId++
    const user = { id, name }
    users.push(user)
    res.json(user)
})

app.listen(4000, () => console.log("listening at port 4000"))
