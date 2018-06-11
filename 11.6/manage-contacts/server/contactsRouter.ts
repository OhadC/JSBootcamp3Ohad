import { Router } from 'express'
const contactsRouter = Router()

import * as dbApi from './dbApi'

contactsRouter.get('/', (req, res) => {
    dbApi.getContacts()
        .then(contacts => res.json(contacts))
        .catch(error => res.status(400).json({ 'error': error.message }))
})

contactsRouter.get('/:id', (req, res) => {
    dbApi.getContact(+req.params.id)
        .then(contact => res.json(contact))
        .catch(error => res.status(404).json({ 'error': error.message }))
})

contactsRouter.post('/', (req, res) => {
    const { name, password } = req.body
    dbApi.addContact(name, password)
        .then(newContact => res.json(newContact))
        .catch(error => res.status(400).json({ 'error': error.message }))
})

contactsRouter.put('/:id', (req, res) => {
    dbApi.editContact(+req.params.id, req.body)
        .then(updatedContact => res.json(updatedContact))
        .catch(error => res.status(404).json({ 'error': error.message }))
})

contactsRouter.delete('/:id', (req, res) => {
    dbApi.editContact(+req.params.id, req.body)
        .then(() => res.json({ 'success': true }))
        .catch(error => res.status(404).json({ 'error': error.message }))
})

export default contactsRouter
