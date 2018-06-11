import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as cors from 'cors'
import contactsRouter from './contactsRouter'
import loginRouter from './loginRouter'

const app = express()

const corsOptions = {
    origin: /^http:\/\/localhost/
}
app.use(cors(corsOptions))
app.use(bodyParser.json())

app.use('/contacts', contactsRouter)
app.use('/login', loginRouter)

app.get('/', (req, res) => {
    res.send('hello')
})

app.get('*', (req, res) => {
    res.send('404')
})

app.listen(4000, () => {
    console.log('working')
})
