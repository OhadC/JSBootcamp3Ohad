import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'
import { addUser, startLoading, stopLoading } from './actions'

class App extends Component {
    constructor(props) {
        super(props)

        this.nameInputRef = React.createRef()
    }

    onAddUser = () => {
        this.props.addUser(this.nameInputRef.current.value || "a user has no name")
        this.nameInputRef.current.value = ""
    }

    render() {
        const users = this.props.users.map(user => (
            <li key={'id' in user ? user.id : user.pendingId }>
                <span>{user.name}</span>
                {user.pendingId ? <span>Saving...</span> : null}
            </li>
        ))

        return (
            this.props.isLoading ? (<p>Loading...</p>) :
                (<div className="App">

                    <input type="text" ref={this.nameInputRef} />
                    <button onClick={this.onAddUser}>Add User</button>
                    <ul>
                        {users}
                    </ul>
                </div>)
        )
    }
}

const mapStateToProps = (state) => ({
    users: state.users,
    isLoading: state.isLoading
})

export default connect(mapStateToProps, { addUser, startLoading, stopLoading })(App);
