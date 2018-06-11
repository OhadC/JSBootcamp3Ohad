"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = require("bcrypt");
const saltRounds = 7;
const contacts = [
// {
//     id: 0,
//     name: 'ori'
// }, {
//     id: 1,
//     name: 'udi'
// }, {
//     id: 2,
//     name: 'roni'
// }
];
exports.getContacts = async () => {
    return contacts.map(toContactWithoutPassword);
};
exports.getContact = async (id) => {
    const contactIndex = findContactIndex(id);
    if (contactIndex < 0) {
        throw Error('id not found');
    }
    return toContactWithoutPassword(contacts[contactIndex]);
};
exports.checkPassword = async (name, password) => {
    const contactIndex = findContactIndexByName(name);
    if (contactIndex < 0) {
        return false;
    }
    const contact = contacts[contactIndex];
    return await bcrypt.compare(password, contact.password);
};
exports.addContact = async (name, password) => {
    if (findContactIndexByName(name) !== -1) {
        throw Error('name already exists');
    }
    const id = !(contacts.length) ? 0 : contacts[contacts.length - 1].id + 1;
    const newPassword = await bcrypt.hash(password, saltRounds);
    const contact = {
        name,
        id,
        password: newPassword
    };
    contacts.push(contact);
    return toContactWithoutPassword(contact);
};
exports.editContact = async (id, newFields) => {
    const contactIndex = findContactIndex(id);
    if (contactIndex < 0) {
        throw Error('id not found');
    }
    const contact = contacts[contactIndex];
    contacts[contactIndex] = Object.assign({}, contact, newFields);
    return toContactWithoutPassword(contacts[contactIndex]);
};
exports.deleteContact = async (id) => {
    const contactIndex = findContactIndex(id);
    if (contactIndex < 0) {
        throw Error('id not found');
    }
    contacts.splice(contactIndex, 1);
    return;
};
function findContactIndex(id) {
    return contacts.findIndex(contact => id === contact.id);
}
function findContactIndexByName(name) {
    return contacts.findIndex(contact => name === contact.name);
}
function toContactWithoutPassword(contact) {
    const newContact = Object.assign({}, contact);
    delete newContact['password'];
    return newContact;
}
//# sourceMappingURL=dbApi.js.map