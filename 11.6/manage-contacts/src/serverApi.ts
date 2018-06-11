// import {delay} from "./helpers";

const serverUrl = "http://localhost:4000"

export async function getAllContacts(): Promise<Contact[]> {
    const response = await fetch(serverUrl + '/contacts')
    const contacts = await response.json() as Contact[]
    return contacts
}

export async function updateContact(contact: Contact) {
    await fetch(serverUrl + '/contacts/' + contact.id, {
        'method': 'PUT',
        body: JSON.stringify(contact),
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export async function signUp(name, password) {
    const response = await fetch(serverUrl + '/contacts/', {
        'method': 'POST',
        body: JSON.stringify({ name, password }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return response.json() as Promise<Contact>
}
export async function signIn(name, password) {
    const response = await fetch(serverUrl + '/login/', {
        'method': 'POST',
        body: JSON.stringify({ name, password }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return response.json() as Promise<Contact>
}

export interface Contact {
    id: number;
    name: string;
}
