import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'
import { addUser } from './actions'

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
            <p key={user.id}>
                {user.name}
            </p>
        ))

        return (
            <div className="App">
                <input type="text" ref={this.nameInputRef} />
                <button onClick={this.onAddUser}>Add User</button>
                {users}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    users: state.users
})

export default connect(mapStateToProps, {addUser})(App);
