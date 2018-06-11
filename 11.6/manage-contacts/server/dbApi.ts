import * as bcrypt from 'bcrypt'

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
]

export const getContacts = async () => {
    return contacts.map(toContactWithoutPassword)
}

export const getContact = async (id) => {
    const contactIndex = findContactIndex(id)
    if (contactIndex < 0) {
        throw Error('id not found')
    }
    return toContactWithoutPassword(contacts[contactIndex])
}

export const checkPassword = async (name, password) => {
    const contactIndex = findContactIndexByName(name)
    if (contactIndex < 0) {
        return false
    }
    const contact = contacts[contactIndex]
    return await bcrypt.compare(password, contact.password)
}

export const addContact = async (name, password) => {
    if(findContactIndexByName(name) !== -1){
        throw Error('name already exists')
    }
    const id = !(contacts.length) ? 0 : contacts[contacts.length - 1].id + 1
    const newPassword = await bcrypt.hash(password, saltRounds)
    const contact = {
        name,
        id,
        password: newPassword
    }
    contacts.push(contact)
    return toContactWithoutPassword(contact)
}

export const editContact = async (id, newFields) => {
    const contactIndex = findContactIndex(id)
    if (contactIndex < 0) {
        throw Error('id not found')
    }
    const contact = contacts[contactIndex]
    contacts[contactIndex] = { ...contact, ...newFields }
    return toContactWithoutPassword(contacts[contactIndex])
}

export const deleteContact = async (id) => {
    const contactIndex = findContactIndex(id)
    if (contactIndex < 0) {
        throw Error('id not found')
    }
    contacts.splice(contactIndex, 1)
    return
}

function findContactIndex(id: number) {
    return contacts.findIndex(contact => id === contact.id);
}

function findContactIndexByName(name: string) {
    return contacts.findIndex(contact => name === contact.name);
}

function toContactWithoutPassword(contact) {
    const newContact = { ...contact }
    delete newContact['password']
    return newContact
}

