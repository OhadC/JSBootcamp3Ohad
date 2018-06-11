import * as React from 'react'
import { appStore } from '../appStore';
import { appService } from '../appService';

class Contacts extends React.Component {
    getContactsLIs(): any {
        const { contacts } = appStore;
        if (!contacts) {
            return;
        }

        return contacts.map(c => (
            <li key={c.id}>
                <span className='name'>{c.name}</span>
                <button onClick={() => appService.select(c)}>Select</button>
            </li>)
        )
    }

    render() {
        return (
            <ul>
                {this.getContactsLIs()}
            </ul>
        )
    }
}

export default Contacts
