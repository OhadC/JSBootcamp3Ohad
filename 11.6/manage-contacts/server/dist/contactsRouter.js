"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const contactsRouter = express_1.Router();
const dbApi = require("./dbApi");
contactsRouter.get('/', (req, res) => {
    dbApi.getContacts()
        .then(contacts => res.json(contacts))
        .catch(error => res.status(400).json({ 'error': error.message }));
});
contactsRouter.get('/:id', (req, res) => {
    dbApi.getContact(+req.params.id)
        .then(contact => res.json(contact))
        .catch(error => res.status(404).json({ 'error': error.message }));
});
contactsRouter.post('/', (req, res) => {
    const { name, password } = req.body;
    dbApi.addContact(name, password)
        .then(newContact => res.json(newContact))
        .catch(error => res.status(400).json({ 'error': error.message }));
});
contactsRouter.put('/:id', (req, res) => {
    dbApi.editContact(+req.params.id, req.body)
        .then(updatedContact => res.json(updatedContact))
        .catch(error => res.status(404).json({ 'error': error.message }));
});
contactsRouter.delete('/:id', (req, res) => {
    dbApi.editContact(+req.params.id, req.body)
        .then(() => res.json({ 'success': true }))
        .catch(error => res.status(404).json({ 'error': error.message }));
});
exports.default = contactsRouter;
//# sourceMappingURL=contactsRouter.js.map