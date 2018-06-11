import { Router } from 'express'
const loginRouter = Router()

import * as dbApi from './dbApi'

loginRouter.post('/', (req, res) => {
    const { name, password } = req.body
    dbApi.checkPassword(name, password)
        .then(result => {
            if (result)
                res.json({ 'success': true })
            else
                res.status(401).json({ 'error': 'Incorrect name or password' })
        })
})

export default loginRouter
